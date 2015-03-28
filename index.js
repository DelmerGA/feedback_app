require('dotenv').load();
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');

app.set('views', path.join(__dirname, 'app', 'public', 'views'));
app.set('view engine', 'ejs');
app.engine('.html', ejs.renderFile);

app.use(express.static(__dirname + '/app'));
app.get("/", function (req, res) {
  res.render('index.html')
});
app.listen(3000)