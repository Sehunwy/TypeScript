function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
function setName(person) {
    console.log('Hello ' + person.firstName + " " + person.lastName);
}
var user1 = {
    firstName: "张",
    lastName: "三"
};
setName(user1);
// 类   在构造函数的参数上使用public等同于创建了同名的成员变量,
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + ' ' + lastName;
    }
    return Student;
}());
var student = new Student('zhang', 'yi', 'san');
console.log(student);
