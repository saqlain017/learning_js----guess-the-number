// Math.random returns between 0 to 1
let a = Math.random();
console.log(a);

// use Math.floor(with Math.random() to make random numbers at specified range
let b = Math.floor(Math.random()*100)+1;
//guess the number 
var c = parseInt(prompt("Enter any number from 1-100"));
var score = 100;
while (c!=b){
  score--
  console.log("Please Try Again");
  c = parseInt(prompt("Enter any number from 1-100"));
};

console.log("You Won as the correct number is: ", b);
let tries = 100 - score
console.log("You have guessed it perfectly after " + tries + " tries and your score is " + score);
