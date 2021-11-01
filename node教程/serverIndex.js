var express = require('express');
var path = require('path');
var app = express();

app.use('./wcs/static', express.static('public'))

app.get('/', function(req, res) {
    // res.sendFile("./wcs/index.html");
    res.sendFile(path.join(__dirname, '/wcs', '/index.html'))
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})