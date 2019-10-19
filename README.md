## 介绍

来源于土木工程师克里斯托夫.亚历山大的早期作品：
解决问题的经验,自编程行业以来就存在

## 什么是模式

可复用的解决方案

## 模式状态测试，proto模式及三法则

1. 解决特殊问题
2. 没有显而易见的解决方案
3. 描述业禁用证的概念
4. 描述一种关系

## 设计模式的结构

* 上下文
* 上下文产生的元件系统
* 解决元件在上下文中自身问题的配置

## 反模式

* 描述可以种针对某个特定问题的不良解决方案，该方案会导致糟糕的情况发生

* 描述如何摆脱前述糟糕情况以及如何创造更好的解决方案

### js有哪些反模式（不好的地方）

1. 在全局上下文中定义大量的变量污染全局变量命名空间
2. 想setTimeout或setInterval传递字符串，而不是函数，这会触发eval()内部的使用
3. 修改Object类的原型
4. 以内联形式使用js，它是不可改变的
5. 在使用document.createElement等原生dom方法更合适的情况下，使用document.write

## 设计模式类别

### 一、创建型设计模式

创建型设计模式专注于处理对象的创建极致，适合给定情况下的方式来创建对象，创建对象的基本方法可能会导致项目复杂度增加。创建型设计模式就是用来解决这种问题

包括：

1. 构造器模式Constructor
2. 工厂模式Factory
3. 抽象模式Abstract
4. 原型模式Prototype
5. 单例模式Singleton
6. 生成器模式Buider

### 二、结构性设计模式

结构性设计模式于对象组合有关，通常用于找出不同对象之间建立关系的简单方法。(低耦合)

包括：

1. 装饰者模式Decorator
2. 外观模式Facade
3. 享元模式Flyweight
4. 适配器模式Adapter
5. 代理模式Proxy

### 三、行为设计模式

专注于改善或简化系统中不同对象之间的通信

1. 迭代器模式Iterator
2. 中介者模式Mediator
3. 观察者模式Observer
4. 访问者模式Visitor

## 设计模式分类

> 创建型模式 基于创建对象的概念

1. 工厂方法： 基于接口数据或事件生成几个派生类的实例
2. 抽象工厂：创建若干哥类系列的实力，无需详细描述具体的类
3. 生成器模式：从表示中分离对象的构建，总是创建相同类型的对象
4. 原型： 用于复制或克隆完全初始化的实例
5. 单例： 一个类在全局访问点只有唯一一个实例
6. 结构性模式：基于对象块的想法
7. 适配器： 匹配不同类的接口，因此类可以在不兼容接口的情况下共同工作
8. 桥接： 用于对象接口从器实现中分离，因此他们可以独立进行变化
9. 组合： 简单和复合对象的结构，使对象的综合不只是它部分的总和
10. 装饰模式： 想对象动态添加备选的处理
11. 外观模式： 隐藏整个子系统复杂性的唯一一个类
12. 享元： 一个用于实现包含在别处信息的高效共享的细粒度实例
13. 代理模式： 占位符对象打死表真正的对象
14. 行为模式： 基于对象在一起配合工作的方式
15. 解释器： 将语言元素包含在应用程序中的方法，以匹配语言预期语法
16. 模板方法： 在方法中船舰算法的shell，然后将确切的步骤推到子类
17. 职责链： 在对象连之间传递请求的方法，以找到能能够处理请求的对象
18. 命令： 将命令执行从器调用程序中分离的方法
19. 迭代器模式： 顺序访问一个集合中的元素，无需了解集合的内部工作原理
20. 中介这模式： 在类之间定义简化的通信，以防止一组类显示引用彼此
21. 备忘录： 捕获对象内部的状态，以能够在以后恢复它
22. 观察者模式： 想多个类通知改变的方法，确保类的一致性
23. 状态： 状态改变是时，更改对象的行为
24. 策略： 在一个类中封装算法，将选择于实现分离
25. 访问者模式： 想类添加一个新的操作，无需改变类

## 设计模式详细

### 一、构造器模式constructor

es6中的新语法

```
    class Car {
        constructor(str1,str2) {
            this.attr1 = str1
            this.attr2 = str2
        }
        toString() {
            console.log(this.attr1 + this.attr2)
        }
    }
    
    const car1 = new Car('js', 'es6')
    const car2 = new Car('es6', 'ts')
    car1.toString()
    car2.toString()
```

这些方法还可以继承

```
 const driver = Object.create(car1)
```

在ts中

```
class Obj {
    private attr1: string
    private attr2: string
    constructor(str1: string, str2: string) {
        this.attr1 = str1
        this.attr2 = str2
    }
    public toString(): any {
        console.log(this.attr1 + this.attr2)
    }
}
const car1 = new Obj('ts', '构造器')
car1.toString()
```

### 二、模块(Module)

在js中实现模块的方法

* 对象字面量表示法
* Module模式
* AMD模式
* CommonJS模式(node支持，不过对于新版的node，可以使用es6模块)
* ECMAScript Harmony模块(es6)
* 匿名函数自执行(个人创建方法，函数外部的变量，不会受到函数内部变量的影响，因为压根不会访问到,但是得暴露出对外使用的接口，例如jquery,vue2.0的压缩后的源码)

最初是被定义在传统软件工程为类提供私有和公有的封装方法

使用闭包封装"私有"状态的组织。它提供了一种包装混合公有/私有方法和变量的方式，只需返回一个公有的API，但是对于ts中，它已经有private这个属性(抄袭java)，所以很简单

```
const testModule = (() => {
    let counter = 0
    return {
        addCounter() {
            counter ++
            retrun counter
        },
        resetCounter() {
            counter = 0
            return counter
        },
        outPutCounter() {
            console.log(counter)
            retrun counter
        }
    }
})()
```

### 三、揭示模块revealingModule

> 以一种更为语义化的描述，反映出模块具有哪些方法

```
const myRevealingModule = (() => {
    let privateCount = 0
    function privateaddCount() {
        privateCount ++
    }
    function privateResetCount() {
        privateCount = 0
    }
    function privateOutPutCount() {
        console.log(privateCount)
    }
    // 将暴露出的公有方法的地址值在私有的方法上面,外部就可以访问这些私有的方法
    return {
        getCount: privateCount,
        resetCount: privateRestCount,
        outPutCount: privateOutPutCount
    }
})()
```

### 四、单例模式(Singleton)

> 限制了类的实例化次数只能一次(站在性能上的角度讲，很好)，如果没有创建，则创建一次，如果创建了，则返回这个类的引用

es6语法

ts语法(因为ts较为严格，所以只能通过另外的函数去创建对象)
```
class Car {
    public getNum(num: number): number {
        return num * 10
    }
}
function init(): Car {
    return new Car()
}
function getInterfaceface() {
    let interFace: Car
    if (!interFace) {
        console.log('第一次申明Car')
        interFace = init()
    }
    return interFace
}
```

### 五、观察者模式(Observer)

当一个目标需要告诉观察者发生了什么事情的时候，它会向观察者广播一个通知

当我们不再需要某个特定的观察者获得其注册目标发出的改变通知时，该目标将它从观察者列表删除

subject（目标）

维护一系列观察者，方便添加和删除

Observer（观察者）

为那些目标状态发生改变时需获得通知对象提供的接口

ConserteSubject（具体目标）

状态发生改变时，向Observer发出通知，存储ConcreteObserver的状态

ConcerrteObserver （具体观察者）

存储一个指向ConcereteSubject的引用，实现Observer的更新接口，以使自身状态与目标状态保持一致

