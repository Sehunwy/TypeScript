// 可以在一个拥有块作用域变量被声明前获取它。 只是我们不能在变量声明前去调用那个函数。
function foo() {
    return a;
}

let a = "Hello";
console.log(foo())

// 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
function f(condi, x) {
    if (condi) {
        let x = 10;
        return x
    }
    return x;
}
console.log(f(true, 1)) // 10
console.log(f(false, 0))  // 0

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {  // 里层的for循环会覆盖变量i，因为所有i都引用相同的函数作用域内的变量
            sum += currentRow[i];
        }
    }
    return sum;
}
let matrix = [[1, 2, 4], [1, 6, 3]]; // 1+2+4 7
console.log(sumMatrix(matrix))

function sumMatrix1(matrix: number[][]) {
    var sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {  // 里层的for循环会覆盖变量i，因为所有i都引用相同的函数作用域内的变量
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix1(matrix))  // 17

// 解构
// 解构数组
let input = [1, 3];
let [first, second] = input;  // 创建了2个命名变量 first 和 second。 相当于使用了索引，但更为方便
console.log(first, second)
// 作用于函数参数
function f1([first, second]: [number, number]) {
    return "first:" + first + " second:" + second
}
let input1: [number, number] = [1, 2]
console.log(f1(input1))

// 数组里使用...语法创建剩余变量
let [val, ...rest] = [1, 2, 3, 4, 5];
console.log(val, rest);


// 对象解构   
let o = {
    o1: 'test1',
    o2: 'test2',
    o3: 'test3',
    o4: 'test4',
    o5: 'test5'
}
let { o1, o2 } = o;
console.log(o1, o2);
let { o3, ...passthrough } = o;
console.log(o3, passthrough)

// 属性重命名
// 你也可以给属性以不同的名字
let { o4: new1, o5: new2 } = o;
console.log("new1:", new1, " new2:", new2)
// 指定它的类型， 仍然需要在其后写上完整的模式
let obj2 = {
    ob1: 1,
    ob2: 'obj2'
}
let { ob1, ob2 }: { ob1: number, ob2: string } = obj2;
console.log(ob1, ob2)

// 函数声明
function fun({ a, b = 0 } = { a: '默认' }) {
    return a + "," + b
}
console.log(fun()) // 默认,0
console.log(fun({ a: 'yes' })) // yes,0
// console.log(fun({})) // 报错

// 展开
// 展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象
let first1 = [1, 2, 3];
let second1 = [4, 5, 6];
let bothPlus = [0, ...first1, ...second1, 7];
console.log("bothPlus:", bothPlus, ",first1:", first1);// bothPlus: [ 0, 1, 2, 3, 4, 5, 6, 7 ] ,first1: [ 1, 2, 3 ]
let defaults = {
    food: 'spicy',
    price: '$'
}
let search = {
    food: 'hot',
    ...defaults,
    ambiance: "noisy"
}
console.log(search)  // { food: 'spicy', price: '$', ambiance: 'noisy' }
// 展开一个对象实例时，你会丢失其方法
class cla {
    a = 'class'
    fun() { }
}
let cl = new cla();
let clone = { ...cl };
console.log(clone.a); // class
// console.log(clone.fun()); // 报错

