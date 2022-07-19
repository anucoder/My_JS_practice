var secretNumber = 6;
var guess;
//guess = Number(prompt("Guess the number"));
while(guess!==secretNumber)
{
  guess = Number(prompt("Guess the number"));
  if(secretNumber===guess)
  {
    alert("You guessed it correct");
  }
  else if( guess <= secretNumber)
  {
    alert(" Too low ! try again");
  }
  else {
    alert(" Too high ! try again");
  }

}
