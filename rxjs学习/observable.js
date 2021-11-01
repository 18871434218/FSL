"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// var observable = new Observable().create(function (observer) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     setTimeout(() => {
//         observer.next(4);
//         observer.complete();
//     }, 1000)
// });
var observable = new rxjs_1.Observable(function (sub) {
    sub.next(1);
    sub.next(2);
    sub.next(3);
    setTimeout(function () {
        sub.next(4);
        // sub.complete();
    }, 1000);
});
console.log('just before subscribe');
observable.subscribe({
    next: function (x) { return console.log('got value' + x); },
    error: function (err) { return console.error('something wrong occured:', err); },
    complete: function () { return console.log('done'); }
});
console.log('just after subscribe');
