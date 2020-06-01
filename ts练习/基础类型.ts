interface Option {
    name: string;
    age
}
var obj = {} as Option;
obj.name = '张三';
obj.age = 16;
console.log(obj)

type MapToPromise<T> = {[k in keyof T]: Promise<T[k]>};
type Coordinate = [number,number];
type PromiseCoordinate = MapToPromise<Coordinate>;  //  [Promise<number>, Promise<number>]

let array:number[] = [1,2,3];
let array1:Array<number> = [4,5,6]
array.push(5)
console.log(array,array1)

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x:[string,number];
x = ['张三',16];
console.log(x)

// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字
enum Color {Red=1,Yellow,Blue}  // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值
let c:Color = Color.Yellow
console.log(c)
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字
let c1:String = Color[2];
console.log(c1)

// Any
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量
let arr2:any[] = [1,"nubbbb",true];
console.log(arr2)

// Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() { // warnUser():void
    console.log("is warn")
}
warnUser()

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自


// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
let obj1:object = {
    name: '张三',
    age: 14
}
console.log(obj1)


// 类型断言
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
// 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let some: any ='this is a message!'
let strLen:number = (<string> some).length
let strLen1:number = (some as string).length;
console.log(strLen+"  "+strLen1)