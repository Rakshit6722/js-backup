const user = {
    name: "Rakshit",
    gender: "male"
}
const finalString = JSON.stringify(user);//object converted into a json string
console.log(finalString);
const res = JSON.parse(finalString);//JSON string converted into an object
console.log(res);
console.log(res["gender"])