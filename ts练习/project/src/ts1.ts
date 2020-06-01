function greeter(person: string) {
    return "Hello, " + person;
}
let user = "Jane User";
console.log(greeter(user));

// 接口
interface Person {
    firstName: string;
    lastName: string
}
function setName(person: Person) {
    console.log('Hello ' + person.firstName + " " + person.lastName)
}
let user1 = {
    firstName: "张",
    lastName: "三"
}
setName(user1)
 
// 类   在构造函数的参数上使用public等同于创建了同名的成员变量,
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + ' ' + lastName
    }
}
let student = new Student('zhang','yi','san');
console.log(student)