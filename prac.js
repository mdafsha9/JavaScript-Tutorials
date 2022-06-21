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

//create a new object using new Object()

const employee = new Object();
employee.firstName = "Donna";
employee.lastName = "Erric";
employee.age = 30;
employee.fullName = function(){
  return this.firstName + " " + this.lastName;
}
console.log("My name is " +employee.fullName());
