/// singleton
///Object.create

// object literals
const mySym =Symbol("key1");


const jsUser ={
    name:"ankan", 
    "secondName":"Prateek",
    age: 18,
    [mySym]:"myKey1",
    location: "Puranpur",
    email:"ankan3939@gmail.com",
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email); /// two ways of accesing value by using key in a object
console.log(jsUser["email"]);

console.log(jsUser.secondName);

console.log(jsUser.mySym); // we can excess this symbol by this is not using as a symbol // type is object
console.log(typeof jsUser.mySym);


