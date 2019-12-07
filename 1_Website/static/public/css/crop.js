function build1(selector){
        
          $.getJSON('http://127.0.0.1:3500/api/market/Arhar', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build2(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Bajra(Pearl', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build3(selector){
        
          $.getJSON('http://127.0.0.1:3500/api/market/Barley', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build4(selector){
       
          $.getJSON('http://127.0.0.1:3500/api/market/Bengal', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build5(selector){
       
          $.getJSON('http://127.0.0.1:3500/api/market/Black', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build6(selector){
         
          $.getJSON('http://127.0.0.1:3500/api/market/Copra', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build7(selector){
      
          $.getJSON('http://127.0.0.1:3500/api/market/Cotton', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build8(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Green', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build9(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Groundnut', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build10(selector){
      
          $.getJSON('http://127.0.0.1:3500/api/market/Jowar(Sorghum)', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build11(selector){
         
          $.getJSON('http://127.0.0.1:3500/api/market/Jute', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build12(selector){
      
          $.getJSON('http://127.0.0.1:3500/api/market/Lentil', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build13(selector){
        
          $.getJSON('http://127.0.0.1:3500/api/market/Maize', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build14(selector){
        
          $.getJSON('http://127.0.0.1:3500/api/market/Musterd', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build15(selector){
     
          $.getJSON('http://127.0.0.1:3500/api/market/Niger', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build16(selector){
      
          $.getJSON('http://127.0.0.1:3500/api/market/Onion', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build17(selector){
       
          $.getJSON('http://127.0.0.1:3500/api/market/Paddy(Dhan)(Basmati)', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build18(selector){
      
          $.getJSON('http://127.0.0.1:3500/api/market/Paddy(Dhan)(Common)', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build19(selector){
      
          $.getJSON('http://127.0.0.1:3500/api/market/Potato', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build20(selector){
    
          $.getJSON('http://127.0.0.1:3500/api/market/Ragi', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build21(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Safflower', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build22(selector){
       
          $.getJSON('http://127.0.0.1:3500/api/market/Sesamum(Sesame,Gingelly,Til', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build23(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Soyabean', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build24(selector){
         
          $.getJSON('http://127.0.0.1:3500/api/market/Sugercane', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build25(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Sunflower', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build26(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Tomato', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build27(selector){
         
          $.getJSON('http://127.0.0.1:3500/api/market/Toria', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function build28(selector){
          
          $.getJSON('http://127.0.0.1:3500/api/market/Wheat', function(data) {
          var columns = addAllColumnHeaders(data, selector);

          for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
              if (cellValue == null) cellValue = "";
              row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
          }
        });
    }

function addAllColumnHeaders(data, selector){
          
          var columnSet = [];
          var headerTr$ = $('<tr/>');

          for (var i = 0; i < data.length; i++) {
            var rowHash = data[i];
            for (var key in rowHash) {
              if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
              }
            }
          }
          $(selector).append(headerTr$);

          return columnSet;
        }