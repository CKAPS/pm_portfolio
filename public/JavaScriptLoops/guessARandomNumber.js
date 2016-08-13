//Generate a Random Number
//Guess a Random Number 
//Print the number of attempts that were required to guess the number 

//Optimize 
//Move all the variables to the top


function randomNumber(upper){
  return Math.floor(Math.random() * upper) + 1;
}
var numberOfAttempts=0;
var generatedRandomNumber = randomNumber(1000);
var guessedNumber = randomNumber(1000);
while(guessedNumber != generatedRandomNumber){
  guessedNumber = randomNumber(1000)
  numberOfAttempts += 1;
}
document.write('<h1>Lets guess the random number</h1>');
document.write('The random number was ' +  generatedRandomNumber + '<br>');
document.write(' It took computer ' +  numberOfAttempts + ' attempts to guess the number');
