var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('./input.txt');

readerStream.setEncoding('UTF-8');

readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
})

console.log("程序执行完毕");