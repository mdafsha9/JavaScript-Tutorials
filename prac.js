//JavaScript object Set
 const numbers = new Set();
 numbers.add(1);
 numbers.add(2);
 numbers.add(3);
 numbers.add(4);
 numbers.add(5);
 console.log(numbers);

if(numbers.has(4)){
  console.log("4 is present");
}else{
  console.log("4 is not present");
}
