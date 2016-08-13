// alert("Can you hear me ?");

//Function to generate a random number 

function randomNumber(upper){
  return Math.floor(Math.random() * upper) + 1;
}
//console.log(randomNumber(6));

document.write('<h1>Lets generate the random number</h1>');
var counter=0;
while(counter < 1000){
  //console.log(randomNumber(6));
  var randomNum = randomNumber(6);
  document.write(randomNum + ' ');
  counter+=1;
}
