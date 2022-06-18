//arrays

const fruits = ["Apple", "Mango", "Orange"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

//push
fruits.push("Banana");
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//unshift
fruits.unshift("Banana");
console.log(fruits);

//unshift
fruits.shift();
console.log(fruits);

//clone

let array1 = ["item1", "item2", "item3"];

//let array2 = array1.slice(0).concat("item5");


//let array2 = [].concat(array1);

let array2 = [...array1, "item4"];
console.log(array1);
console.log(array2);

//for loop

for(let i=0; i<fruits.length; i++){
  console.log(fruits[i]);
}

//while loop
let i =0;
while(i<fruits.length){
  console.log(fruits[i]);
  i++;
}

//for of loop
for(let fruit of fruits){
  console.log(fruit);
}

//for in loop
for(let index in fruits){
  console.log(fruits[index]);
}
