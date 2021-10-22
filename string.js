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
