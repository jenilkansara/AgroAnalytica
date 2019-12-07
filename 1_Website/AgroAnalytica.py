# -*- coding: utf-8 -*-
import netifaces as ni
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index.html')

def render_main():
    return render_template('index.html')

@app.route('/index.html')
def index_page():
    return render_template('index.html')

@app.route('/rainfall.html')
def rainfall_page():
    return render_template('rainfall.html')

@app.route('/weather.html')
def weather_page():
    return render_template('weather.html')

@app.route('/pesticide.html')
def pesticide_page():
    return render_template('pesticide.html')

@app.route('/market.html')
def market_page():
    return render_template('market.html')

@app.route('/commodities.html')
def d_page():
    return render_template('commodities.html')

if __name__ == '__main__':
    ip = ni.ifaddresses('eno1')[ni.AF_INET][0]['addr']
    print(ip)
    app.run(host=ip,port=5010)