//function declarations
document.getElementById("f1").innerHTML = myFunction(3,4);
function myFunction(a,b){
  return a+b;
}

//function expressions
const x = function(c,d){
  return c*d;
};
document.getElementById("f2").innerHTML = x(2,5);

//function() constructor
const myFunction1 = new Function("e", "f", "return e*f");
document.getElementById("f3").innerHTML = myFunction1(8,2);

//self-invoking functions
(function(){
  document.getElementById("f4").innerHTML = "Hello Javascript world!";
})();

//javascript functions can be used as values

function valFunction(g,h){
  return g-h;
}
document.getElementById("f5").innerHTML = valFunction(8,2);

function expFunction(i,j){
  return i*j;
}
document.getElementById("f6").innerHTML = expFunction(8,2)*3;

//arguments.length property
function propFunction(k,l){
  return arguments.length;
}
document.getElementById("f7").innerHTML = propFunction(1,2);

//toString methods

function strFunction(k,l){
  return k*l;
}
document.getElementById("f7").innerHTML = strFunction.toString();

//Arrow function without function keyword, return keyword and curly brackets
const o = (m,n)=>m*n;
document.getElementById("f9").innerHTML = o(5,4);

//arrow func with return keyword and curly brackets
const t = (p,q)=>{return p*q};
document.getElementById("f10").innerHTML = t(2,2);

//Default parameters
function defFunction(r,s){
  s=2;
  return r*s;
}
document.getElementById("f11").innerHTML = defFunction(4);

//function call()
const person = {
  fullName : function(){
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName : "John",
  lastName:"Doe"
}
const person2 = {
  firstName:"Louis",
  lastName:"Leo"
}
document.getElementById("f12").innerHTML = person.fullName.call(person2);

//difference of call() & apply()
//call() method
const personA = {
  fullName : function(city, country){
    return this.firstName + " " + this.lastName + " lives in " + city + " " + country;
  }
}
const person3 = {
  firstName : 'Lorie',
  lastName : "write"
}
const person4 = {
  firstName : 'Matt',
  lastName : "Wrich"
}
document.getElementById("f13").innerHTML = personA.fullName.call(person2, "Newyork", "USA");

//apply() method
const personB = {
  fullName : function(city, country){
    return this.firstName + " " + this.lastName + " lives in " + city + " " + country;
  }
}
const person5 = {
  firstName : 'Lorie',
  lastName : "write"
}
const person6 = {
  firstName : 'Matt',
  lastName : "Wrich"
}
document.getElementById("f14").innerHTML = personA.fullName.apply(person5, ["Newyork", "USA"]);

//lexical scope, variable defined outside the can be accesible to outside the function defined afetr the variable declarations
var firstName = "Hack";
function lexFunc(){
  document.write(firstName);
  function inFunc(){
    document.write(firstName);
  }
  inFunc();
}
lexFunc();

//lexical scope variable defined inside the function cannot accessible outside the functions
function lexFunc1(){
  document.write(lastName);
    function insFunc(){
      let lastName = "Mack";
    }
}
lexFunc1();
