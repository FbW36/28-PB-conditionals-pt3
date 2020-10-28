// 1. Aleeza and Lis both play basketball in different teams.In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// - 1a) Calculate the average score for each team.
let averageAleeza = (150 + 121 + 103) / 3;
let averageLis = (116 + 99 + 123) / 3;

// - 1b) Decide which teams wins in average(highest average score), and print the winner to the console, including their average score in the output.
if (averageAleeza > averageLis) {
  console.log(`Aleeza's team wins! `);
} else if (averageAleeza === averageLis) {
  console.log(`It's a draw!`);
} else {
  console.log(`Lis's team wins!`);
}

// - 1c) Then change the scores to show different winners.Don't forget to take into account there might be a draw (the same average score).

// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points.Like before, log the average winner to the console.
let averageMary = (135 + 134 + 105) / 3;

if (
  averageAleeza === averageLis ||
  averageLis === averageMary ||
  averageAleeza === averageMary
) {
  console.log(`It's a draw`);
} else if (averageAleeza > averageLis && averageAleeza > averageMary) {
  console.log(`Aleeza's team wins!`);
} else if (averageLis > averageAleeza && averageLis > averageMary) {
  console.log(`Lis's team wins!`);
} else {
  console.log(`Mary's team wins!`);
}

// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
