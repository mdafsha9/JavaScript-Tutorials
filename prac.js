//clone array
let array1 = ["item1", "item2"];
// let array2 = array1;
array1.push("item3");
// console.log(array1 === array2);


//we can clone array1 elements in array2 but we cannot copy array1 push elements

let array2 = array1.slice(0);
console.log(array1);
console.log(array2);
