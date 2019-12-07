# -*- coding: utf-8 -*-
import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import plotly.graph_objs as go
from dash.dependencies import Input, Output
from plotly.graph_objs import *
import netifaces as ni
import math
from translate import Translator
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

mapbox_access_token = 'pk.eyJ1Ijoia2FzaGlzaHNoYWgyMiIsImEiOiJjamVwaXExc3cwbWZtMnhsdGN1aW5pdzZjIn0.seJaDDq4YHV_UKIxNdeyPg'
app = dash.Dash()
app.css.append_css({
    'external_url': 'https://codepen.io/chriddyp/pen/bWLwgP.css'
})
app.config.suppress_callback_exceptions = True

df = pd.read_csv('result.csv')
df['text'] = 'Region: ' + df['Region'] + '<br>' + 'Crop: ' + df['Crop'] + '<br>' + 'Disease: ' + df[
    'Name of Pest/Disease']

translator = Translator(to_lang="Gujarati")

pest_usage_freq = pd.read_csv('pesticidewise_requirement.csv')
# = pd.read_csv('production_of_pesticide.csv')
state_con = pd.read_csv('statewise_consumption.csv')

con_years = [list(state_con)[1:]]
list_pesticides = list(pest_usage_freq['Pesticides'])
state_con = state_con[:-1]

lat, lon = [], []
for point in df['coordinates']:
    x = point.split(',')[0]
    y = point.split(',')[1]
    lon.append(x)
    lat.append(y)

g_data = Data([
    Scattermapbox(
        lat=lat,
        lon=lon,
        mode='markers',
        marker=Marker(
            symbol="marker",
            size=10,
        ),
        text=df['text'].tolist(),
    )
])

g_layout = Layout(
    title='ગુજરાતનો નકશો (કોઈ સ્થાન પસંદ કરો)',
    autosize=True,
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
            lat=20.5937,  # 23.030357,
            lon=78.9629,  # 72.517845
        ),
        pitch=0,
        zoom=5,
    ),
)

fig = dict(data=g_data, layout=g_layout)

app.layout = html.Div(
    [
        html.Div([
            html.Div(
                'પેસ્ટીસાઇડ : ',
                className='two columns',
            ),
            html.Div(
                dcc.Dropdown(
                    id='menu2',
                    options=[{'label': i, 'value': i} for i in list_pesticides],
                    searchable=True,
                    multi=False,
                    placeholder='નીચે આવતા વિકલ્પ પસંદ કરો',
                    className='three columns'
                ),
            ),
        ],
            className='row', style={'margin-top': '80'}
        ),
        html.Div([
            dcc.Graph(
                id='Pest_Usage_Freq',

                className='six columns',
            ),

        ],
            className='row', style={'margin-top': '10'}
        ),

        html.Div([

            html.Div(
                'વર્ષ ',
                className='two columns'
            ),
            html.Div(
                dcc.Dropdown(
                    id='menu1',
                    options=[{'label': i, 'value': i} for i in con_years[0]],
                    searchable=True,
                    placeholder='નીચે આવતા વિકલ્પ પસંદ કરો',
                ), style={

                },
                className='three columns'
            ),
        ], style={'margin-top': '40px', },
            className='row'
        ),
        html.Div([
            html.Div(
                id='state_consumption_graph',
                style={
                    'margin-top': '20px',
                },
                className='six columns'
            ),
        ],
            className='row'
        )
    ],
)


@app.callback(
    Output('textinfo', 'children'),
    [Input('map', 'clickData')]
)
def hoverDatatoText(hoverData):
    if hoverData is not None:
        lat, lon = hoverData['points'][0]['lat'], hoverData['points'][0]['lon']
        s = str(lon) + "," + str(lat)
        result = df[df.coordinates == s]
        values = []
        for row in result.iterrows():
            index, data = row
            values.append(data.tolist())
        return html.Div([

        ])
    else:
        return "Click On a Point Above"


@app.callback(
    Output('Pest_Usage_Freq', 'figure'),
    [Input('menu2', 'value')]
)
def updateGraph1(value):
    if value is None:
        return None
    else:
        print(value, type(value))
        value = str(value)
        print("After :", value, type(value))
        l_val = []
        l_val.append(value)
        traces = []
        avail_y = [2010, 2011, 2012, 2013, 2014, 2015, 2016]
        x_t = []
        y_t = []
        for pesticide_name in l_val:
            print(pesticide_name)
            cnt = 2010
            for i in avail_y:
                print(i)
                st = str(cnt)
                st = st + "-1" + str(int(st[3]) + 1)
                x_t.append(cnt)
                row = pest_usage_freq[pest_usage_freq['Pesticides'] == value]
                # print(row)
                if math.isnan(row[st]) is False:
                    y_t.append(int(row[st]))
                else:
                    y_t.append(0)
                cnt += 1
        print(x_t)
        print(y_t)
        traces.append(go.Scatter(
            x=x_t,
            y=y_t,
        ))
        layout1 = go.Layout(
            title='પેસ્ટીસાઇડ ઉપયોગ ફ્રીક્વન્સી ગ્રાફ',
            showlegend=True,
            plot_bgcolor='#eff0f3',
            paper_bgcolor='#eff0f3',
            xaxis=dict(
                title='પેસ્ટીસાઇડ નામ',
            ),
            yaxis=dict(
                title='ઉપયોગ (ટનમાં)',
            ),
        )
    return go.Figure(
        data=traces, layout=layout1
    )


@app.callback(
    Output('state_consumption_graph', 'children'),
    [Input('menu1', 'value')]
)
def updateGraph1(value):
    translation = translator.translate(value)
    if value is None:
        return "વર્ષ "
    else:
        return dcc.Graph(
            id='state_consumption_graph_r',
            figure=go.Figure(
                data=[
                    go.Bar(
                        x=state_con['States'],
                        y=state_con[value],
                        #hoverinfo='label+percent+value',
                        #textinfo='none',

                    ),
                ],
                layout=go.Layout(

                    title='રાજ્ય મુજબની વપરાશ :' + translation,



                ),
            ),
            style={'margin-top': '10'}
        )


if __name__ == '__main__':
    ip = ni.ifaddresses('eno1')[ni.AF_INET][0]['addr']
    app.run_server(host=ip, port=8070)
