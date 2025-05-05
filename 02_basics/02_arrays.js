// use prototye in cosole just create one array then write the name of an array you will get prototype , search it on yt about prototye of array and js

const marvel_heroes =["thor","Ironman","Spiderman"];
const dc_heroes =["Superman","Flash","Batman"];

marvel_heroes.push(dc_heroes); // it creatre a problem ,creating a array inside an array
console.log(marvel_heroes); // if we have to access dc_heroes we have to use two index to reach partcular element in dc_heroes

const marvel_heroes2 =["thor","Ironman","Spiderman"];
const dc_heroes2=["Superman","Flash","Batman"];

const allHeroes = marvel_heroes2.concat(dc_heroes2); // it will add up to arrays to create a single array
console.log(allHeroes);

const all_new_heroes =[...marvel_heroes2,...dc_heroes2] // it will do a same work as concat , this method is more preferred
console.log(all_new_heroes);


const another_array =[1, 2, 3,[4,5,6],[7,[8,9]]];// array in array in array ....
const real_another_array= another_array.flat(Infinity); // we should give exact the no of nested array we have to combine

console.log(real_another_array);


console.log(Array.isArray("ankan")); // false 
console.log(Array.from("AnkanKushwha")); // create a array

console.log(Array.from({name:"Prateek"})); // intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

