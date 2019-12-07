var express = require('express'),
    cors = require('cors'),
    app = express(),
    faker = require('faker');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



app.set('port', process.env.PORT || 3500);

var router = new express.Router();

router.get('/weather/weekly-temp-analysis/:district', cors(), function(req, res) {
  
  district = req.params
  district = district["district"]
  console.log(district)
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Weather1");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var today_date = yyyy + '-' + mm + '-' + dd;
  var date = new Date(today_date);
  var formattedDate = date.getDate();
  var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  var formattedYear = date.getFullYear().toString().substr(2,2);
  var dateString = formattedYear + '-' + formattedMonth + '-' + formattedDate;
  console.log(dateString);

  function getLastWeek() {
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  return lastWeek;
  }

  var lastWeek = getLastWeek();
  var lastWeekMonth = lastWeek.getMonth() + 1;
  var lastWeekDay = lastWeek.getDate();
  var lastWeekYear = lastWeek.getFullYear();

  var lastWeekDisplay = lastWeekYear + "-" + lastWeekMonth + "-" + lastWeekDay;
  var lastWeekDisplayPadded =  ("00" + lastWeekDay.toString()).slice(-2) + "-" + ("00" + lastWeekMonth.toString()).slice(-2) + "-" + ("00" + lastWeekYear.toString()).slice(-4);

  //console.log(today_date);
  //console.log(lastWeekDisplay);
  //console.log(lastWeekDisplayPadded);
  var date = new Date(lastWeekDisplay);
  var formattedDate = date.getDate();
  var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  var formattedYear = date.getFullYear().toString().substr(2,2);
  var dateString1 = formattedYear + '-' + formattedMonth + '-' + formattedDate;
  console.log(dateString1);
  var query = { district: district, date: {$gte: dateString1 , $lt: dateString } };
  dbo.collection("Temp_analysis").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    //result = result[0];
    console.log(result);
    db.close();
    res.json(
        result
    );

  });
});

});


router.get('/weather/weekly-wind-analysis/:district', cors(), function(req, res) {
  
  district = req.params
  district = district["district"]
  console.log(district)
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Weather1");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var today_date = dd + '-' + mm + '-' + yyyy;
  var date = new Date(today_date);
  var formattedDate = date.getDate();
  var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  var formattedYear = date.getFullYear().toString().substr(2,2);
  var dateString = formattedYear + '-' + formattedMonth + '-' + formattedDate;
  console.log(dateString);
  function getLastWeek() {
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  return lastWeek;
  }

  var lastWeek = getLastWeek();
  var lastWeekMonth = lastWeek.getMonth() + 1;
  var lastWeekDay = lastWeek.getDate();
  var lastWeekYear = lastWeek.getFullYear();

  var lastWeekDisplay = lastWeekYear + "-" + lastWeekMonth + "-" + lastWeekDay;
  var lastWeekDisplayPadded =  ("00" + lastWeekDay.toString()).slice(-2) + "/" + ("00" + lastWeekMonth.toString()).slice(-2) + "/" + ("0000" + lastWeekYear.toString()).slice(-4);

  //console.log(today_date);
  //console.log(lastWeekDisplay);
  //console.log(lastWeekDisplayPadded);
  var date = new Date(lastWeekDisplay);
  var formattedDate = date.getDate();
  var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  var formattedYear = date.getFullYear().toString().substr(2,2);
  var dateString1 = formattedYear + '-' + formattedMonth + '-' + formattedDate;
  console.log(dateString1);
  var query = { city: district, date: {$gte: dateString1 , $lt: dateString }};
  dbo.collection("Wind_analysis").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    //result = result[0];
    console.log(result);
    db.close();
    res.json(
        result
    );

  });
});

});  

router.get('/weather/temperature/:district', cors(), function(req,res){

  district = req.params
  district = district["district"]
  console.log(district)
  MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("Weather1");
  var query = {name: district};
  dbo.collection("Data").find(query).toArray(function(err, result) {
    if (err) throw err;
    db.close();
    console.log(result);
    res.json(
        result
    );
  });

});

});

router.get('/weather/forecast/:district', cors(), function(req,res){

  district = req.params
  district = district["district"]
  MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("Weather1");
  var query = {city: district};
  dbo.collection("Forecast").find(query).toArray(function(err, result) {
    if (err) throw err;
    db.close();
    console.log(result);
    res.json(
        result
    );
  });

});

});

router.get('/api/market/:commodity', cors(), function(req, res) {
  
  commodity = req.params
  commodity = commodity["commodity"]
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Market");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var dat = dd + '/' + mm + '/' + yyyy;
  var query = {Commodity: commodity, date: dat};
  var a = [];
  var b = [];
  dbo.collection("Commodity").find(query).toArray(function(err, result) {
    if (err) throw err;
    var i;
    for (i=0; i<result.length; i++)
    {
      a.push(result[i]["Market"])
    }
    
    const distinct = (value, index, self) => {
      return self.indexOf(value)===index;
    }

    const distinctmarket = a.filter(distinct);
  

    db.close();
    res.json(
        result
    );

  });
});

});

router.get('/api/market', cors(), function(req, res) {
  
  district = req.params
  district = district["district"]
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Market");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var dat = dd + '/' + mm + '/' + yyyy;
  var query = {date: dat};
  dbo.collection("Commodity").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result)
    db.close();
    res.json(
        result
    );

  });
});

});

router.get('api/market/bycommodity/:commodity', cors(), function(req,res){

  console.log(req.params)
  commodity = req.params
  commodity = commodity["commodity"]
  console.log(commodity)
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var dat = dd + '/' + mm + '/' + yyyy;
  var coords = [];
  var merge = [];
  console.log(dat);

  MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("Market");
  commodity.toString();
  dat.toString();
  console.log(commodity);
  console.log(dat);
  var query = {Commodity:commodity, date: dat };
  dbo.collection("Commodity").find(query).toArray(function(err, result) {
    if (err) throw err;

    res.json(
      result
    );
  });

});

});

router.get('/api/market/bydistrict/:district', cors(), function(req,res){

  console.log(req.params)
  district = req.params
  district = district["district"]
  console.log(district)
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var dat = dd + '/' + mm + '/' + yyyy;
  var coords = [];
  var merge = [];
  console.log(dat);

  MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("Market");
  //commodity.toString();
  dat.toString();
  //console.log(commodity);
  console.log(dat);
  var query = { District:district };
  dbo.collection("Commodity").find(query).toArray(function(err, result) {
    if (err) throw err;

    res.json(
      result
    );
  });

});

});






app.use('/', router);

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});