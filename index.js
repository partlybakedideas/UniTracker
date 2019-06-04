var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));

var listener = app.listen(process.env.PORT, function() {
  console.log(listener.address().port);
});
