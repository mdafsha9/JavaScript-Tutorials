//spread operator in arrays and objects

let array1 = ["item1", "item2" ];

let array2 = ["item3", "item4"];

const myArr = [...array1, ...array2, "item5"];
console.log(myArr);

let obj1 = {
  key1 : "val1",
  key2 : "val2"
}
let obj2 = {
  key3 : "val3",
  key4 : "val4"
}
const myObj = {...obj1, ...obj2, key5:"val5"};
console.log(myObj);
