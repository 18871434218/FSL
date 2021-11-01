// Array
let list: number[] = [1, 2, 3, 4];
// 第二种是使用数组泛型.
let list1: Array<number> = [1, 2, 3];
//  用接口表示数组
interface NumberArray {
    [index: number]: number;
}

let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// 类数组   类数组不是数组类型，比如arguments
// arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}



