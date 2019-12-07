
var mymap = L.map('main-panel').setView([22.2587, 71.1924], 6.5);

function polystyle(feature) {
                    return {
                      fillColor: 'white',
                      weight: 2,
                      opacity: 1,
                      dashArray: '3',
                      color: 'black',  //Outline color
                      fillOpacity: 0.7

                    };
                  }
function highlightFeature(e) {
  var layer = e.target;
  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7
  });
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  gujaratlayer.resetStyle(e.target);
  info.update();
}
function zoomToFeature(e) {
  mymap.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
  layer.on({
  mouseover: highlightFeature,
  mouseout: resetHighlight,
  click: zoomToFeature,
});
}

var gujaratlayer = L.geoJson(g, {style: polystyle, onEachFeature: onEachFeature }).addTo(mymap);   
var mark;
var m = [];
var markersLayer = new L.LayerGroup();
 
function show(){
  markersLayer.clearLayers(); 
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        
        mark = L.marker([23.033863, 72.585022]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Vadodara&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.3, 73.2]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Anand&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.56, 72.96]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Dahod&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.84, 74.26]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Kheda&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.75, 72.68]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Gandhinagar&APPID=11611409c839bfaebb500138fc26a9b3').done(function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([23.22, 72.65]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Patan&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([23.8493, 72.1266]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Rajkot&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.3, 70.8]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Amreli&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([21.6, 71.21]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Bhavnagar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([21.77, 72.14]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Botad&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.17, 71.67]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Jamnagar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.47, 70.06]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Junagadh&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([21.52, 70.46]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Morbi&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.82, 70.83]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Porbandar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([21.64, 69.61]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Surendranagar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([22.72, 71.65]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Surat&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([21.19, 72.81]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Bharuch&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([21.71, 73.00]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Valsad&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Temp: ${(data.main.temp-273.15).toFixed(2)}<br>
                    Name: ${data.name}`
        mark = L.marker([20.61, 72.93]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
markersLayer.addTo(mymap);
}

function showwind(){
  markersLayer.clearLayers();
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([23.033863, 72.585022]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Vadodara&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([22.3, 73.2]).bindPopup(text);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Anand&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([22.56, 72.96]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Dahod&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([22.84, 74.26]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('http://localhost:7000/weather/gujarat/current-temperature-analysis?district-name=Kheda', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([22.75, 72.68]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Gandhinagar&APPID=11611409c839bfaebb500138fc26a9b3').done(function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([23.22, 72.65]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Patan&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([23.8493, 72.1266]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Rajkot&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([22.3, 70.8]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Amreli&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([21.6, 71.21]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Bhavnagar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([21.77, 72.14]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Botad&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([22.17, 71.67]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Jamnagar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([22.47, 70.06]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Junagadh&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([21.52, 70.46]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Morbi&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        
        mark = L.marker([22.82, 70.83]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Porbandar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        
        mark = L.marker([21.64, 69.61]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Surendranagar&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
       var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        
        mark = L.marker([22.72, 71.65]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Surat&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        
        mark = L.marker([21.19, 72.81]).bindPopup(text);
       markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Bharuch&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([21.71, 73.00]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Valsad&APPID=11611409c839bfaebb500138fc26a9b3', function(data) {
        
        var text = `Name: ${data.name}<br>
                    Wind_Speed(km/hr): ${(data.wind.speed*3.6).toFixed(2)}<br>
                    Wind_Direction(degree): ${(data.wind.deg).toFixed(2)}`
        mark = L.marker([20.61, 72.93]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      });
markersLayer.addTo(mymap);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function arhar(){
  
  $.getJSON('http://127.0.0.1:3500/api/market/arhar', function(data) {
        markersLayer.clearLayers(); 
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function bajra(){
   
  $.getJSON('http://127.0.0.1:3500/api/market/Bajra(Pearl', function(data) {
        markersLayer.clearLayers(); 
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].MOdal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function barley(){
   
  $.getJSON('http://127.0.0.1:3500/api/market/Barley', function(data) {
        markersLayer.clearLayers(); 
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        
        markersLayer.addLayer(mark);
        
        mark.openPopup();
        mark.closePopup();
        
      }
      markersLayer.addTo(mymap);
      });

}
function bengal_gram(){
  $.getJSON('http://127.0.0.1:3500/api/market/Bengal', function(data) {
        markersLayer.clearLayers(); 
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function black_gram(){
  $.getJSON('http://127.0.0.1:3500/api/market/Black', function(data) {
        markersLayer.clearLayers(); 
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function copra(){
  $.getJSON('http://127.0.0.1:3500/api/market/Copra', function(data) {
        markersLayer.clearLayers();        
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function cotton(){
  $.getJSON('http://127.0.0.1:3500/api/market/Cotton', function(data) {
        markersLayer.clearLayers(); 
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function green_gram(){
  
              
        
  alert("geern");
  $.getJSON('http://127.0.0.1:3500/api/market/Green', function(data) {
    markersLayer.clearLayers(); 
    for(i=0;i<data.length;i++){
      var text = `Commodity: ${data[i].Commodity}<br>
                  Market: ${data[i].Market}<br>
                  Price: ${data[i].Modal_Price}`
        
      mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
      markersLayer.addLayer(mark);
      mark.openPopup();
      mark.closePopup();
    
      }
      markersLayer.addTo(mymap);
      });

}
function groundnut(){

  $.getJSON('http://127.0.0.1:3500/api/market/Groundnut', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();      
      }
      markersLayer.addTo(mymap);
      });

}
function jowar(){
  $.getJSON('http://127.0.0.1:3500/api/market/Jowar(Sorghum)', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function jute(){
  $.getJSON('http://127.0.0.1:3500/api/market/Jute', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function lentil(){
  $.getJSON('http://127.0.0.1:3500/api/market/Lentil', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function maize(){
  $.getJSON('http://127.0.0.1:3500/api/market/Maize', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function mustard(){
  $.getJSON('http://127.0.0.1:3500/api/market/Mustard', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function nigarseed(){
  $.getJSON('http://127.0.0.1:3500/api/market/Niger', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function onion(){
  $.getJSON('http://127.0.0.1:3500/api/market/Onion', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function basmati(){
  $.getJSON('http://127.0.0.1:3500/api/market/Paddy(Dhan)(Basmati)', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function common(){
  $.getJSON('http://127.0.0.1:3500/api/market/Paddy(Dhan)(Common)', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function potato(){
  $.getJSON('http://127.0.0.1:3500/api/market/Potato', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function ragi(){
  $.getJSON('http://127.0.0.1:3500/api/market/Ragi', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function sufflower(){
  $.getJSON('http://127.0.0.1:3500/api/market/Safflower', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function sesamum(){
  $.getJSON('http://127.0.0.1:3500/api/market/Sesamum(Sesame,Gingelly,Til)', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function soyabean(){
  $.getJSON('http://127.0.0.1:3500/api/market/Soyabean', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function sugarcane(){
  $.getJSON('http://127.0.0.1:3500/api/market/Sugercane', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function sunflower(){
  $.getJSON('http://127.0.0.1:3500/api/market/Sunflower', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function tomato(){
  $.getJSON('http://127.0.0.1:3500/api/market/Tomato', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function toria(){
  $.getJSON('http://127.0.0.1:3500/api/market/Toria', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}
function wheat(){
  $.getJSON('http://127.0.0.1:3500/api/market/Wheat', function(data) {
        for(i=0;i<data.length;i++){
        var text = `Commodity: ${data[i].Commodity}<br>
                    Market: ${data[i].Market}<br>
                    Price: ${data[i].Modal_Price}`
        mark = L.marker([data[i].Latitude, data[i].Longitude]).bindPopup(text);
        markersLayer.addLayer(mark);
        mark.openPopup();
        mark.closePopup();
      }
      markersLayer.addTo(mymap);
      });

}

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};
info.update = function (props) {
    this._div.innerHTML = '<h4>city</h4>' +  (props ?
        '<b>' + props.NAME + '</b><br />'
        : 'Hover over a state');
};
info.addTo(mymap);

 

  
