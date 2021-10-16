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

//class inheritance
class Car1{
  constructor(brand){
    this.carName = brand;
  }
  present(){
    return "I have a " +this.carName;
  }
}
class Model extends Car1{
  constructor(brand, mod){
    super(brand);
    this.model = mod;
  }
  show(){
    return this.present() + ", it is a " + this.model;
  }
}
const myCar1 = new Model("Ford", "Mustang");
document.getElementById("c4").innerHTML = myCar1.show();


//using getters & Setters
class Bus{
  constructor(brand){
    this.busname = brand;
  }
  get bname(){
    return this.busname;
  }
  set bname(x){
    this.busname = x;
  }
}
const myBus = new Bus("Mahindra");
document.getElementById("c5").innerHTML = myBus.bname;
