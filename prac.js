//javascript object constructor function

function Person(first, last, eye, age){
  this.firstName = first;
  this.lastName = last;
  this.eye = eye;
  this.age = age;
}

const myfriend1 = new Person("Harika", "Perugu", "Black", 22);
const myfriend2 = new Person("Haritha", "majiga", "Brown", 25);


console.log("My friend eye color is " + " " + myfriend1.eye);
console.log("My friend name is " + " " + myfriend2.firstName + " " +myfriend2.lastName);
