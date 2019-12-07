$("#dropdown-container a").click(function(e){
              
                e.preventDefault();
                var toShow1 = $(this).attr('id');
                if(toShow1=="t"){
                  document.getElementById("mySelect1").onchange = function(){
                    var district = document.getElementById('mySelect1').value;
                    alert(district);  
                      if(district == "Ahmedabad"){   
                        alert("hii");
                        $.getJSON('http://localhost:3500/weather/forecast/Ahmedabad').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                      else if(district == "Amreli"){  
                        alert(hii); 
                        $.getJSON('http://localhost:3500/weather/forecast/Amreli').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                      else if(district == "Anand"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Anand').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                      else if(district == "Bharuch"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Bharuch').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                      else if(district == "Bhavnagar"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Bhavnagar').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                      else if(district == "Botad"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Botad').done(function(data) {

                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                    else if(district == "Dahod"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Dahod').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Gandhinagar"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Gandhinagar').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Jamnagar"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Jamnagar').done(function(data) {
                          
                          var i;
                          var a = [];
                          for (i=0;i<data.length; i++){
                            if(data[i].city == district){
                              a.push(data[i])
                            }
                          }
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Junagadh"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Junagadh').done(function(data) {

                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                      else if(district == "Kheda"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Kheda').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Morbi"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Morbi').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Porbandar"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Porbandar').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Rajkot"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Rajkot').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Surat"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Surat').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Surendranagar"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Surendranagar').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Vadodara"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Vadodara').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }
                     else if(district == "Valsad"){   
                        $.getJSON('http://localhost:3500/weather/forecast/Valsad').done(function(data) {
                          
                          var time = [];
                          var temp = [];
                          for (var i in data){
                            time.push(data[i].time);
                            temp.push(data[i].temperature);
                          }
                          var options2 = {
                          title: {
                            text: "Temperature Forecast"
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

                              { x: 1, y: temp[0], label: time[0] },
                              { x: 2, y: temp[1], label: time[1] },
                              { x: 3, y: temp[2], label: time[2] },
                              { x: 4, y: temp[3], label: time[3] },
                              { x: 5, y: temp[4], label: time[4] },
                              { x: 6, y: temp[5], label: time[5] },
                              { x: 7, y: temp[6], label: time[6] },
                              { x: 8, y: temp[7], label: time[7] },
                              { x: 9, y: temp[8], label: time[8] },
                              { x: 10, y: temp[9], label: time[9] },
                              { x: 11, y: temp[10], label: time[10] },
                              { x: 12, y: temp[11], label: time[11] },
                              { x: 13, y: temp[12], label: time[12] },
                              { x: 14, y: temp[13], label: time[13] },
                              { x: 15, y: temp[14], label: time[14] },
                              { x: 16, y: temp[15], label: time[15] },
                              { x: 17, y: temp[16], label: time[16] },
                              { x: 18, y: temp[17], label: time[17] },
                              { x: 19, y: temp[18], label: time[18] },
                              { x: 20, y: temp[19], label: time[19] },
                              { x: 21, y: temp[20], label: time[20] },
                              { x: 22, y: temp[21], label: time[21] },
                              { x: 23, y: temp[22], label: time[22] },
                              { x: 24, y: temp[23], label: time[23] },
                              { x: 25, y: temp[24], label: time[24] },
                              { x: 26, y: temp[25], label: time[25] },
                              { x: 27, y: temp[26], label: time[26] },
                              { x: 28, y: temp[27], label: time[27] },
                              { x: 29, y: temp[28], label: time[28] },
                              { x: 30, y: temp[29], label: time[29] },
                              { x: 31, y: temp[30], label: time[30] },
                              { x: 32, y: temp[31], label: time[31] },
                              { x: 33, y: temp[32], label: time[32] },
                              { x: 34, y: temp[33], label: time[33] },
                              { x: 35, y: temp[34], label: time[34] },
                              { x: 36, y: temp[35], label: time[35] },
                              { x: 37, y: temp[36], label: time[36] },
                              //{ x: 4, y: b[3].temperature, label: b[3].date }

                            ]
                          },

     
                          ]
                        };
                        $("#G3").CanvasJSChart(options2);
                      })
                      }

                  
                    };
                  }
                else if(toShow1=="w"){
                  
                  document.getElementById('mySelect1').onchange = function(){
                    var district = document.getElementById('mySelect1').value;  
                   
              
                if (district == "Ahmedabad"){
                    $.getJSON('http://localhost:3500/weather/forecast/Ahmedabad').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                 else if (district == "Amreli"){
                    $.getJSON('http://localhost:3500/weather/forecast/Amreli').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Anand"){
                    $.getJSON('http://localhost:3500/weather/forecast/Anand').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Bharuch"){
                    $.getJSON('http://localhost:3500/weather/forecast/Bharuch').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                 else if (district == "Bhavnagar"){
                    $.getJSON('http://localhost:3500/weather/forecast/Bhavnagar').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                 else if (district == "Botad"){
                    $.getJSON('http://localhost:3500/weather/forecast/Botad').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                 else if (district == "Dahod"){
                    $.getJSON('http://localhost:3500/weather/forecast/Dahod').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                 else if (district == "Gandhinagar"){
                    $.getJSON('http://localhost:3500/weather/forecast/Gandhinagar').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Jamnagar"){
                    $.getJSON('http://localhost:3500/weather/forecast/Jamnagar').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Junagadh"){
                    $.getJSON('http://localhost:3500/weather/forecast/Junagadh').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                 else if (district == "Kheda"){
                    $.getJSON('http://localhost:3500/weather/forecast/Kheda').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Morbi"){
                    $.getJSON('http://localhost:3500/weather/forecast/Morbi').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Porbandar"){
                    $.getJSON('http://localhost:3500/weather/forecast/Porbandar').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                 else if (district == "Rajkot"){
                    $.getJSON('http://localhost:3500/weather/forecast/Rajkot').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Surat"){
                    $.getJSON('http://localhost:3500/weather/forecast/Surat').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Surendranagar"){
                    $.getJSON('http://localhost:3500/weather/forecast/Surendranagar').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                  else if (district == "Vadodara"){
                    $.getJSON('http://localhost:3500/weather/forecast/Vadodara').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                else if (district == "Valsad"){
                    $.getJSON('http://localhost:3500/weather/forecast/Valsad').done(function(data) {

                    var time = [];
                      var wind = [];
                      for (var i in data){
                        time.push(data[i].time);
                        wind.push(data[i].wind_speed);
                      } 
                    //var text = `district: ${data[0].city}<br>average_temperature: ${data[0].average_temperature}<br>date:${data[0].date}`;
                    //document.getElementById('G1').innerHTML = text;
                    var options2 = {
                      title: {
                        text: "Wind_speed Forecast"
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

                          { x: 1, y: wind[0], label: time[0] },
                          { x: 2, y: wind[1], label: time[1] },
                          { x: 3, y: wind[2], label: time[2] },
                          { x: 4, y: wind[3], label: time[3] },
                          { x: 5, y: wind[4], label: time[4] },
                          { x: 6, y: wind[5], label: time[5] },
                          { x: 7, y: wind[6], label: time[6] },
                          { x: 8, y: wind[7], label: time[7] },
                          { x: 9, y: wind[8], label: time[8] },
                          { x: 10, y: wind[9], label: time[9] },
                          { x: 11, y: wind[10], label: time[10] },
                          { x: 12, y: wind[11], label: time[11] },
                          { x: 13, y: wind[12], label: time[12] },
                          { x: 14, y: wind[13], label: time[13] },
                          { x: 15, y: wind[14], label: time[14] },
                          { x: 16, y: wind[15], label: time[15] },
                          { x: 17, y: wind[16], label: time[16] },
                          { x: 18, y: wind[17], label: time[17] },
                          { x: 19, y: wind[18], label: time[18] },
                          { x: 20, y: wind[19], label: time[19] },
                          { x: 21, y: wind[20], label: time[20] },
                          { x: 22, y: wind[21], label: time[21] },
                          { x: 23, y: wind[22], label: time[22] },
                          { x: 24, y: wind[23], label: time[23] },
                          { x: 25, y: wind[24], label: time[24] },
                          { x: 26, y: wind[25], label: time[25] },
                          { x: 27, y: wind[26], label: time[26] },
                          { x: 28, y: wind[27], label: time[27] },
                          { x: 29, y: wind[28], label: time[28] },
                          { x: 30, y: wind[29], label: time[29] },
                          { x: 31, y: wind[30], label: time[30] },
                          { x: 32, y: wind[31], label: time[31] },
                          { x: 33, y: wind[32], label: time[32] },
                          { x: 34, y: wind[33], label: time[33] },
                          { x: 35, y: wind[34], label: time[34] },
                          { x: 36, y: wind[35], label: time[35] },
                          { x: 37, y: wind[36], label: time[36] },
                          //{ x: 4, y: b[3].temperature, label: b[3].date }

                        ]
                      },]}
                      
                    $("#G3").CanvasJSChart(options2);

                    })
                  }
                };

              }
             
              })
