function printName(state){
    console.log(this.firstname+" "+this.lastname+" "+state)
}

let name1 = {
    firstname:'rakshit',
    lastname:'chauhan'
}

printName.call(name1,"up")
printName.apply(name1,["up"])//we provide second paramenter as list of arguments
let func3 = printName.bind(name1)//same as call method but the only difference it returns a method which can be called later 
func3()