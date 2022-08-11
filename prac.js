//arrays
let person = {
  firstName : "Lorie",
  lastName : "Wright",
  age : 22,
  "person hobbies" : ["reading", "playing", "singing"]
}
console.log(person["person hobbies"]);

let employee = {};
employee.firstName = "Cathy";
employee.lastName = "Krumm";
employee.age = 25;
employee.color = "white";

console.log(employee);

let student = new Object();
student.firstName = "Naina";
student.lastName = "Shestra";
student.age = 35;
student.color = "Black";
console.log(student);

for(let key in student){
  console.log(`${key} : ${student[key]}`);
}

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj = {
  key1 : value1,
  key2 : value2
}
console.log(obj);

const obj1 = {
  [key1] : value1,
  [key2] : value2
}
console.log(obj1);
