// # 28-PB-conditionals-pt3
// # Programming Basics: Conditionals Part 3 

// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!) 

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
const aleezaAverage = (Math.random() * Math.floor(150) * 3 / 3).toFixed(0); 
const lisAverage = (Math.random() * Math.floor(150) * 3 / 3).toFixed(0); 

// - 1a) Calculate the average score for each team.

console.log("Aleeza's Average is " + aleezaAverage);

console.log("Lis's Average is " + lisAverage);

// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (aleezaAverage > lisAverage) {
    console.log(`Aleezas's team wins with ${aleezaAverage}`);
}
else if (aleezaAverage < lisAverage) {
    console.log(`Lis's team wins with ${lisAverage}`); // Lis's team 111
}
else {
    console.log(`Ìt's a draw, everybody wins xD`);
}

// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
const marysAverage = (Math.random() * Math.floor(150) * 3 / 3).toFixed(0); 
console.log("Mary's average is " + marysAverage);

// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
if (aleezaAverage > lisAverage && aleezaAverage > marysAverage) {
    console.log(`Aleezas's team wins with ${aleezaAverage}`);
}
else if (aleezaAverage < lisAverage && marysAverage < lisAverage) {
    console.log(`Lis's team wins with ${lisAverage}`);
}
else if (marysAverage > aleezaAverage && marysAverage > lisAverage) {
    console.log(`Mary's team wins with ${marysAverage}`);
}
else {
    console.log(`Ìt's a draw, everybody wins xD`);
}