//nested ifelse

let winningNum = 19;
let userGuess =+ prompt("Guess a number ");

if(userGuess === winningNum){
  console.log("Your guess is perfect!");
}else {
  if(userGuess > winningNum){
    console.log("Too high!");
  }else{
    console.log("Too low!");
  }
}
