const fs = require("fs");

//async function
fs.readFile("./fileSystem/file.txt","utf-8",function(err,data){
    console.log(data); 
}) 

//this will run first
console.log("hi there");

let a = 0;
for(let i=0; i<100000; i++){
    a++;
}
console.log(a);