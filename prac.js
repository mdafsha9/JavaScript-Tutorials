//create an object using object literals

const person = {
  firstName : "John",
  lastName : "Hue",
  age : 25,
  hobbies : ["criket", "reading", "playing"],
  fullName : function(){
    return this.firstName + " " + this.lastName;
  }
}
console.log("My name is " + person.fullName() + " and i am " + person.age);
