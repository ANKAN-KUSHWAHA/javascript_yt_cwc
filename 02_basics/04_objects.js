//const tinderUser = new Object() ===> singleton object

const tinderUser = {} // this is a also object
tinderUser.id="193dnfo";
tinderUser.User="kamlesh";
tinderUser.isloggedin="true"

// console.log(tinderUser);

const regularUser={
    email:"someone@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Nirmal",
            lastname:"Goyal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);
// console.log(regularUser);

const obj1 = {
    1:"a",2:"b"
}
const obj2={3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2); // assign will merge object
// console.log(obj3);

const obj4 ={...obj1,...obj2};
console.log(obj4);

console.log(tinderUser);
// all these console giving us a output in array we can access 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));





