let name1={
    firstname:'rakshit',
    lastname:'chauhan'
}

function func1(){
    console.log(this.firstname+" "+this.lastname);
}

//official bind method
let func2 = func1.bind(name1);
func2()


//bind polyfill
Function.prototype.mybind = function(...args){ //Function.prototype will give global access of your function
    let obj = this //will point to the function that you want to call with bind method
    let params = args.slice(1);
    return function(...args2){ //will return this function
        obj.apply(args[0],[...params,...args2])
    }
}

let func3 = func1.mybind(name1);
func3();


