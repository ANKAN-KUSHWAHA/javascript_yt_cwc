const score= 599;
console.log(score);

const balance =new Number(100);// it will give help in to give propeties in browser console log
console.log(balance); 

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // it will give a precision value after absolute value

const otherNumber=23.8883;
console.log(otherNumber.toPrecision(2)); // we have to give  index to use roundoff

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));

/**  --------Maths------ */

console.log(Math);// do this in console of brower to get to know full properties of that

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.59));

console.log(Math.min(4,393,48.4,0.2,93));
console.log(Math.max(4,393,48.4,0.2,93));

console.log(Math.random()); ///it will give random value between from 0 to 1

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min =10;
const max=20;

console.log(Math.floor(Math.random()*(max-min +1)) +min);




