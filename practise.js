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

//this keywords
