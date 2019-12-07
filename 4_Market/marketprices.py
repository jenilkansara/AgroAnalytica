# -*- coding: utf-8 -*-
import dash, os
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import netifaces as ni
from plotly.graph_objs import *
import pandas as pd
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']
mapbox_access_token = 'pk.eyJ1Ijoia2FzaGlzaHNoYWgyMiIsImEiOiJjamVwaXExc3cwbWZtMnhsdGN1aW5pdzZjIn0.seJaDDq4YHV_UKIxNdeyPg'
app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

df1 = pd.read_csv('marketData.csv')


colors = {
    'background': '#FFFFFF',
    'text': '#7FDBFF'
}

market = ""
min_year_slider = None
max_year_slider = None

df = pd.read_csv('marketLoc.csv')
df['text'] = 'District: '+df['District']

g_data = Data([
    Scattermapbox(
        lat=df['lat'].tolist(),
        lon=df['lon'].tolist(),
        mode='markers',
        marker=Marker(
            symbol = "marker",
            size=8,
        ),
        text=df['text'].tolist(),
    )
])

g_layout = Layout(
    title='ગુજરાતનો નકશો (કોઈ સ્થાન પસંદ કરો)',
    showlegend=False,
    hovermode='closest',
    plot_bgcolor="#EFF0F3",
    paper_bgcolor="#EFF0F3",
    autosize=True,
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
        zoom=6,
        layers = [
            dict(

            )
        ]
    ),
)

fig = dict(data=g_data, layout=g_layout)

app.layout = html.Div(
    [
        html.Div(
            [
                html.Div([
                dcc.Graph(id='map',figure=fig, style={'height': 500},),
                ],className='', style={'margin-top': '73'}),
            ], className='row'
        ),

        html.Div(
            [
                html.Div(
                    id='market_name'
                ),

                html.Label('ઉપલબ્ધ પાકો : ',),

                dcc.Dropdown(
                    id='menu1',
                    options=[{}],
                    searchable=False,
                    style={'width': '55%',},
                ),

                html.Label('ઉપલબ્ધ પ્રકારો : ',),
                dcc.Dropdown(
                    id='menu2',
                    options=[{}],
                    searchable=False,
                    style={'width': '55%',},

                ),

                dcc.RangeSlider(
                    id='year_range_select',
                    allowCross=False,
                    className='four columns',
                ),

                html.Div(
                    id='time_series_div',
                )
            ],
        ),
    ], className = 'row',
)

@app.callback(
    Output('market_name', 'children'),
    [Input('map','clickData')]
)
def updateCropDropMenu(hoverData):
    if hoverData is not None:
        district = hoverData['points'][0]['text']
        start = district.find(':') + 2
        value = district[start:]
        return value
    else:
        return "પસંદ કરેલ બજાર : કોઈ નહિ "

@app.callback(
    Output('menu1', 'options'),
    [Input('market_name','children')]
)
def updateCropDropMenu(value):
    if value is not None:
        # print df1
        df_by_market = df1[df1['market'] == value]
        type = []
        print value
        for i in df_by_market.cropname.unique():
            type.append(i)
        print type
        if type == []:
            return [{}]
        else:
            return [{'label': i, 'value': i} for i in type]
    else:
        return [{}]

@app.callback(
    Output('menu2', 'options'),
    [Input('menu1', 'value'), Input('market_name','children')])

def updateCropType(cname, mname):
    if cname is not None:
        df_by_market = df1[df1['market'] == mname]
        df_by_crops = df_by_market[df_by_market['cropname'] == cname]
        type = []
        for i in df_by_crops.croptype.unique():
            type.append(i)
        if type == []:
            return [{}]
        else:
            return [{'label': i, 'value': i} for i in type]
    else:
        return [{}]

@app.callback(
    Output('year_range_select','marks'),
    [Input('menu2','value'),Input('market_name','children'),Input('menu1', 'value')]
)
def updateSliderMarks(ctype,mname,cname):
    global market
    if ctype == "" or mname == "":
        return {}
    else:
        df_by_market = df1[df1['market'] == mname]
        df_by_crops = df_by_market[df_by_market['cropname'] == cname]
        df_by_type = df_by_crops[df_by_crops['croptype'] == ctype]
        years = []
        for i in df_by_type.year.unique():
            years.append(i)

        marks = {i: '{}'.format(i) for i in years}
        return marks

@app.callback(
    Output('year_range_select','min'),
    [Input('year_range_select','marks')]
)
def updateSliderValues(marks):
    if marks == {}:
        return None
    else:
        global min_year_slider, max_year_slider
        min_year_slider = sorted(marks.keys())[0]
        max_year_slider = sorted(marks.keys())[-1]
        return sorted(marks.keys())[0]

@app.callback(
    Output('year_range_select','max'),
    [Input('year_range_select','min')]
)
def updateSliderValues(marks):
    if marks == None:
        return None
    else:
        return max_year_slider

@app.callback(
    Output('time_series_div','children'),
    [Input('year_range_select','value'),Input('market_name', 'children'),Input('menu2','value'),Input('menu1','value')]
)
def updateGraph(year_range,mname,ctype,cname):
    print year_range
    if year_range == None:
        return None
    else:
        graphs = []
        df_by_crops = df1[df1['cropname'] == cname]
        df_by_market = df_by_crops[df_by_crops['market'] == mname]
        df_by_type = df_by_market[df_by_market['croptype'] == ctype]
        data = df_by_type
        graphs.append(dcc.Graph(
            id='time_series_graph',
            figure={
                'data': [
                {
                    'x': data['date'],
                    'y': data['modprice'],
                    'name': 'Average Price',
                    'type': 'line',
                },
                ],
                'layout': {
                    'xaxis': {
                        'title' : 'Time',
                    },
                    'yaxis': {
                        'title' : 'Price',
                    },
                    'plot_bgcolor': colors['background'],
                    'paper_bgcolor': colors['background'],
                }
            },
        ))
        return graphs

if __name__ == '__main__':
	ip = ni.ifaddresses('eno1')[ni.AF_INET][0]['addr']
	app.run_server(host=ip,port=8067)