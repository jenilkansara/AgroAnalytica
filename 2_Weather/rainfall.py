# -*- coding: utf-8 -*-
import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.graph_objs as go
import sqlite3
import netifaces as ni
import os
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

mapbox_access_token = 'pk.eyJ1Ijoia2FzaGlzaHNoYWgyMiIsImEiOiJjamVwaXExc3cwbWZtMnhsdGN1aW5pdzZjIn0.seJaDDq4YHV_UKIxNdeyPg'


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def get_data(stateName):
	conn = sqlite3.connect("weatherDb2.db")
	conn.row_factory = dict_factory
	cur = conn.cursor()
	cur.execute("select * from rainfall where state=?",(stateName,))
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
month_dic = [{'label':'January','value': 'JAN'},
             {'label':'February', 'value': 'FEB'},
             {'label':'March', 'value': 'MAR'},
             {'label':'April', 'value': 'APR'},
             {'label':'May', 'value': 'MAY'},
             {'label':'Jun', 'value': 'JUN'},
             {'label':'July','value': 'JUL'},
             {'label':'August', 'value': 'AUG'},
             {'label':'September', 'value': 'SEP'},
             {'label':'October', 'value': 'OCT'},
             {'label':'November', 'value': 'NOV'},
             {'label':'December', 'value': 'DEC'}]

listt =  dftemp['value'].values.tolist()
listy = range(1901,2016)
listm = ["January", "February","March","April","May","Jun","July","August","September","October","November","December"]

listv = []
temp = []
j=0
for i in listt:
    j=j+1
    temp.append(i)
    if(j>115):
        j=0
        listv.append(temp)
        temp = []

g_data = go.Data([
    go.Scattermapbox(
        lat=df['latitude'].tolist(),
        lon=df['longitude'].tolist(),
        mode='markers',
        marker=go.Marker(
            symbol = "marker",
            size=8,
        ),
        text = df['district'].tolist()
    ),
    
])

g_layout = go.Layout(
	title = 'ગુજરાતનો નકશો (કોઈ સ્થાન પસંદ કરો)',
    autosize=True,
    showlegend = False,
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
    ),
)

fig = dict( data=g_data, layout=g_layout )

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
                className = 'row'
        ),
            html.Div(
            [
                html.Div(
                    [
                    'મહિનો પસંદ કરો: ',
                    ], className = 'two columns',
                ),
                dcc.Dropdown(
                        id = 'month_dropdown',
                        options = month_dic,
                        searchable = False,
                        className = 'two columns',
                ),
                html.Div(
                    'વર્ષ શ્રેણી પસંદ કરો: ',
                    className = 'two columns',
                ),
                dcc.RangeSlider(
                    id = 'year_slider',
                    min=df['year'].min(),
                    max=df['year'].max(),
                    step=1,
                    marks={i: '{}'.format(i) for i in range(df['year'].min(), df['year'].max(),10)},
                    value=[1901, 2016],
                    className='six columns'
                )

            ],
            className = 'row'
        ),

        html.Div(
            [
                html.Div(
                    [
                        dcc.Graph(id='rainfall_chart')
                    ],
                    className='twelve columns',
                    title='ભારતમાં વરસાદ (સેન્ટીમીટર)',
                    style={'margin-top': '40'}
                ),
            ]
        ),
    ],
    className='row'
)

@app.callback(Output('textarea', 'children'),
            [Input('map', 'clickData')])
def changeText(clickData):
    if clickData is None:
        return 'Selected Area: None'
    else:
        return 'Selected Area: '+clickData['points'][0]['text']

@app.callback(Output('rainfall_chart', 'figure'),
            [Input('map', 'clickData'),
            Input('year_slider','value'),
            Input('month_dropdown','value')])
def make_individual_figure(clickData,year_value,value):
    layout_individual = go.Layout(
    title = 'ભારતમાં વરસાદ (સેન્ટીમીટર)',
    autosize=True,
    hovermode='closest',
    plot_bgcolor="#EFF0F3",
    paper_bgcolor="#EFF0F3",
    xaxis=dict(
        title='વર્ષ',
    ),
    yaxis=dict(
        title='વરસાદ (સેન્ટીમીટર)',
    ),
    mapbox=dict(
       #style="dark",
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

    if clickData is None or value is None or year_value is None:
        clickData = {u'points': [{u'curveNumber': 0, u'text': u'The Dangs', u'pointNumber': 23303, u'lon': 73.7007088, u'pointIndex': 23303, u'lat': 20.8253781}]}
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
    else:
        try:

            print type(clickData), clickData, value
            print year_value[0],year_value[1]
            print type(year_value[0])

            dff = df.loc[(df['district'] == clickData['points'][0]['text']) & (df['month'] == value)]
            dfff = dff[(dff['year']>= year_value[0]) & (dff['year']<=year_value[1])]
            data=[
                dict(
                    type='scatter',
                    mode='lines+markers',
                    title='Rainfall(cm)',
                    x=dfff['year'],
                    y=dfff['value'],
                    line=dict(
                        shape="spline",
                        smoothing=2,
                        width=1,
                        color='#000080'
                    ),
                    marker=dict(symbol='diamond-open')
                )
            ]
        except:
            annotation = dict(
            text='No data available',
            x=0.5,
            y=0.5,
            align="center",
            showarrow=False,
            xref="paper",
            yref="paper"
            )
            layout_individual['annotations'] = [annotation]
            data = []
    figure = dict(data=data, layout=layout_individual)
    return figure


if __name__ == '__main__':
	ip = ni.ifaddresses('eno1')[ni.AF_INET][0]['addr']
	app.run_server(host=ip, port = 8052)
