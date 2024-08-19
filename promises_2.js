const { on } = require('events');
const fs = require('fs');

//without promises
// function readfile(cb){
//     fs.readFile("./fileSystem/file.txt","utf-8",function(err,data){
//         cb(data);
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// readfile(onDone);

//with promises
// function readfile(){
//     return new Promise(function(resolve){
//         fs.readFile("./fileSystem/file.txt","utf-8",function(err,data){
//             resolve(data);
//         });
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// readfile().then(onDone);

// function func(){
//     let p = new Promise(function(resolve,reject){
//         setTimeout(reject, 2000);
//     });
//     return p;
// }
// const value = func();
// value
// .then(function(){
//     console.log("hi there");
// })
// .catch(function(){
//     console.log("rejected");
// })


// let sum =  function(val){
//     return new Promise(function(resolve,reject){
//         for(let i=0;i<=10;i++){
//             val++;
//         }
//         if(val%2==0) resolve(val);
//         else reject();   
//     })
// }

// function displaySum(data){
//     console.log(data);
// }

// sum()
// .then(displaySum)
// .catch(function(){
//     console.log("rejected");
// })