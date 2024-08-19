//classe is a structure or blueprint
class Animal{
    constructor(name, legCount){
        this.name = name;
        this.legCount = legCount;
    }

    static myType(){
        return "Animal";
    }
    
    describe(){
        return `${this.name} has ${this.legCount} legs`
    }
}


console.log(Animal.myType())
let dog = new Animal("dog",4);//create object
console.log(dog.describe());//call function on object