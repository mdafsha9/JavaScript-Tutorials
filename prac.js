//nested ifelse condition

let winningNum = 19;
let userGuess = + prompt("Guess a number " );

if(winningNum === userGuess){
  console.log("Perfect guessing");
}else{
  if(userGuess < winningNum){
    console.log("Too Low!");
  }else{
    console.log("Too high!");
  }
}
