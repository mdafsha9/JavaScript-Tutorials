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

//if else
let numb = 18;
if(numb<=18){
  console.log("You age must be above 18");
}else {
  console.log("Congratulations!");
}

//falsy values (false, null, 0, undefined)
let car ;
if(car){
  console.log(car);
}else{
  console.log("falsy value");
}

//Ternary operator
let drink = 3;

let user = drink<5 ? "milk" : "coffee";
console.log(user);

//And or OR operator

let empName = "Richards";
let age = 15;

if(empName[0] === "R" && age> 18){
  console.log("Your name starts with R and age is above 18");
}else{
  console.log("You must eligible both conditions!");
}

if(empName[0] === "R" || age> 18){
  console.log("Your name starts with R ");
}else{
  console.log("You must qualify either one conditiont ");
}

//nested if else
let winningNum = 22 ;
let userGuess =  +prompt("Guess a number")
if(userGuess === winningNum){
  console.log("Your guess is perfect!");
}else {
  if(userGuess<winningNum){
  console.log("Too Low!");
}else{
  console.log("too high!");
}
}

//if elseif

let grade = 75;

if(grade > 85){
  console.log("Distinction!");
}else if(grade>75){
  console.log("First class!");
}else if(grade>65){
  console.log("Second class!");
}else if(grade>55){
  console.log("Third class!");
}else{
  console.log("Just pass!");
}

//switch statement
let day = 6;
switch(day){
  case 0:
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("Wednesday");
    break;
  case 3:
    console.log("Thursday");
    break;
  case 4:
    console.log("Friday");
    break;
  case 5:
    console.log("Saturday");
    break;
  case 6:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
}

//while loop
let x = 0;
while(x<10){

  console.log(x);
x++;
}

//for loop

for(let i=0; i<=10; i++){
  console.log(i);
}
