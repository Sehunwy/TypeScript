// 泛型 用于多个类型。 不同于使用 any，它不会丢失信息

// 泛型变量
function identity<T>(arg: T) {
    return arg;
}
let output = identity<string>('hello');
console.log(output)

// 泛型类
class Add<T> {
    zero: T;
    add: (x: T, y: T)=> T
}
let add = new Add<number>();
let res = add.add = function(x,y) {
    return x+y
};
console.log(res(1,2))

// 泛型约束  定义一个接口来描述约束条件,使用这个接口和extends关键字来实现约束
interface lengthwise {
    length: number
}

function identityLog<T extends lengthwise>(arg:T) {
    console.log(arg.length)
    return arg;
}
let output1 = identityLog({length: 10, value: 3}); // 传入符合约束类型的值，必须包含必须的属性

