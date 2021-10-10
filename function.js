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
