const name="ankan";
const repoCount=49;

console.log(name+repoCount+"value"); // concatenation

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('fifa'); //it will give me key value pair index by index and gives so many properties use this in console of javascript you will get to know this will give all method for string  in js


console.log(gameName[1]); // i
console.log(gameName.__proto__);// it will prototype og gameName which is object

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3)); //this method will give us character present at thar particular index
console.log(gameName.indexOf('f'));// this will give the indec of particular 

const newString=gameName.substring(0,2); // it will help to give a new sub string
console.log(newString);

const anotherString=gameName.slice(-4,3);
console.log(anotherString);


const newStringOne ="   santosh   "
console.log(newStringOne.trim()); // trim method remove the space given by a user in front of string and after string

const url="https://ankankushwaha.com/prateek(23)";
console.log(url.replace('(23)','20')); // thid method will in replace charcter
console.log(url.includes('ankan')); // it will help to find that will help in indentify whether a thing is present in a your variable

console.log(gameName.split('f'));
