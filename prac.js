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
