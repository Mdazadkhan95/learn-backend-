// it is a first way to imoprt module one file to another file.
// fistly you go now first directories where a make file the then go to the second directories and perform that operation using require .


// let Apple =  require("./fruits/apple")
// let orange =  require("./fruits/orange")
// let Banana =  require("./fruits/banana")


// console.log(Apple);

// console.log(orange);

// console.log(Banana);




// if you want to import all file in a single line of statement the follow these steps;
// 1.  go to the main file where make some file like js file then you create a index.js file the export all modules in index.js file because you  export all file in  single line satement so complier is find the index.js file in first directories then follow this line of statements 


const info = require("./fruits");
const apple = require("./fruits/apple");

console.log(info);
console.log(apple.name);


