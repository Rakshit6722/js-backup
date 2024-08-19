var obj1 = {
    name:"rakshit",
    age:21,
    subjects:{
        dsa:21,
        web:32
    }
}

const func = (obj) => {
    //check if given obj is not obj or if it is a null return it
    if(typeof obj!==obj || obj===null) return obj

    //check if it is array create empty array or if obj create empty obj
    var newObj = Array.isArray(obj) ? []:{}

    //extract all the keys of the obj to clone them
    var keys = Object.keys(obj)


    //actual cloning with recursive function
    for(var i=0;i<keys.length;i++){
        newObj[keys[i]] = func(obj[keys[i]]);
    }
    return newObj;

}

var obj2 = func(obj1);

console.log(obj2)