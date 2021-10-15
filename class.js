class Car{
  constructor(first, last){
    this.first = first;
    this.last = last;
  }
}
  const myCar1 = new Car("John", "Doe");
  const myCar2 = new Car("Marie", "Leo");
  document.getElementById("c1").innerHTML = myCar1.first + " " +myCar2.last;
