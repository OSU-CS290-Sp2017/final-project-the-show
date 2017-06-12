var url = require('url');
var path = require('path');
var fs = require('fs');
var menuData = require('./menuData');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
  res.status(200).render('mainPage');
});

app.get('/home', function(req, res, next){
  res.status(200).render('mainPage');
});

app.get('/menu', function(req, res, next){
  var templateArgs = {
    dishes: menuData.photos,
    name: menuData.name,

  }
  res.status(200).render('menuPage', templateArgs);
});

app.get('/menu', function(req, res, next){
  var templateArgs = {
    dishes: menuData.photos,
    name: menuData.name,

  }
  res.status(200).render('menuPage', templateArgs);
});

app.get('/admin', function(req, res, next) {
  var templateArgs = {
//    dishes: menuData.photos,
    name: menuData.name,
    price: menuData.price
  }
  res.status(200).render('adminPage',templateArgs);
});

app.get('/checkout', function(req, res, next){
  res.status(200).render('checkoutPage');
});

app.listen(port, function () {
  console.log("Server listening on port", port);
});
