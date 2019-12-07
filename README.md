# AgroAnalytica

# Project Configuration

OS: Ubuntu Linux
Python: 2.7

Libraries: netifaces, flask, dash, dash_core_components, dash_html_components, 
	   pandas, json, plotly, sqlite3, requests, sys, os

Project Folder Structure:

1_Website - Contains the html framework of the project including CSS dependencies. Also contains the 5th Module Krishi Mantra.

2_Weather - Contains sourcefiles for the features Rainfall, and Temperature and Humidity Prediction, REST service which provides access to data.

3_Pesticides - Contains sourcefiles for pesticide usage visualization

4_Market - Contains sourcefiles of Crop Market Data Feature. 

How to Run:

1: From 1_Website, run AgroAnalytica.py
2: From 2_Weather, run REST_Weather.py, forecast.py, rainfall.py
3: From 4_Market, run marketprices.py

How to change the configuration for a new deployment:

1:For all the python files, AgroAnalytica.py, REST_Weather.py, forecast.py, rainfall.py, run marketprices.py, there is an app.run.server entity at the end of every source file. which looks as following.

if __name__ == '__main__':
	ip = ni.ifaddresses('eno1')[ni.AF_INET][0]['addr']
	app.run_server(host=ip,port=8067)


Change the ifaddresses to the one in your PC. (To find out, use ifconfig) and change the port number if the one in the source file is already in use by the system.

2: Change the ip and port number in the html source files, rainfall.html, weather.html, rainfall.html. The ip and port are mentioned in the <body> section using <iframe>  




 
