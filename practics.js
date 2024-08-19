// 

// var d = new Promise(function(resolve){
//     resolve();
// })

// function callback(){
//     console.log(d);
// }

// d.then(callback);

function addAsync(x,y){
    return new Promise((resolve,reject)=>{
        if(x===undefined || y===undefined){
            reject("error");
        }
        else{
            resolve(x+y);
        }
    })
}

addAsync(3,3)
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})