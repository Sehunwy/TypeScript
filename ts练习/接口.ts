// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

// 可选属性 ?
interface squareConfig {
    color?: string;
    width?: number
}
function createSquare(config: squareConfig): { color: string; area: number } {
    let newSquare = {
        color: 'white',
        area: 100
    }
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
console.log(createSquare({ color: 'yellow' }))

// 只读属性 对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性
interface Point {
    readonly x: number;
    readonly y: number
}
let point: Point = {
    x: 10,
    y: 19
}
// point.x = 20; // 报错
// ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 3, 5, 7, 8, 1];
let on: ReadonlyArray<number> = a;
console.log(on)
// on[0] = 10; //error
let o = on;
// o[0] = 12; //error
console.log(o)
// 类型断言重写
let o1 = on as number[];
console.log(o1[0] = 12)
// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

// 额外的属性检查
// 1.类型断言
let mySquare = createSquare({ color: 'red', opacity: 0.2 } as squareConfig)
console.log(mySquare)
// 2.添加索引签名（最佳方法）
interface squareConfig1 {
    color?: string;
    width?: number;
    [propName: string]: any
}
function createSquare1(config: squareConfig1): { color: string; area: number } {
    let newSquare = {
        color: 'white',
        area: 100
    }
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
console.log(createSquare1({ color: 'pink', opacity: 0.2 }))
// 3.将对象赋值给另一个对象
let options = { color: 'blue', opacity: 0.2 };
console.log(createSquare(options))

// 函数类型
interface searchFun {
    (source: string, subString: string): boolean // return boolean值
}
let myFun: searchFun;
myFun = function (sour: string, subString: string) { // 函数的参数名不需要与接口里定义的名字相匹配
    let result = sour.search(subString);
    return result > -1
}
console.log(myFun('myFunction', 'Function'))
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
myFun = function (source, sub) {
    let result = source.search(sub);
    return result > -1
}
console.log(myFun('source', 's'))

// 可索引签名（支持字符串和数字）
interface stringArray {
    [index: number]: string
}
let arr1: stringArray = ["a1", "a2"];
class Animal {
    name: string
}
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
class dog extends Animal {
    eat: string
}
interface dogs {
    [x: number]: dog,
    [x: string]: Animal
}
// 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配。 
// 因为字符串索引声明了 obj.property和obj["property"]两种形式都可以。
interface dictionary {
    [index: string]: number,
    length: number,
    // name: string  // error
}
// 可以将索引签名设置为只读，这样就防止了给索引赋值
interface readonlyStringArray {
    readonly [index: number]: string
}
let read: readonlyStringArray = ["one", "two"];
// read[2] = "three" // error

// 类类型   接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
// 类是具有两个类型：静态部分的类型和实例的类型
// 当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
interface dateInterface {
    currentTime: Date,
    setTime(d: Date)
}
class date1 implements dateInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    };
    getTime() {
        return this.currentTime
    }
}
let date = new date1();
date.setTime(new Date())
console.log(date.getTime())

// 继承接口 和类一样，接口也可以相互继承
interface Shape {
    color: String
}
interface Square extends Shape {
    length: number
}
let square = <Square>{}
square.color = 'red';
square.length = 4;
console.log(square)
// 继承多个接口
interface Opacity {
    opacity: number
}
interface Square1 extends Shape, Opacity {
    sideWidth: number
}
let square1 = <Square1>{}
square1.color = 'pink';
square1.opacity = 0.3;
square1.sideWidth = 4;
console.log("square1", square1)

// 混合类型  一个对象可以同时具有上面提到的多种类型 eg:一个对象可以同时做为函数和对象使用，并带有额外的属性

// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 接口同样会继承到类的private和protected成员。
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
class Control {
    private state: any
}
interface selectControl extends Control {
    select(): void
}
class Button extends Control implements selectControl {
    select() {
        Control["state"] = "private"
        console.log(Control["state"])
    }
}
let button = new Button();
button.select();
// class image implements selectControl{   // error 缺少“state”属性
//     select() {}
// }
