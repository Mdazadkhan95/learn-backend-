function personInfo(name, age) {
    person = {
        name: name,
        age : age,
        talk() {
            console.log(`hi my name is ${this.name}`);
        }
    }
    return person;
}
let p1 = personInfo("azad", 20);
let p2 = personInfo("sana", 19);
console.log(p1);
p1.talk();
console.log(p2);
p2.talk();

if(p1.talk === p2.talk){
    console.log("true");
    
}
else{
    console.log("false");
    
}

// yahan ek drowback hai factory function ye alag alag person ke liye alag alag memory consume krta hai isi ke liye new keyword ko laya gaya hai.
