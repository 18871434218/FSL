function printHello() {
    console.log("Hello, World");
}

var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);