// 枚举 使用枚举我们可以定义一些带名字的常量

// 数字枚举
enum direction {  // Up使用初始化为 1, 其余的成员会从 1开始自动增长;不使用初始化，Up值为0
    Up = 1,
    Down,
    Left,
    Right
}
console.log(direction.Down); // 2

// 字符串枚举   在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
enum direction1 {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
console.log(direction1.Left, direction1.Right)

// 计算的成员
enum fileAccess {
    read = 1 << 2,
    wirte = 1 >> 1
}
console.log(fileAccess.read,fileAccess.wirte)

// 反向映射 从枚举值到枚举名字; 正向映射（ name -> value）和反向映射（ value -> name）
enum Enum {
    A
}
let a = Enum.A;
console.log(a,Enum[a]); // 0 'A'

// const枚举 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义
const enum direction2 {
    Up = 1,
    Down = Up*2
}

// 外部枚举   外部枚举用来描述已经存在的枚举类型的形状
// 外部枚举和非外部枚举区别:在正常的枚举里,没有初始化方法的成员被当成常数成员;对于非常数的外部枚举而言,没有初始化方法时被当做需要经过计算的