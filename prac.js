//primitive datatypes
//1. string

let firstName = "Cathy";
let age = 22;
let hobby;
let tree = null;

let num1 = BigInt(12);
let num2 = 123n;
console.log(firstName);
console.log(typeof firstName);
console.log(age, typeof age);
console.log(hobby);
console.log(tree, typeof tree);

console.log(num1+num2);
console.log(Number.MAX_SAFE_INTEGER);

//converting numb to string
age = age + " "; or
console.log(age, typeof age);



//converting string to number
firstName = +"22";
console.log(firstName, typeof firstName);
