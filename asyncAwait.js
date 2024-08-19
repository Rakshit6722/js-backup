function asyncFunction(){
    let p = new Promise(function(resolve){
        resolve('hi there');
    });
    return p;
}

// function main(){
//     // asyncFunction().then(data=>{
//     //     console.log(data);
//     // })
//     let value = asyncFunction();
//     console.log(value);
// }

//with async await
//while using async await we dont have to use .then()
async function main(){
    let value = await asyncFunction();
    console.log(value);
}

main();