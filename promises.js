//One way of creating a promise
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task is completed')
//         resolve()
//     },1000);
// })

// promiseOne.then(function(){
//     console.log("Promise is consumed");
// })

//another way
/*new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})*/

//another one
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username: "Rakshit",
//             email: "rakhit435@gmail.com"
//         })
//     },1000)
// })
// promiseThree.then(function(user){
//      console.log(user);
//      console.log(user.username);
// })

//another one
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(error){
//             resolve({
//                 username: "Rakshit",
//                 password: 123
//             })
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// })

// new Promise((resolve,reject)=>{
//     setTimeout((user)=>{
//         let error = false;
//         if(error){
//             resolve({
//                 username : "rakshit",
//                 password : 12345
//             })
//         }
//         else{
//             reject('ERROR');
//         }
        
//     },2000)
// }).then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('the promise is either resolved or rejected');
// })

// console.log('hello')

// setTimeout(function(ans){
//     ans = 0;
//     for(let i=0;i<10;i++){
//         ans+=i;
//     }
//     console.log(ans);
// },1000);


//another one 
// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(error){
//             resolve({
//                 username:"rakshit",
//                 password:12345
//             })
//         }
//         else{
//             reject('ERROR');
//         }
//     })
// },1000);

// // handling resolve and reject using async await and try catch block
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();



// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

   
