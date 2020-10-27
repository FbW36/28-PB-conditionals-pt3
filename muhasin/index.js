// Aleeza's Team
let aleeGame1 = 89;
let aleeGame2 = 120;
let aleeGame3 = 103;
let averageScoreAlee = (aleeGame1 + aleeGame2 + aleeGame3) / 3;
console.log("Average Score for Aleeza's Team ==>", averageScoreAlee); // 104

// Lis's Team
let lisGame1 = 116;
let lisGame2 = 94;
let lisGame3 = 123;
let averageScoreLis = (lisGame1 + lisGame2 + lisGame3) / 3;
console.log("Average Score for Lis's Team ==>", averageScoreLis); // 111

if (averageScoreAlee > averageScoreLis) {
    console.log("Win Aleeza's team " + averageScoreAlee)
} else if (averageScoreAlee === averageScoreLis) {

    console.log("Match Draw " + averageScoreAlee);
} else {
    console.log("Win Lis's team " + averageScoreLis); // Win Lis's team.  Score ==> 111

}

let maryGame1 = 97;
let maryGame2 = 134;
let maryGame3 = 105;
let averageScoreMary = (maryGame1 + maryGame2 + maryGame3) / 3;
console.log("Average Score of Mary Team ==>", averageScoreMary); // 112

if (averageScoreAlee > averageScoreLis || averageScoreAlee > averageScoreMary) {
    console.log("Win Aleeza's team " + averageScoreAlee);
} else if (averageScoreAlee === averageScoreLis && averageScoreAlee === averageScoreMary) {
    console.log("Match Draw ", +averageScoreAlee);

} else if (averageScoreLis < averageScoreAlee || averageScoreLis > averageScoreMary) {
    console.log("Win Lis's Team " + averageScoreLis);

} else {
    console.log("Win Mary's Team " + averageScoreMary);

}

// Win Mary's Team 112