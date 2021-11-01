let { Observable } = require('rxjs');
const onSubscribe = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
})

// const theObserver = {
//     next: item =>  console.log(item)
// }

onSubscribe.subscribe({
    next: item => console.log(item),
    complete: () => console.log('1111')
});