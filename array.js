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

//delete an elements
const alpha1 = ["a", "b", "c", "d"];
document.getElementById("d1").innerHTML = alpha1;
delete alpha1[1];
document.getElementById("d2").innerHTML = alpha1;

//splicing an arrays
const fruits01 = ["Mango", "Apple", "Grapes"];
document.getElementById("spl1").innerHTML = fruits01;
fruits01.splice(1,0, "Lemon" );
document.getElementById("spl2").innerHTML = fruits01;
//using splice() to remove eleements
const vegies01 = ["Tomato", "Potato", "Brinjal", "Beans", "Cauli-flower"];
document.getElementById("spl3").innerHTML = vegies01;
vegies01.splice(2,2, "Cabbage", "Chillies");
document.getElementById("spl4").innerHTML = vegies01;

//merging an arrays
const girls = ["Marry", "Priya", "Cathy"];
const boys = ["Louis", "Brown", "Gray"];
const children = girls.concat(boys);
document.getElementById("mer1").innerHTML = children;

//concat() can take any no. of arrguments
const arr1 = ["Marry", "Priya", "Cathy"];
const arr2 = ["Louis", "Brown", "Gray"];
const arr3 = ["Curry", "Beiden", "Roy"];
const children1 = arr1.concat(arr2, arr3);
document.getElementById("mer2").innerHTML = children1;

//concat() can also take string as arrguments
const animals = ["Lion", "Tiger", "Cheatha"];
const allAnimals = animals.concat("Bengal Tiger");
document.getElementById("mer3").innerHTML = allAnimals;
