var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./input001.txt'))

console.log("文件解压完成")
console.log(__filename);
console.log(__dirname);