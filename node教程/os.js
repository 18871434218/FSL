var os = require("os");

console.log('主机名：', os.hostname());
console.log('操作系统名', os.type());
console.log('操作系统架构', os.arch());
console.log('返回网络接口列表', os.networkInterfaces());
