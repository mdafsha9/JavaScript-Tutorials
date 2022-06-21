//Objects

const person = {
  firstName : "Lorie",
  lastName : "Wright",
  age : 25,
  eyecolor : "Brown",
  fullName : function(){
    return this.firstName + " " + this.lastName;
  }
}

console.log("My name is " + person.firstName+ " " + person.lastName + " and i'm " +person.age+ " years old.");
console.log("My name is " +person.fullName());
