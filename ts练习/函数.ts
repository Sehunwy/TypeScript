// 函数类型 为函数定义类型
function add(x: number, y: number) {
    return x + y
}
let myAdd = function (x: number, y: number) {
    return x + y
}
console.log(add(2, 5))
console.log(myAdd(2, 5))

// 书写完整函数类型   函数类型包含两部分：参数类型和返回值类型
// 1. 参数类型:只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
// 2. 返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如果函数没有返回任何值，指定返回值类型为 void而不能留空。
let myAdd1: (x: number, y: number) => number = function (x1: number, y: number): number { return x1 + y }

// 推断类型
let myAdd2: (x: number, y: number) => number = function (x, y) { return x + y }
console.log(myAdd2(1, 2))

// 可选参数 
function buildName(firstName: string, lastName?: string) { // 可选参数必须跟在必须参数后
    if (lastName)
        return firstName + " " + lastName
    else
        return firstName
}
console.log(buildName('张'))
console.log(buildName('张', '三'))

//  默认参数  为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined
function buildName1(firstName: string, lastName = 'Smith') {
    return firstName + " " + lastName
}
console.log(buildName1('Tom')) // Tom Smith
console.log(buildName1('Tom', undefined))  // Tom Smith
console.log(buildName1('Tom', "Adams"))  // Tom Adams

// 剩余参数   剩余参数会被当做个数不限的可选参数
function users(name: string, ...names: string[]) {
    return name + " " + names.join(" ")
}
console.log(users('张三', '李四', '王五')) // 张三 李四 王五


// 函数重载
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x): any {
    if (typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard
    }
    else if (typeof x == "number") {
        let pickSuit = Math.floor(x / 13);
        return { suit: suits[pickSuit], card: x % 13 }
    }
}
let myDeck = [{suit: 'diamonds',card:2},{suit: 'spades',card:10},{suit: 'hearts',card:6}];
let mySuit = pickCard(myDeck)
console.log(mySuit,pickCard(mySuit))
