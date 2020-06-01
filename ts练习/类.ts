class Greeter {
    name: string;
    constructor(message: string) {
        this.name = message
    };
    get() {
        return 'Hello,' + this.name
    }
}
let greeter = new Greeter('张三');
console.log(greeter.get())

// 继承  成员都默认为 public
class Animal {
    name: string;
    constructor(names: string) {
        this.name = names
    };
    move(dis: number = 0) {
        console.log(`${this.name} moved ${dis}m`)
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name)
    };
    move(dis = 5) {
        super.move(dis)
    }
}
let dog = new Dog('dog');
dog.move();
console.log(dog.name)
// private 当成员被标记成 private时，它就不能在声明它的类的外部访问
class Animal1 {
    private name: string;
    constructor(names: string) {
        this.name = names;
    };
    getName() {
        console.log(this.name)
    }
}
class Cat extends Animal1 {
    constructor(name) {
        super(name)
    }
}
let cat = new Cat('cat');
cat.getName();
// console.log(cat.name) // error 'name' is private

// protected protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
class Person {
    protected name: string;
    protected constructor(names: string) {
        this.name = names
    }
}
class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department
    };
    getMessage() {
        console.log(`My name is ${this.name},my department is ${this.department}`);
    }
}
let employee = new Employee('张三', '行政')
employee.getMessage();
// let person = new Person('') // error 'Person' is protected
// employee.name; // error 'name' is protected,不能在 Person类外使用 name

// readonly修饰符, readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
class Octopus {
    readonly name: string;
    readonly legs: number = 8;
    constructor(name: string, legs: number = 8) {
        this.name = name;
        this.legs = legs
    };
    get() {
        console.log(`An ${this.name} has ${this.legs} legs`)
    }
}
let octopus = new Octopus('octopus')
octopus.get();
// octopus.name ='dog'; // error name是只读

// 参数属性   在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处
class Octopus1 {
    legs: number = 8;
    constructor(readonly name: string) {
    };
    get() {
        console.log(`An ${this.name} has ${this.legs} legs`)
    }
}
let octopus1 = new Octopus1('octopus')
octopus1.get();

// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问
class Employee1 {
    name: string;
    get getName(): string {
        return this.name
    };
    set setName(name) {
        if (name == 'name') {
            this.name = name
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let emp = new Employee1();
emp.setName = "sss";
console.log(emp.getName)

// 静态属性 创建类的静态成员，这些属性存在于类本身上面而不是类的实例上  
class Grid {
    static origin = {
        x: 0, y: 0
    };
    calcDis(point: { x: number; y: number }) {
        // 使用 Grid.来访问静态属性
        let x = (point.x - Grid.origin.x);
        let y = (point.y - Grid.origin.y);
        return Math.sqrt(x * x + y * y) / this.scale;
    };
    constructor(public scale: number) { }
}
let grid1 = new Grid(1);
let grid2 = new Grid(5);
let point = { x: 10, y: 10 }
console.log(grid1.calcDis(point));
console.log(grid2.calcDis(point));

// 抽象类  抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
abstract class Department {
    constructor(public name: string) { };
    printName() {
        console.log(`The department is ${this.name}`)
    };
    abstract printMeeting(): void; // 必须在派生类中实现
}
class Departments extends Department {
    constructor() {
        super('Accounting and Auditing')  // 在派生类的构造函数中必须调用 super()
    }
    printMeeting() {
        console.log("The meeting")
    }
    reports() {
        console.log("reports")
    }
}
let depart: Department// 允许创建一个对抽象类型的引用
// depart = new Department(); // error  Cannot create an instance of an abstract class
depart = new Departments();
depart.printName();
depart.printMeeting();
// depart.reports(); // error  Property 'reports' does not exist on type 'Department'

// 把类当做接口使用
class Ponit {
    x: number;
    y: number
}
interface Point3d extends Ponit {
    z: number
}
let point3d: Point3d = { x: 12, y: 3, z: 9 }
console.log("point3d",point3d)
