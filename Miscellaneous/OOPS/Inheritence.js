class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log("this is parent class");   
    }
    talk() {
        console.log(`hi my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks){
        console.log("this is child class");
        super(name, age);
        this.marks = marks; 
        this.talk();
    }
}

class Teacher extends Person {
    constructor(name, age, subject){
        console.log("this is child class");
        super(name, age);
        this.subject = subject;   
        this.talk();
    }
}

let s1 = new Student("azad", 20, 98);
console.log(s1);


let t1 = new Teacher("azad", 22, "javaScript")
console.log(t1);


class Animal {
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("i am eating");
        
    }
}

class Cat extends Animal {
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow..!");
        
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }
    bark(){
        console.log("bhow..!");
        
    }
}

let dog1 = new Dog("choco");
console.log(dog1);
console.log(dog1.bark());

let cat1 = new Dog("choco");
console.log(cat1);
console.log(cat1.bark());

