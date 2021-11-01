// 定义接口
// 什么是接口, 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现（implement）
// Typescript中的接口是一个非常灵活的概念，除了可用于对于类的一部分行为进行抽象以外，也常用于对象的形状进行描述

// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25
// }




// 可选属性
// interface Person {
//     name: string;
//     age?: number;
// }

// let tom: Person = {
//     name: 'Tom'
// }




// 任意属性
// interface Person {
//     name: string;
//     age?: number;
//     [PropName: string]: any;
// }

// let tom: Person = {
//     name: 'Tom',
//     gender: 'male'
// }

//  特别注意： 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
//  一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型

// interface Person {
//     name: string;
//     age?: number;
//     [PropName: string] : number | string;   // 联合类型
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// }





//  只读属性
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用readonly定义只读属性
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any
// }

// let tom: Person = {
//     id: 89757,
//     name: 'Tom',
//     gender: 'male'
// }


// tom.id = 9527;   // 只读属性, 不可以修改





// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     name: 'Tom',
//     gender: 'male'
// }

// tom.id = 89757










