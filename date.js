//javascript default Date
const d = new Date();
document.getElementById("d1").innerHTML = d;

//create an object using new Date() with a specified date & setTimeout(function () {
  const d1 = new Date(2021, 9, 21, 10, 46, 30, 02);
  document.getElementById("d2").innerHTML = d1;

//Date methods--toString();
const d2 = new Date();
document.getElementById("d3").innerHTML = d2.toString();

//Date method -- toUTCString();
const d3 = new Date();
document.getElementById("d4").innerHTML =d3.toUTCString();

//Date method -- toDateString();
const d4 = new Date();
document.getElementById("d5").innerHTML =d4.toDateString();

//Date method -- toISOString();
const d5 = new Date();
document.getElementById("d6").innerHTML =d5.toISOString();
