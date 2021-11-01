```js
兼具函数式和响应式两种编程风格的框架RxJS
解决问题包括：
    如何控制大量代码的复杂性;
    如何保持代码可读;
    如何处理异步操作;

RxJS是一个库，通过observable序列来编写异步和基于事件的程序。它提供了一个核心类型 [Observable](https://cn.rx.js.org/manual/overview.html#observable)，附属类型 (Observer、 Schedulers、 Subjects) 和受 [Array#extras] 启发的操作符 (map、filter、reduce、every, 等等)，这些数组操作符可以把异步事件作为集合来处理。
                                                             
可以把 RxJS 当做是用来处理事件的 Lodash 。
                                                             
在 RxJS 中用来解决异步事件管理的的基本概念是：
Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。
Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。
Operators (操作符): 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。
Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如             setTimeout 或 requestAnimationFrame 或其他。

概念：函数式编程中，倾向于数据就是数据，函数就是函数，函数可以处理数据，也是并不像面向对象的类概念一样把数据和函数封装在一起，而是让每个函数都不要去修改原有数据（不可变形），而是通过产生新的数据来作为运算结果（纯函数）
```

```js
rxjs 操作符分类
    组合
    条件
    创建
    错误处理
    多播
    过滤
    转换
    工具
    
Rxjs的Observable就是观察者模式和迭代器模式的组合

三点：
   如何产生事件：这是发布者的责任，在RxJS中是Observable对象的工作
   
   如何响应事件：这是观察者的责任，在RxJS中由subscribe的参数来决定
   
   什么样的发布者关联什么样的观察者，也就是何时调用subscribe
   
概念：
   Observable: 每个Observable对象，代表的就是在一段时间范围内发生的一系列事件
```







