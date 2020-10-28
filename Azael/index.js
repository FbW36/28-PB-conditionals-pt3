// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
let match1Aleeza = 89;
let match2Aleeza = 120;
let match3Aleeza = 103;
let totalAleeza = match1Aleeza + match2Aleeza + match3Aleeza;
let match1Lis = 116;
let match2Lis = 94;
let match3Lis = 123;
let totalLis = match1Lis + match2Lis + match3Lis;

//1a) Calculate the average score for each team.

let averageAleeza = totalAleeza / 3;
console.log("averageAleeza :>> ", averageAleeza); //104

let averageLis = totalLis / 3;
console.log("averageLis :>> ", averageLis); //111
// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (averageAleeza > averageLis) {
  console.log(`Aleeza is the winner with ${averageAleeza} points`);
} else if (averageAleeza < averageLis) {
  console.log(`Lis is the winner with ${averageLis} points`);
} else {
  console.log(`It was a draw! with ${averageLis} points`);
}

// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).#
averageAleeza = 300;
averageLis = 300;
if (averageAleeza > averageLis) {
  console.log(`Aleeza is the winner with ${averageAleeza} points`);
} else if (averageAleeza < averageLis) {
  console.log(`Lis is the winner with ${averageLis} points`);
} else {
  console.log(`It was a draw! with ${averageLis} points`);
}

averageAleeza = 280;
averageLis = 300;
if (averageAleeza > averageLis) {
  console.log(`Aleeza is the winner with ${averageAleeza} points`);
} else if (averageAleeza < averageLis) {
  console.log(`Lis is the winner with ${averageLis} points`);
} else {
  console.log(`It was a draw! with ${averageLis} points`);
}
// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let match1Mary = 97;
let match2Mary = 134;
let match3Mary = 105;
let totalMary = match1Mary + match2Aleeza + match3Mary;

let averageMary = (totalMary / 3).toFixed();
console.log("averageMary :>> ", averageMary); //
// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

averageAleeza = 900;
averageLis = 500;
averageMary = 500;
if (averageAleeza > averageLis && averageAleeza > averageMary) {
  console.log(`Aleeza is the winner with ${averageAleeza} points`);
} else if (averageLis > averageAleeza && averageLis > averageMary) {
  console.log(`Lis is the winner with ${averageLis} points`);
} else if (averageMary > averageAleeza && averageMary > averageLis) {
  console.log(`Mary is the winner with ${averageMary} points`);
} else {
  console.log(`It was a draw! with ${averageLis} points`);
}
