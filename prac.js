//create an javaScript object constructor function

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eye;
  this.name = function(){
    return this.firstName + " " + this.lastName;
  }
}

Person.prototype.nationality = "Indian";
const myFriend = new Person("Black", "Berry", 25, "brown");
const myNeighbour = new Person("obama", "barak", 40, "blue");

console.log("My name is " +myNeighbour.name() + " and i am " + myFriend.age) ;
console.log("My nationality is " + myFriend.nationality);
