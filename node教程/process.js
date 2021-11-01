// 输出到终端
process.stdout.write("Hello world!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ':' + val);
});

// 获取执行脚本路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);