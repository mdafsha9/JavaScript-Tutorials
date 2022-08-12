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

myfriend1.nationality = "English";

console.log("My friend nationality is " + myfriend1.nationality);

myfriend2.name = function(){
  return this.firstName + " " +this.lastName;
}

console.log("My fullname is " + myfriend2.name());


Person.prototype.hobbies = ["Reading", "Singing"];

console.log("My friend hobbies are " + myfriend2.hobbies);

Person.prototype.name = function(){
  return this.firstName + " " + this.lastName;
}

console.log("My friend name is " + myfriend1.name());
