# -*- coding: utf-8 -*-
import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
import pandas as pd
import json, os
import plotly.graph_objs as go
import sqlite3
import requests
import netifaces as ni
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

mapbox_access_token = 'pk.eyJ1Ijoia2FzaGlzaHNoYWgyMiIsImEiOiJjamVwaXExc3cwbWZtMnhsdGN1aW5pdzZjIn0.seJaDDq4YHV_UKIxNdeyPg'

temp_var = 0

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def get_data(stateName):
    conn = sqlite3.connect("weatherDb2.db")
    conn.row_factory = dict_factory
    cur = conn.cursor()
    cur.execute("select * from rainfall where state=?", (stateName,))

    result = cur.fetchall()
    df = pd.DataFrame.from_dict(result)

    return df


def get_temp_data():
    conn = sqlite3.connect("weatherDb2.db")
    conn.row_factory = dict_factory
    cur = conn.cursor()
    cur.execute("select * from temperature")

    result = cur.fetchall()
    df = pd.DataFrame.from_dict(result)
    return df

app = dash.Dash()
app.config.suppress_callback_exceptions = True

app.css.append_css({
    'external_url': 'https://codepen.io/chriddyp/pen/bWLwgP.css'
})

df = get_data('Gujarat')
dftemp = get_temp_data()
# print df
month_dic = [{'label': 'January', 'value': 'JAN'},
             {'label': 'February', 'value': 'FEB'},
             {'label': 'March', 'value': 'MAR'},
             {'label': 'April', 'value': 'APR'},
             {'label': 'May', 'value': 'MAY'},
             {'label': 'Jun', 'value': 'JUN'},
             {'label': 'July', 'value': 'JUL'},
             {'label': 'August', 'value': 'AUG'},
             {'label': 'September', 'value': 'SEP'},
             {'label': 'October', 'value': 'OCT'},
             {'label': 'November', 'value': 'NOV'},
             {'label': 'December', 'value': 'DEC'}]

# months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

listt = dftemp['value'].values.tolist()
listy = range(1901, 2016)
listm = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
         "December"]
listv = []
temp = []
j = 0
for i in listt:
    j = j + 1
    temp.append(i)
    if (j > 115):
        j = 0
        listv.append(temp)
        temp = []

g_data = go.Data([
    go.Scattermapbox(
        lat=df['latitude'].tolist(),
        lon=df['longitude'].tolist(),
        mode='markers',
        marker=go.Marker(
            symbol="marker",
            size=8,
            # color = 'rgba(255,165,0,1)'
        ),
        text=df['district'].tolist()
    ),

])

g_layout = go.Layout(
    title='ગુજરાતનો નકશો (કોઈ સ્થાન પસંદ કરો)',
    autosize=True,
    showlegend=False,
    hovermode='closest',
    plot_bgcolor="#EFF0F3",
    paper_bgcolor="#EFF0F3",
    margin=dict(
        l=10,
        r=10,
        b=10,
        t=40
    ),
    mapbox=dict(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=dict(
            lat=23.030357,
            lon=72.517845
        ),
        pitch=0,
        zoom=7,
        layers=[
        ]
    ),
)

fig = dict(data=g_data, layout=g_layout)

app.layout = html.Div(
    [

        html.Div(
            [
                html.Div(
                    [
                        dcc.Graph(id='map', figure=fig, style={'height': 600},)
                    ],
                    className='',
                    style={'margin-top': '73'}
                ),

            ],
            className='row'
        ),

        html.Div(
            [

                html.Div(
                    [
                        dcc.Graph(id='temp'),
                    ],
                    className='six columns',
                    style={'margin-top': '20'},
                ),
                html.Div(
                    [
                        dcc.Graph(id='humidity'),
                    ],
                    className='six columns',
                    style={'margin-top': '20'},
                ),
            ],
            className='row',
        ),

    ],
    className='row'
)

def get_weather_forecast(cityName):
    openWeatherMapKey = "10941c760b0babb1104eda259d451c39"
    indiaKey = "1269750"
    url = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "," + indiaKey + "&APPID=" + openWeatherMapKey
    result = requests.get(url)
    result = json.loads(result.content)
    print result
    date_time = [result['list'][0]['dt_txt']]
    humidity = [result['list'][0]['main']['humidity']]
    temperature = [result['list'][0]['main']['temp']]
    temperature[0] = temperature[0] - 273
    weather_description = [result['list'][0]['weather'][0]['description']]
    wind_degree = [result['list'][0]['wind']['deg']]
    wind_speed = [result['list'][0]['wind']['speed']]

    for i in range(1, len(result['list'])):
        date_time.append(result['list'][i]['dt_txt'])
        humidity.append(result['list'][i]['main']['humidity'])
        temperature.append(result['list'][i]['main']['temp'])
        temperature[i] = temperature[i] - 273
        weather_description.append(result['list'][i]['weather'][0]['description'])
        wind_degree.append(result['list'][i]['wind']['deg'])
        wind_speed.append(result['list'][i]['wind']['speed'])
    return date_time, humidity, temperature, weather_description, wind_degree, wind_speed

@app.callback(Output('textarea', 'children'),
              [Input('map', 'clickData')])
def changeText(clickData):
    if clickData is None:
        return 'Selected Area: None'
    else:
        return 'Selected Area: ' + clickData['points'][0]['text']

@app.callback(Output('humidity', 'figure'),
              [Input('map', 'clickData')])
def generateChart(clickData):
    layout_individual = go.Layout(
        title='ભેજ આગાહી - 5 દિવસ',
        autosize=True,
        hovermode='closest',
        plot_bgcolor="#EFF0F3",
        paper_bgcolor="#EFF0F3",
        xaxis=dict(
            title='તારીખ અને સમય',
        ),
        yaxis=dict(
            title='ભેજ (%)',
        ),
        mapbox=dict(
            # style="dark",
            accesstoken=mapbox_access_token,
            bearing=0,
            center=dict(
                lat=23.030357,
                lon=72.517845
            ),
            pitch=0,
            zoom=5,

        ),
    )

    if clickData is None:
        clickData = {u'points': [
            {u'curveNumber': 0, u'text': u'The Dangs', u'pointNumber': 23303, u'lon': 73.7007088, u'pointIndex': 23303,
             u'lat': 20.8253781}]}
        annotation = dict(
            text='કોઈ માહિતી ઉપલબ્ધ નથી',
            x=0.5,
            y=0.5,
            align="center",
            showarrow=False,
            xref="paper",
            yref="paper"
        )
        layout_individual['annotations'] = [annotation]
        data = []
        # print type(clickData), clickData
    else:
        # try:

        # print type(clickData), clickData

        date_time, humidity, temperature, weather_description, wind_degree, wind_speed = get_weather_forecast(
            clickData['points'][0]['text'])
        data = [
            dict(
                type='scatter',
                mode='lines+markers',
                title='Wind speed',
                x=date_time,
                y=humidity,
                line=dict(
                    shape="spline",
                    smoothing=2,
                    width=1,
                    color='#000080'
                ),
                marker=dict(symbol='diamond-open')
            )
        ]
        # except:
        '''
               html.Div(
            [
                html.H1('વર્તમાન હવામાન'),

                html.P('તાપમાન', temp_var),
                html.P('ભેજ ')
            ],
            className='row',
        ),

        '''
    figure = dict(data=data, layout=layout_individual)
    return figure


@app.callback(Output('temp', 'figure'),
              [Input('map', 'clickData')])
def generateChart(clickData):
    layout_individual = go.Layout(
        title='તાપમાન આગાહી - 5 દિવસ',
        autosize=True,
        hovermode='closest',
        plot_bgcolor="#EFF0F3",
        paper_bgcolor="#EFF0F3",
        xaxis=dict(
            title='તારીખ અને સમય',
        ),
        yaxis=dict(
            title='તાપમાન (સેલ્સિયસ)',
        ),
        mapbox=dict(
            # style="dark",
            accesstoken=mapbox_access_token,
            bearing=0,
            center=dict(
                lat=23.030357,
                lon=72.517845
            ),
            pitch=0,
            zoom=5,

        ),
    )

    if clickData is None:
        clickData = {u'points': [
            {u'curveNumber': 0, u'text': u'The Dangs', u'pointNumber': 23303, u'lon': 73.7007088, u'pointIndex': 23303,
             u'lat': 20.8253781}]}
        annotation = dict(
            text='કોઈ માહિતી ઉપલબ્ધ નથી',
            x=0.5,
            y=0.5,
            align="center",
            showarrow=False,
            xref="paper",
            yref="paper"
        )
        layout_individual['annotations'] = [annotation]
        data = []
        # print type(clickData), clickData
    else:
        # try:

        # print type(clickData), clickData

        date_time, humidity, temperature, weather_description, wind_degree, wind_speed = get_weather_forecast(
            clickData['points'][0]['text'])

        data = [
            dict(
                type='scatter',
                mode='lines+markers',
                title='Wind speed',
                x=date_time,
                y=temperature,
                line=dict(
                    shape="spline",
                    smoothing=2,
                    width=1,
                    color='#000080'
                ),
                marker=dict(symbol='diamond-open')
            )
        ]

    figure = dict(data=data, layout=layout_individual)
    return figure

if __name__ == '__main__':
    ip = ni.ifaddresses('eno1')[ni.AF_INET][0]['addr']
    app.run_server(host=ip, port=8053)