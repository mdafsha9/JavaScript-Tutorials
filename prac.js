//create an object using new keyword

const person = new Object();
person.firstName = "Lorie";
person.lastName = "Wright";
person.age = 30;
person.hobbies = ["Playing", "singing", "Reading"];
person.name = function(){
  return this.firstName + " " + this.lastName;
}

console.log("My name is " + person.name() + " and my hobbies are " + person.hobbies); 
