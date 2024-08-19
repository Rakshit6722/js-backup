const numbers = [1,2,3,4,54];

// numbers.forEach((num,index)=>{
//     console.log(num);
// })

const newNums = numbers.filter((num)=>{
    return num>4
})
console.log(newNums);
