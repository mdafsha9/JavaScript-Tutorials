//javascript class
class Name{
  constructor(first, last){
    this.first = first;
    this.last = last;
  }
}
  const myName1 = new Name("John", "Doe");
  const myName2 = new Name("Marie", "Leo");
  document.getElementById("c1").innerHTML = myName1.first + " " +myName2.last;

//javascript constructor methods
class Car{
  constructor(carName, year){
    this.carName = carName;
    this.year = year;
  }
  age(){
    let date = new Date();
    return date.getFullYear()-this.year;
  }
  current(){
    let date = new Date();
    return date;
  }
}
const myCar = new Car("Ford", 2014);
document.getElementById("c2").innerHTML = myCar.age();
document.getElementById("c3").innerHTML = myCar.current();
