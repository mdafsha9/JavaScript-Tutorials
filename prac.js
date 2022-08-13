//JavaScript object Set
const numbers = new Set();
numbers.add(1);
numbers.add("Apple");
numbers.add(["cat", "Dog", "Eagle"]);
console.log(numbers);

numbers.delete("Apple");
console.log(numbers);

if(numbers.has(1)){
  console.log("1 is present");
}else{
  console.log("1 is not present");
}

// numbers.clear();
// console.log(numbers);
for(let number of numbers){
  console.log(number);
}
