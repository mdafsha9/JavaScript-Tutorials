//JS variables
// var keyword
var name = "Lorie";
console.log(name);
var name = "Romie";
console.log(name);

//let keyword
let firstName = "Lorie";
console.log(firstName);
 firstName = "Romie";
console.log(firstName);

//const keyword
const pi = 1.36;
console.log(pi*2);

//JS strings

let fruit = "Mango";
for(i=0; i< fruit.length; i++){
  console.log(fruit[i]);
}

//trim()
fruit = "    ApPle    ";
console.log(fruit.length);
console.log(fruit);

newFruit =  fruit.trim();
console.log(newFruit);
console.log(newFruit.length);

//toUpperCase() method
console.log(newFruit.toUpperCase());
//toLowerCase() method
console.log(newFruit.toLowerCase());

//slice() method
let newFruits = newFruit.slice(2);
console.log(newFruits);

//typeof
let animal;
let num = null;
let number = 5;
console.log(typeof(name));
console.log(typeof(pi));
console.log(typeof(animal));
console.log(num, typeof(num));
console.log(number<5);

let bigInt = BigInt(123);
let newbigInt = 2n;
console.log(bigInt + newbigInt);
console.log(Number.MAX_SAFE_INTEGER);

//srting to number, number to string coonversion
let num1 = 22;
console.log(num1, typeof(num1));
num1 = 22 + ' ';
console.log(num1, typeof(num1));
let str = "22";
console.log(str, typeof(str));
str = +"22";
console.log(str, typeof(str));

console.log(num1 == str);
console.log(num1 === str);
//string concatination
let fName = "Mohit";
let lName = "Verma";
let fullName = fName + " " + lName;
console.log(fullName);

//template strings
console.log(`My name is ${fName} ${lName}`);
