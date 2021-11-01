import { Observable } from 'rxjs'

const $input = <HTMLInputElement>document.querySelector('.todo-val')

const input$ = Observable.fromEvent<KeyboardEvent>($input, 'keydown')
// do 操作符一般用来处理 Observable 的副作用，例如操作 DOM，修改外部变量，打 log
    .do(e => console.log(e))

const app$ = input$

app$.subscribe()
