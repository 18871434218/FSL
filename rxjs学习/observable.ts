import { Observable } from 'rxjs';
// var observable = new Observable().create(function (observer) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     setTimeout(() => {
//         observer.next(4);
//         observer.complete();
//     }, 1000)
// });

var observable = new Observable(sub => {
    sub.next(1);
    sub.next(2);
    sub.next(3);
    setTimeout(() => {
        sub.next(4);
        // sub.complete();
    }, 1000)
})

console.log('just before subscribe');
observable.subscribe({
    next: x => console.log('got value'+ x),
    error: err => console.error('something wrong occured:', err),
    complete: () => console.log('done')
});

console.log('just after subscribe');
