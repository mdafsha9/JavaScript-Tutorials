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
document.write(isNaN(a));
