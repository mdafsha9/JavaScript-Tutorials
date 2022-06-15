//number to string conversion and string to number conversion
//number to string conversion
let number = 22;

console.log(number, typeof number);

number = 22 + " ";
console.log(number, typeof number);

let name = "Royal";
console.log(name, typeof name);
name = + "Royal";
console.log(name, typeof name);

let num = BigInt(123155);
let num1 = 123n;
console.log(num+num1);
console.log(Number.MAX_SAFE_INTEGER);
