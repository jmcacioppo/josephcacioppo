var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));
app.get('*', function (req, res) {
  res.sendfile('./index.html')
})
app.listen(8000);
console.log("Listening at localhost:8000...");
