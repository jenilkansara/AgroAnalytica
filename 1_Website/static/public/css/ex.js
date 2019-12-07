const app = document.getElementById("logos");
let ejs = require('ejs-html');
alert("hi");
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var request = new XMLHttpRequest();
alert("hi");//console.log("hi");
request.responseType = 'json';
//request.overrideMimeType("application/json");
request.open('GET', 'http://127.0.0.1:5000/weather/gujarat/by-districts/Ahmedabad', true);
request.onload = function() {
	var data = JSON.parse(request.responseText);
	console.log(data);
	console.log("hi");
	data.forEach(d => {
		const p = document.createElement('p');
		p.textContent = d.temperature;
		app.appendChild(p);
		//console.log(d.temperature);

	});
};
request.send();