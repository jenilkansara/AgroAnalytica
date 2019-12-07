
            
              //var Chart = require('chart.js');
              $("#dropdown-container a").click(function(e){
                
                e.preventDefault();
                 var toShow = $(this).attr('id');
                 if(toShow=="t"){
                   $("#myCommodity").hide();
                  document.getElementById("mySelect").onchange = function(){
                     var search = document.getElementById('mySelect').value;
                    if(search == "Ahmedabad"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Ahmedabad').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                        

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Amreli"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Amreli').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                        

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                 else if(search == "Anand"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Anand').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                        

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Banaskantha"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Banaskantha').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                        

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Bharuch"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Bharuch').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                        

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Bhavnagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Bhavnagar').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Botad"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Botad').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                  

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Dahod"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Dahod').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                        

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Gandhinagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Gandhinagar').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                       
               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Jamnagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Jamnagar').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                       
               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Junagadh"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Junagadh').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Kheda"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Kheda').done(function(data) {
                        //var search = document.getElementById('mySelect').value;

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Morbi"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Morbi').done(function(data) {
                     

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Patan"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Patan').done(function(data) {
                        //var search = document.getElementById('mySelect').value;

                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Porbandar"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Porbandar').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Rajkot"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Rajkot').done(function(data) {
                        //var search = document.getElementById('mySelect').value;              
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Surat"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Surat').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                     

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Surendranagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Surendranagar').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                      
               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Vadodara"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Vadodara').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    
                      

               
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                  else if(search == "Valsad"){
                    $.getJSON('http://localhost:3500/weather/weekly-temp-analysis/Valsad').done(function(data) {
                        //var search = document.getElementById('mySelect').value;
                    var options = {
                      title: {
                        text: "Weekly Temperature Analysis"
                      },
                      axisX: {
                        labelFontSize: 20,
                        labelFontColor: "dimGrey",
                        title: "Date"
                      },
                      axisY: {
                        title: "Temperature(in Celsius)"
                      },
                      animationEnabled: true,
                      exportEnabled: true,
                      data: [
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Average Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].average_temperature, label: data[0].date },
                          { x: 2, y: data[1].average_temperature, label: data[1].date },
                          { x: 3, y: data[2].average_temperature, label: data[2].date },
                          { x: 4, y: data[3].average_temperature, label: data[3].date },
                          { x: 5, y: data[4].average_temperature, label: data[4].date },
                          { x: 6, y: data[5].average_temperature, label: data[5].date },
                         

                        ]
                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Maximum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].maximum_temperature, label: data[0].date },
                          { x: 2, y: data[1].maximum_temperature, label: data[1].date },
                          { x: 3, y: data[2].maximum_temperature, label: data[2].date },
                          { x: 4, y: data[3].maximum_temperature, label: data[3].date },
                          { x: 5, y: data[4].maximum_temperature, label: data[4].date },
                          { x: 6, y: data[5].maximum_temperature, label: data[5].date },
                          
                        ]

                      },
                      {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Minimum Temperature", //change it to line, area, column, pie, etc
                        dataPoints: [

                          { x: 1, y: data[0].minimum_temperature, label: data[0].date },
                          { x: 2, y: data[1].minimum_temperature, label: data[1].date },
                          { x: 3, y: data[2].minimum_temperature, label: data[2].date },
                          { x: 4, y: data[3].minimum_temperature, label: data[3].date },
                          { x: 5, y: data[4].minimum_temperature, label: data[4].date },
                          { x: 6, y: data[5].minimum_temperature, label: data[5].date },
                     
                          ]

                      }
                      ]
                    };
                    $("#G1").CanvasJSChart(options); 

                    })
                  }
                    };
                  }
                
            else if(toShow=="w"){
              $("#myCommodity").hide();

                    
                  
                  document.getElementById('mySelect').onchange = function(){
                  var search = document.getElementById('mySelect').value;  

      
                if(search == "Ahmedabad"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Ahmedabad').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                   else if(search == "Amreli"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Amreli').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                     else if(search == "Anand"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Anand').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Bharuch"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Bharuch').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Bhavnagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Bhavnagar').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Botad"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Botad').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Dahod"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Dahod').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Gandhinagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Gandhinagar').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Jamnagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Jamnagar').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Junagadh"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Junagadh').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Kheda"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Kheda').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Morbi"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Morbi').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Porbandar"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Porbandar').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Rajkot"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Rajkot').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Surat"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Surat').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Surendranagar"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Surendranagar').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Vadodara"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Vadodara').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }
                      if(search == "Valsad"){
                    $.getJSON('http://localhost:3500/weather/weekly-wind-analysis/Valsad').done(function(data) {
                        
                        var options = {
                          title: {
                            text: "Weekly Wind Analysis"
                          },
                          axisX: {
                            labelFontSize: 20,
                            labelFontColor: "dimGrey",
                            title: "Date"
                          },
                          axisY: {
                            title: "Wind Speed(in km/hr)"
                          },
                          animationEnabled: true,
                          exportEnabled: true,
                          data: [
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Average Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].average_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].average_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].average_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].average_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].average_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].average_wind_speed, label: data[5].date },
                              

                            ]
                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Maximum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].maximum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].maximum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].maximum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].maximum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].maximum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].maximum_wind_speed, label: data[5].date },
                              
                            ]

                          },
                          {
                            type: "spline",
                            showInLegend: true,
                            legendText: "Minimum Wind Speed", //change it to line, area, column, pie, etc
                            dataPoints: [

                              { x: 1, y: data[0].minimum_wind_speed, label: data[0].date },
                              { x: 2, y: data[1].minimum_wind_speed, label: data[1].date },
                              { x: 3, y: data[2].minimum_wind_speed, label: data[2].date },
                              { x: 4, y: data[3].minimum_wind_speed, label: data[3].date },
                              { x: 5, y: data[4].minimum_wind_speed, label: data[4].date },
                              { x: 6, y: data[5].minimum_wind_speed, label: data[5].date },
                             
                              ]

                          }
                          ]
                        };
                        $("#G1").CanvasJSChart(options);

                        })
                      }

                    };
                  }
              



              })
            
