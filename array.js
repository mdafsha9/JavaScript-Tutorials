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
