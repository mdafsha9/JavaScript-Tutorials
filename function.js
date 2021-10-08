//function declartions
document.getElementById("f1").innerHTML = myFunction(3,4);
function myFunction(a,b){
  return a+b;
}

//function expressions
const x = function(c,d){
  return c*d;
};
document.getElementById("f2").innerHTML = x(2,5);
