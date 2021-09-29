function myCont(){
  document.getElementById('cont').innerHTML = "Hello JavaScript World!";
}

function openLock(){
  document.getElementById('myImg').src = "assets/lockopen.png";
}
function closeLock(){
  document.getElementById('myImg').src="assets/lockclo.png";
}

function changeSty(){
  document.getElementById('changesty').style.color = "darkred";
}

function changeElem(){
  document.getElementById('changelem').style.display = 'none';
}

function showElem(){
  document.getElementById('showElem').style.display = 'block';
}

function smile(){
  document.getElementById('smile').src = "assets/smile.png";
}
function chil(){
  document.getElementById('smile').src = "assets/chill.jpg";
}

document.write("Hello JavaScript");

//window.alert("Hello JavaScript");

console.log("Hello JavaScript");

function exFunction(g,h){
  return g*h;
}
document.getElementById("func").innerHTML = exFunction(5,8);

let r = retFunction(8,9);
document.getElementById("rtf").innerHTML = r;
function retFunction(e,f){
  return e+f;
}

let j = function(m,n){
  return m*n;
};
document.getElementById("fncEx").innerHTML = j(5,6);

let csFunction = new Function("i", "j", "return i-j");
document.getElementById("cs").innerHTML = csFunction(9,2);

function pracFunction(i,j){
  var sum = i +j;
  return sum;
}
document.getElementById("fe").innerHTML = pracFunction(8,5);

let c = retFunction(5,5);
document.getElementById("funret").innerHTML = c;
function retFunction(A,B){
  return A*B;
}

const m = function(k,l){
  return k+l;
}
document.getElementById("funexp").innerHTML = m(2,2);

//Javascript Objects
const person = {
  firstName : "Matt",
  lastName : "Lee",
  age : 45,
  eyeColor : "blue"
};
document.getElementById("obj").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old.";

//empty Javascript object
const person1 = {};
person1.firstName = "Peteer";
person1.lastName = "Maid";
person1.age = 29;
document.getElementById("empty").innerHTML = person1.age;

//created a new javascript Objects
const person2 = new Object();
person2.firstName = "Peteer";
person2.lastName = "Maid";
person2.age = 29;
document.getElementById("empty").innerHTML = person2.lastName;

//adding a property
const person3 = {
  firstName : "Matt",
  lastName : "Lee",
  age : 45,
  eyeColor : "blue"
};
person3.country = "Indian"
document.getElementById("add").innerHTML = person3.country;

//deleting a property
const person4 = {
  firstName : "Matt",
  lastName : "Lee",
  age : 45,
  eyeColor : "blue"
}
delete person4.age;
document.getElementById("del").innerHTML = person4.age;

//object variables can contain single values(varsingle)
let person5 = "Morie Doe";
document.getElementById("varsingle").innerHTML = person5;

//objects are variables too. But can contain many values
const person6 = {firstName : "Chart", lastName : "Croo", age :65};
document.getElementById("varmany").innerHTML = person6.age;

//create an object using object objliterals
const person7 = {
  firstName : "Rose",
  lastName : "Jazz",
  age : 26,
  eyeColor : "Blue"
};
document.getElementById("objliterals").innerHTML = person7.firstName + " " + person7.lastName + " eye color is " + person7.eyeColor;

//create an empty JavaScript object and then add properties
const person8 = {};
  person8.firstName = "Jack";
  person8.lastName = "Jardon";
  person8.age = 30;
  person8.hairColor = "Brown";
document.getElementById("objempty").innerHTML = person8.firstName + " " + person8.lastName + " hair color is " + person8.hairColor;

//create a new javascript object and then add properties
const person9 = new Object();
person9.firstName = "Sunny";
person9.lastName = "Tom";
person9.age = 30;
person9.eyeColor = "black";
document.getElementById("objnew").innerHTML = person9.firstName + " " + person9.lastName + " is " + person9.age + " years old.";

//adding a new property
const person10 = {
  firstName : "Lossie",
  lastName : "Marine"
};
person10.nationality = "English";
document.getElementById("propernew").innerHTML = person10.nationality;

//delete a property
const person11 = {
  firstName : "Lossie",
  lastName : "Marine",
  nationality : "English"
};
delete person11.nationality;
document.getElementById("properdel").innerHTML = person11.nationality;

//nested Objects
const myPerson = {
  name : "John Doe",
  age : 25,
  cars : {car1 : "BMW", car2 : "Volvo", car3 : "Accord"}
};
document.getElementById("ne").innerHTML = myPerson.cars.car2;

//javascript object method
const myPerson1 = {
firstName : "Leen",
lastName : "Tom",
age : 30,
eyeColor : "black",
fullName : function(){
  return this.firstName + " " + this.lastName;
}
};
document.getElementById("objme").innerHTML = myPerson1.fullName();

//alone this keyword is global objects
let i = this;
document.getElementById("alone").innerHTML = i;

//alone, in a strict mode, this keyword is global object
"use strict";
let o = this;
document.getElementById("strialone").innerHTML = o;

//in a function this refers to global objects
function myFunction(){
  return this;
}
document.getElementById("funthi").innerHTML = myFunction();

//in a function, in a strict mode,  this refers to undefined
"use strict";
document.getElementById("unde").innerHTML = myFunc();

function myFunc(){
  return this;
}

//objects (28/09/2021)
//variables can contain single values
let myName = "Afsha";
document.getElementById("si").innerHTML = myName;

//variables can contain many values
const villager = {
  firstName : "Rao",
  lastName : "Meer",
  age : 50,
  eyeColor : "Blue"
}
document.getElementById("ma").innerHTML = villager.firstName + " " + villager.lastName;

//create an empty javascript object and then add properties
const villager2 = {};
villager2.firstName = "RamaRao";
villager2.lastName = "Deera";
villager2.age = 55;
villager2.eyeColor = "Black";
document.getElementById("em").innerHTML = villager2.firstName + " " + villager2.lastName + " is " + villager2.age ;

//create a new javavscript object and then add properties
const villager3 = new Object();
villager3.firstName = "VenkatRao";
villager3.lastName = "Meera";
villager3.age = 60;
villager3.eyeColor = "Brown";

document.getElementById("neem").innerHTML = villager3.firstName + " " + villager3.lastName + " eye color is " + villager3.eyeColor ;

//add a property to objects
const villager4 = {
  firstName : "Rao",
  lastName : "Meer",
  age : 50,
  eyeColor : "Blue"
}
villager4.nationality = "English";
document.getElementById("addp").innerHTML = villager4.firstName + " " + villager4.lastName + " is " + villager4.nationality;

//delete property
const villager5 = {
  firstName : "Rao",
  lastName : "Meer",
  age : 50,
  eyeColor : "Blue"
}
delete villager5.eyeColor;
document.getElementById("delp").innerHTML = villager5.firstName + " " + villager5.lastName + " eye color is " + villager5.eyeColor;

//javascript iteroble
const info = "Women";
let cont = " "
for(const s of info ){
  cont += s + "<br> ";
}
document.getElementById("iters").innerHTML = cont;

const numbers = [1,3,5,6,7];
let num = " "
for(const n of numbers ){
  num += n + "<br> ";
}
document.getElementById("iters").innerHTML = num;

//this keyword (29/09/2021)
var q = this;
document.getElementById("thissi").innerHTML = q;
