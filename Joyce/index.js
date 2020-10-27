// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// 1a) Calculate the average score for each team.
let Aleeza = (89 + 120 + 103) / 3;
console.log("The average score for the Team Aleeza ==>", Aleeza);
let Lis = (116 + 94 + 123) / 3;
console.log("The average score for the Team Liz ==>", Lis);

// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (Aleeza > Lis) {
  console.log(`Winner is Team  Aleeza ${Aleeza}`);
} else {
  console.log(`Winner is Team Lis ${Lis}`);
}

// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
Aleeza = 120;
Lis = 120;
if (Aleeza > Lis) {
  console.log(`Winner is Team Aleeza ${Aleeza}`);
} else if (Aleeza == Lis) {
  console.log(`Winner is Team Aleeza ${Aleeza}`);
  console.log(`Team Lis is also a winner ${Lis}`);
} else {
  console.log(`Winner is Team Lis ${Lis}`);
}

// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let Mary = (97 + 134 + 105) / 3;
console.log("The average score for the Team Mary ==>", Mary);

// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
Aleeza = 118;
Lis = 112;
Mary = 118;
let highest = Math.max(118, 112, 118);

if (Aleeza >= highest) {
  console.log(`Winner is Team Aleeza ${Aleeza}`);
  if (Lis >= highest) {
    console.log(`Winner is Team Lis ${Lis}`);
  } else if (Mary >= highest) {
    console.log(`Winner is Team Mary ${Mary}`);
  }
}
