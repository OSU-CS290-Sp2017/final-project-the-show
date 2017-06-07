var express = require('express');
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;

var app = express();
var menuData = require('./menuData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log("Server listening on port", port);
});
