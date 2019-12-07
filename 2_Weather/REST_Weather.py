# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@app.route('/temperature/temperatureHistory')
def getTemperatureHistory():
	conn = sqlite3.connect("weatherDb2.db")
	conn.row_factory = dict_factory
	cur = conn.cursor()
	cur.execute("select * from temperature")
	result = cur.fetchall()
	result2 = jsonify(result)
	return result2

@app.route('/temperature/temperatureByYear/year=<int:val>',methods = ['GET'])
def getTemperatureByYear(val):
	if request.method == 'GET':
		conn = sqlite3.connect("weatherDb2.db")
		conn.row_factory = dict_factory
		cur = conn.cursor()
		cur.execute("select * from temperature where year=?",(val,))
		result = cur.fetchall()
		result2 = jsonify(result)
		return result2

@app.route('/temperature/temperatureData/fromYear=<int:val>&toYear=<int:val2>',methods = ['GET'])
def getTemperatureData(val,val2):
	if request.method == 'GET':
		conn = sqlite3.connect("weatherDb2.db")
		conn.row_factory = dict_factory
		cur = conn.cursor()
		cur.execute("select * from temperature where year between ? and ?",(val,val2))
		result = cur.fetchall()
		result2 = jsonify(result)
		return result2


@app.route('/rainfall/rainfallHistory-india',methods = ['GET'])
def getRainfallHistory():
	if request.method == 'GET':
		conn = sqlite3.connect("weatherDb2.db")
		conn.row_factory = dict_factory
		cur = conn.cursor()
		cur.execute("select * from rainfall")
		result = cur.fetchall()
		result2 = jsonify(result)
		return result2

@app.route('/rainfall/rainfallByState/state=<string:val>',methods = ['GET'])
def rainfallByState(val):
	if request.method == 'GET':
		conn = sqlite3.connect("weatherDb2.db")
		conn.row_factory = dict_factory
		cur = conn.cursor()
		cur.execute("select * from rainfall where state=?",(val,))
		result = cur.fetchall()
		result2 = jsonify(result)
		return result2

@app.route('/rainfall/rainfallByStateDistrictYear/state=<string:val>&district=<string:val2>&year=<string:val3>',methods = ['GET'])
def rainfallStateCityYear(val,val2,val3):
	if request.method == 'GET':
		conn = sqlite3.connect("weatherDb2.db")
		conn.row_factory = dict_factory
		cur = conn.cursor()
		cur.execute("select * from rainfall where state=? and district=? and year=?",(val,val2,val3))
		result = cur.fetchall()
		result2 = jsonify(result)
		return result2

if __name__ == '__main__':
    app.debug = True
    app.run(host='10.20.24.22', port=5000)
