function myFunction(){
  var res = " ";
res = res + Number.isNaN(123) + "<br>";
res = res + Number.isNaN("123") + "<br>";
res = res + Number.isNaN(5-2) + "<br>";
res = res + Number.isNaN(0) + "<br>";
res = res + Number.isNaN("Hello") + "<br>";
res = res + Number.isNaN(0/0) + "<br>";
res = res + Number.isNaN(NaN) + "<br>";
res = res + Number.isNaN(undefined) + "<br>";

  document.getElementById("nan").innerHTML = res;
}

var a = "Hello";
document.write(isNaN(a) + "<br>");

//primitive datatypes
document.write("John Doe" + "<br>");
document.write(25.5 + "<br>");

var a = 123522465424654265256554425;
document.write(a + "<br>");

var x = 5;
var y = 6;
var z = 6;
document.write((x==y) + "<br>");
document.write((y==z) + "<br>");
