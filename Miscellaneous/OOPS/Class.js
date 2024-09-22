// 

class PersonInfo{
    constructor(name, age ) {
        this.name = name;
        this.age = age;
        console.log(this);
        
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new PersonInfo("azad", 25); // here firstly create a blank object for p1 
p1.talk();
let p2 = new PersonInfo("sana", 19);
p2.talk();
console.log(p1.talk === p2.talk);
