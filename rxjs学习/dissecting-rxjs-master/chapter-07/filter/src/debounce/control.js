import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/debounce';

const source$ = Observable.interval(1000);
const durationSelector = value => {
  return Observable.timer(value % 3 === 0 ? 2000 : 1000);
};
const result$ = source$.debounce(durationSelector);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


