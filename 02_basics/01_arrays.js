/// Arrays

const myArr =[0,1, 2,3,4];
const myHeores =["ironman","thor","captain america",true,30,20.49];


const myArr2 =new Array(3,39,20,10);
console.log(myArr[1]); /// accesing array element by using it's index number

/** methods in array */
myArr.push(6) //it will add 6 in myArr
console.log(myArr);

myArr.pop() // it will remove last element in array
console.log(myArr);

myArr.unshift(10)// 10 will insert on 0th index of array , this is not a good practise
console.log(myArr);

myArr.shift() // just opposite of unshift
console.log(myArr);

console.log(myArr.includes(9)); // it will a boolean  value which will tell whether a certain value is present or not
console.log(myArr.indexOf(69)); // if value will exists then it will give us a index of it other wise it will give us -1

const newArr = myArr.join(); // it will convert my array into String

console.log(myArr);
console.log(newArr); // typeof => string

//slice , splice

console.log("A ",myArr);

const myn1 =myArr.slice(1,3); // it will create new array from index 1 to 3 , where index 3 is not included and it will not disturve the original array
console.log("B",myArr);
console.log(myn1);

const myn2=myArr.splice(1,3); // it will cut out the orginal from 1 to 3 index and create new one , means it will disturb original array
console.log("C",myArr);
console.log(myn2);











