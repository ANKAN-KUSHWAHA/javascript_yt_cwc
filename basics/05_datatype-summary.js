/**
 * ####### Primitive ####
 * 
 * # 7types : String,Number , Boolean,null , undefined ,symbol,bigInt
 */
const score= 100;
const scoreValue =100.3;
const isLoggedIn =false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123'); /// symbol used for defining unique things
const anotherId=Symbol('123');

console.log(id===anotherId);

const bigNumber=848484848938384n;

/**
 * Refrence (Non primitive)
 * // Array, Objects, Functions
 * typeof of non primitive is object
 */

const heroes=["ironman","Saktiman"];
let myObj = {
    name: "Ankan",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber);
console.log( typeof outsideTemp);
console.log(typeof myObj);
console.log(typeof myFunction); // object function
console.log(typeof heroes);


/**stack(for primitive) , heap (non-primitive) */

let myYoutubename="ankanKushwaha";
let anotherName =myYoutubename;
anotherName="prateekKushwaha"

console.log(anotherName);

let user={
    email: "ankanKushwaha@gmail.com",
    upi:"49494930@ybl"
}
let usertwo=user;
usertwo.email="prateekkushwaha@gmail.com";

console.log(user.email);
console.log(usertwo.email);

