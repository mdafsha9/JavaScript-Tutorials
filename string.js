let firstName = "Afsha";
document.getElementById("demo").innerHTML = firstName;

//Backslash
let lastName = "Doe";
document.getElementById("s1").innerHTML = "'Hey!' this is a Doe";
document.getElementById("s2").innerHTML = "\"Hey!\" this is a Doe";
//line break
document.getElementById("s3").innerHTML = "Hey! this is a \n" + firstName + " " + lastName;

//string length
document.getElementById("s4").innerHTML = firstName.length;

//javascript can be stored as objects with new String()
let middleName = new String("Afsha");
document.getElementById("s5").innerHTML = middleName;

//typeof operator
document.getElementById("s6").innerHTML = typeof middleName + " <br>"  +typeof firstName;

//x == y
document.getElementById("s7").innerHTML = (firstName == middleName);

//x === y
document.getElementById("s8").innerHTML = (firstName === middleName);

//slice methods
const myText = "I am learning JavaScript";
document.getElementById("sm").innerHTML = myText.slice(0,8);
//substr() methods
document.getElementById("sm1").innerHTML = myText.substr(5, 8);

//replace method
function reFunction(){
  let text = document.getElementById("r").innerHTML;
  document.getElementById("r").innerHTML = text.replace("Microsoft", "W3schools");
}

//convert a string into toUpperCase
let text1 = "uppercase"
document.getElementById("upp").innerHTML = text1.toUpperCase();
