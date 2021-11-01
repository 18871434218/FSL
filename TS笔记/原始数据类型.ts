// 可以使用null和undefined来定义两个原始数据类型

let u: undefined = undefined;
let n: null = null;

// undefined 和null是所有类型的子类型,  undefined类型的变量可以赋值给number类型的变量
let num: number = undefined;

// 在任意值上访问任何属性都是允许的
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);


// 也可以调用任何方法
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('cat');

// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。


// 联合类型 ----- 表示取值可以为多种类型中的一种

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;


// 访问联合类型属性或方法
// function getLength(something: string | number): number {
//     return something.length;
// }

function getString(something: string | number): string {
    return something.toString();
}





// Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同，比如：你可以定义一对值分别为string和number类型的元组
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']




// Enum类型
enum Color { Red, Green, Blue }
let c: Color = Color.Green;


enum Color1 { Red = 1, Green, Blue }
let c1: Color1 = Color1.Green;


// Unknown   
// 当我们在写应用的时候可能会需要描述一个我们还不知道其类型的变量。这些值可以来自动态内容，
// 例如从用户获得，或者我们想在我们的 API 中接收所有可能类型的值。
// 在这些情况下，我们想要让编译器以及未来的用户知道这个变量可以是任意类型。这个时候我们会对它使用 unknown 类型。

// let notSure: unknown = 4;
// notSure = "maybe a string instead";
// notSure = false;

declare const maybe: unknown;



// never 类型表示的是那些永不存在的值的类型, never
// 返回never的函数必须存在无法达到的终点
function error(message: string) {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {}
}

