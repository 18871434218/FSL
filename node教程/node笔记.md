```js
1: npm命令升级
   sudo npm install npm -g       (linux平台)
   npm install npm -g            (window平台)
   
   使用淘宝镜像命令
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   

2: 使用npm命令安装模块
   npm install <Module Name>
   
   使用npm安装Node.js web框架模块express
   npm install express
   
   var express = require('express');
   
3: npm包分为本地安装(local)、全局安装(global)两种
   npm install express       # 本地安装
   npm install express -g    # 全局安装
   
4：npm list -g 查看所有全局安装的模块

5：npm uninstall express     卸载模块

6：npm update express        更新模块

7: npm search express        搜索模块

8：npm cache clear           清空本地缓存

```

   Node.js 回调函数

```js
1: Node.js异步编程的直接体现就是回调
   异步编程依托于回调来实现,但不能说使用了回调程序就异步化了

2：我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
    function foo1(name, age, callback) {}
    function foo2(name, age, callback) {}

3: Node.js事件循环
   Node.js是单进程单线程应用程序,但因为V8引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发,所以性能非常高.
   Node.js基本上所有的事件机制都是用设计模式中观察者模式实现

```

```js
JavaScript语言自身只有字符串数据类型, 没有二进制数据类型
所有Stream对象都是EventEmitter实例


管道流  管道输入流----输出流
var fs = require("fs");
var readStream = fs.createReadStream('./input.txt');
var writeStream = fs.createWriteStream('./output.txt');
readStream.pipe(writeStream);
console.log('程序执行完毕');

链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
```

```
RESTful API
HTTP方法
以下为REST基本架构的四个方法
  . GET---用于获取数据
  . PUT---用于更新或添加数据
  . DELETE --- 用于删除数据
  . POST ----- 用于添加数据
  
基于REST架构的Web Service即是RESTful
```

