// function sum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data){
//     console.log(`Result of the sum is ${data}`);
// }

// function displayResultPassive(data){
//     console.log(`Sum's result is : ${data}`);
// }

// //You are only allowed to call one function after this
// //how will you displayResult of a sum

// function sum(num1, num2, displayResult){
//     let result = num1 + num2;
//     displayResult(result);
// }
// sum(2,3,displayResult);


// function calculateArithmetic(a, b, type){
//     if(type == "sum"){
//         const value = sum(a,b);
//         return value;
//     }
//     if(type == "minus"){
//         const value = sub(a,b);
//         return value;
//     }
// }

// function sum(a,b){
//      return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// const value = calculateArithmetic(1,2,"minus");
// console.log(value);

//callback version
function calculateArithmetic(a, b, fnToCall){
    return fnToCall(a,b);
}

function sum(a,b){
     return a+b;
}
function sub(a,b){
    return a-b;
}

const value = calculateArithmetic(1,2,sub);
console.log(value);