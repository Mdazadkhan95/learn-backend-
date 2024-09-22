// new keyword help krta hai ke ham kr koi constructor banaye huye hai to usse ham naye instance bana skte hai. 
// ye four steps mein kaam krta hai 
// 1.  ye sabse pahle ek blank object create krta hai. 
// 2.  agar hamare constructor ke pass koi prototype hai like koi prototype method or prototype function etc to jo hamari nayi object banegi wo bhi is object access kr payegi  

function PersonInfo(name, age){ // this is a constructor it doesn't return anything & start with capital letter

    this.name = name;
    this.age = age;
    console.log(this);
    

}

PersonInfo.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
    
}

let p1 = new PersonInfo("azad", 25); // here firstly create a blank object for p1 
p1.talk();
let p2 = new PersonInfo("sana", 19);
p2.talk();

if(p1.talk === p2.talk){
    console.log("true");
    
}
else{
    console.log("false");
    
}

//  yahan ye if condition true hai kyunki ye constructor prototype ka function jo dono mein hai isliye ye condition true hai. yahan aaisa nhi hai ke p1 ne alag copy banai hai or p2 ne alag copy banai hai dono ek hi instance ko use kr rhi hai. 

// ye factory function se better tarika hai kyunki uska alag function ke liye alag memory use hota hai pr yaha prototype mein hi hai 