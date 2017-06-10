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
  var templateArgs = {
    dishes: menuData.photos,
    name: menuData.name,
    price: menuData.price
  }
  res.status(200);
  res.render('menuPage', templateArgs);
});

app.get('/main', function(req, res, next){
  res.render('mainPage');
});

app.listen(port, function () {
  console.log("Server listening on port", port);
});
