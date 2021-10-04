//Create an array
const myArr = ["Apple", "Mango", "Banana", "Orange"];
document.getElementById("arr").innerHTML = myArr;

//First create an array and then add elements
const myArrEle = [];
myArrEle[0] = "Volvo";
myArrEle[1] = "Accord";
myArrEle[2] = "BMW";
document.getElementById("addEle").innerHTML = myArrEle;

//Using javascript keyword new
const cars = new Array("Safari", "Honda", "Chervolt");
document.getElementById("key").innerHTML = cars;

//accessing array elements
const vegies = ["Brinjal", "Tomato", "Potato"];
document.getElementById("ele").innerHTML = vegies[1];

//Changing an array element
const fruits = ["grapes", "pine-apple", "custard-apple"];
fruits[0] = "Apple";
document.getElementById("change").innerHTML = fruits;

//Arrays are objects
//accessing first element of an array
const program = ["html", "css", "Javascript"];
document.getElementById("first").innerHTML = program[0];

//accessing last element of an array
const program1 = ["html", "css", "Javascript"];
document.getElementById("last").innerHTML = program1[program1.length-1];

//push methods
const vehicle = ["car", 'bus', "bi-cycle"];
vehicle.push("Bolero");
document.getElementById("met").innerHTML = vehicle;
//proeprty.length
const vehicle1 = ["car", 'bus', "bi-cycle"];
vehicle1[vehicle1.length]="Bollero";
document.getElementById("len").innerHTML = vehicle1;

//converting an array to toString
const fruitsA = ["Grapes", "Pappaya", "Dragon-fruit", "Kiwi"];
document.getElementById("as").innerHTML = fruitsA.toString();

//join all array elements to toString
const fruitsB = ["Mango", "Banana", "Pine-apple"];
document.getElementById("jts").innerHTML = fruitsB.join("*");

//pop() to remove last element of an arrays
const vegiesA = ["Brinjal", "Tomato", "Potato", "Carrot"];
document.getElementById("re").innerHTML = vegiesA;
vegiesA.pop();
document.getElementById("rem").innerHTML = vegiesA;
//push() to add an element of an array at the end
const vegiesB = ["Ladies-finger", "Bitter-guard", "Bottle-gaurd"];
document.getElementById("ad1").innerHTML = vegiesB;
vegiesB.push("Beans");
document.getElementById("ad2").innerHTML = vegiesB;

//shift() method
const meat = ["Pork", "Chicken", "lamb", "Beaf"];
document.getElementById("rem1").innerHTML = meat;
meat.shift();
document.getElementById("rem2").innerHTML = meat;

//unshift() methods
const meat1 = ["pork", "Beaf", "Chicken", "lamb"];
document.getElementById("add1").innerHTML = meat1;
meat1.unshift("Sheep");
document.getElementById("add2").innerHTML = meat1;

//changing the elements
const vehi1 = ["Bus", "Car", "Truck"];
document.getElementById("c1").innerHTML = vehi1;
vehi1[2]="Bi-cycle";
document.getElementById("c2").innerHTML = vehi1;

//appending the elements with javascript length property
const vehi3 = ["Bus", "Car", "Truck"];
document.getElementById("ch1").innerHTML = vehi3;
vehi3[vehi3.length]="Bi-cycle";
document.getElementById("ch2").innerHTML = vehi3;
