// const currDate = new Date();
// console.log(currDate)
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getYear());
// console.log(currDate.getFullYear());
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());

// currDate.setFullYear(2022);
// console.log(currDate);
// currDate.setMonth(5);
// console.log(currDate);

// console.log(currDate.getTime());

// console.log("Time in milliseconds since 1970:", currDate.getTime());

function calculateSum(){
    let a = 0;
    for(let i=0;i<1000000000; i++){
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime(); 
calculateSum();
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs-beforeTimeInMs);