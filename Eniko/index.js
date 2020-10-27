// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

// Print your results to the console

// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
let a1 = 89;
let a2 = 120;
let a3 = 103;
let l1 = 116;
let l2 = 94;
let l3 = 123;
// 1a) Calculate the average score for each team.
let Aleeza = ((a1  + a2 + a3) / 3);
let Lis = ((l1 + l2 + l3) / 3);
console.log(Aleeza);
console.log(Lis);
// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (Aleeza > Lis) {
    console.log("Aleeza won!");
} else if ( Aleeza == Lis) {
    console.log("It is a tie!");
}else {
    console.log("Lis won!");
}
// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let m1 = 97;
let m2 = 134;
let m3 = 105;
let Mary = ((m1 + m2 + m3) / 3);
console.log(Mary);
// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

Mary = 80;
Lis = 100;
Aleeza = 100;

if (Aleeza > Lis && Aleeza > Mary) {
    console.log("Aleeza won!");
} else if (Aleeza == Lis && Lis> Mary) {
    console.log("It is a tie!");
} else if (Aleeza == Mary && Mary > Lis) {
    console.log("It is a tie!");
} else if (Lis == Mary && Mary > Aleeza) {
    console.log("It is a tie!");
} else if (Mary > Lis && Mary > Aleeza) {
    console.log("Mary won");
} else {
    console.log("Lis won!");
}