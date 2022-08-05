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
