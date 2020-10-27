/* Aleeza and Lis both play basketball in different teams.In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.*/

//? 1a) Calculate the average score for each team.

//const aleeza = [89, 120, 103];
//const lis = [116, 94, 123];

let aleezaAvr = (89 + 120 + 103) / 3;
console.log("Alleza avr:", aleezaAvr); // 104

let lisAvr = (116 + 94 + 123) / 3;
console.log("liz avr:", lisAvr); // 111

//? 1b) Decide which teams wins in average(highest average score), and print the winner to the console, including their average score in the output.

if (lisAvr > aleezaAvr) {
  console.log(`Lis Basketballteam wins ${lisAvr} Points in average.`);
} else if (aleezaAvr > lisAvr) {
  console.log(`Aleezas Basketballteam wins ${aleezaAvr} Points in average.`);
} else {
  console.log(
    `Avr Points are equal with ${lisAvr} and ${aleezaAvr}. Nobody wins.`
  );
}

//? 1c) Then change the scores to show different winners.Don't forget to take into account there might be a draw (the same average score).

//! Works with modifing the numbers in the array

//? 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points.Like before, log the average winner to the console.

let maryAvr = (97 + 134 + 105) / 3;

if (lisAvr > (aleezaAvr && maryAvr)) {
  console.log(`Lis Basketballteam wins ${lisAvr} Points in average.`);
} else if (aleezaAvr > (lisAvr && maryAvr)) {
  console.log(`Aleezas Basketballteam wins ${aleezaAvr} Points in average.`);
} else if (maryAvr > (aleezaAvr && lisAvr)) {
  console.log(`Marys Basketballteam wins ${maryAvr} Points in average.`);
} else {
  console.log(`At least 2 Teams have equal Avr-Points. No winner.`);
}

// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws

aleezaAvr = ((99 + 72 + 25) / 3).toFixed(2);
maryAvr = ((107 + 124 + 97) / 3).toFixed(2);
lisAvr = ((126 + 74 + 143) / 3).toFixed(2);

if (lisAvr > (aleezaAvr && maryAvr)) {
  console.log(`Lis Basketballteam wins ${lisAvr} Points in average.`);
} else if (aleezaAvr > (lisAvr && maryAvr)) {
  console.log(`Aleezas Basketballteam wins ${aleezaAvr} Points in average.`);
} else if (maryAvr > (aleezaAvr && lisAvr)) {
  console.log(`Marys Basketballteam wins ${maryAvr} Points in average.`);
} else {
  console.log(`At least 2 Teams have equal Avr-Points. No winner.`);
}
