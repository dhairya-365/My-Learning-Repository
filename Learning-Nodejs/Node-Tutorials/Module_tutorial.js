// const Dhairya = "Dhairya";

// const greetUser = ((name) => {
//     console.log("hello " + name)
// });
// module.export = greetUser(Dhairya)

// const fs = require('fs');

// fs.readFile('test.txt', 'utf8', (err, data) => { 
//     if (err) throw err;
//     console.log(data);
// });

// console.log('read file'); 

const {readFileSync,writeFileSync, read} = require('fs')
writeFileSync("Learning-Nodejs/Docs/test.txt","Hello world");

let msg = readFileSync("Learning-Nodejs/Docs/test.txt",'utf-8')
console.log(msg)