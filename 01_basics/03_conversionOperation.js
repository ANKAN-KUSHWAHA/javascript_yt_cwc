let score ="492nsj";// 45, undefined , null ,"49jcn"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber );

// "33"=> 33
// "33abc"=> NaN
//true=> 1; false=> 0

 let loggedIn=null;
 let booleanIsLoggedIn= Boolean(loggedIn);

 console.log(booleanIsLoggedIn);
 
 // 0=>true; 0 => false
 // ""=> false
 //"ankan"=> true

 let stringNumber=undefined;
 let stringNumbers =String(stringNumber);
 console.log(stringNumbers);
 console.log(typeof stringNumbers);
 

// ********* Operations *********

let value=3;
let negValue= -value;
console.log(negValue);

console.log(2+2);
console.log(2**4); /// it will give me a power 4 of 2 so answer would be 16

let str1 = "hello";
let str2 ="ankan";
let str3 = str1+str2;
console.log(str3); /// helloankan

console.log("1" + 2); // 12
console.log("1" +"2"); // 12
console.log(1 + "2");  // 12

console.log("1" + 2 + 2);// 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // first + operator will convert boolean into number 
console.log(+false);// 0
console.log(-true); // -1
console.log(-false);// -0
console.log(+"");//0

let num1,num2,num3; // not recomended

num1=num2=num3=2+2;

let gameCounter =100;
gameCounter++;
console.log(gameCounter);













 