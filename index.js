var express = require('express');
var app = express();
var pug = require('pug');
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.set("view engine", "pug");
var result;
//ReadPosts();
//var currentsposts = ReadPosts();
app.get('/', function(req, res){res.render('index')})
var listener = app.listen(process.env.PORT, function() {
  console.log(listener.address().port);
});
