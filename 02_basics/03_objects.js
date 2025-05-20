/// singleton => ye apne tarah ka ek hi objet hai
///Object.create => this is another method to create method this method is called constructer method ke through

// object literals
const mySym =Symbol("key1"); // it's is symbol as a key to access value

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
 
console.log(jsUser[mySym]); // we can excess this symbol by this is not using as a symbol // type is object

jsUser.email = "prateek@gmail.com";
// Object.freeze(jsUser);  it will freeze the object after that statement we can't change value of any key
jsUser.email="xyz@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("this is jsUser object");
}

jsUser.greetingTwo = function(){
    console.log(`this is a name ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



