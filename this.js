const person = {
  firstName:"Lorie",
  lastName:"Wright",
  age:50,
  fullName: funcion(){
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("me").innerHTML = person.fullName();
