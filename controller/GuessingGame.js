export function GuessingGame(){

myNumber = 7;
userText = prompt("Lets Play a Game! Try to guess my number");
userNumber = Number(userText);
theResult = userNumber === myNumber;
if (theResult === true){
  document.write("You guessed my Number! You win 20% off Your Next Order."+ "<br>");
  }
else {
  document.write("You didn't guess my number " + "<br>");
  theComparison = userNumber < myNumber;
  if (theComparison === true){
  document.write("Your number is lower than mine!" + "<br>");
}
  else {
  document.write("Your number is higher than mine!" + "<br>");
}
  
}
}