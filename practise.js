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
const person6 = {
  firstName : "Chart",
  lastName : "Croo",
  age :65
};
document.getElementById("varmany").innerHTML = person6.age;
