let log = console.log;


const Aleeza = [87,135,108];
const Lis = [117,99,105];
//  Calculate the average score for each team:
let avgScoreAleeza = (Aleeza[0] + Aleeza[1] + Aleeza[2]) / Aleeza.length;
log(`Aleeza's team scores ${avgScoreAleeza} points per game.`);
let avgScoreLis = (Lis[0] + Lis[1] + Lis[2]) / Lis.length;
log(`Lis' team scores ${avgScoreLis} points per game.`)
// Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output
if(avgScoreAleeza > avgScoreLis){
    log(`Aleeza's ${avgScoreAleeza} PPG tops Lis' by ${avgScoreAleeza - avgScoreLis} points.`);
}
else if(avgScoreLis > avgScoreAleeza) {
    log(`Lis' ${avgScoreLis} PPG tops Aleeza's by ${avgScoreLis - avgScoreAleeza} points.`);
}
else {
    log('Both team have the same average score');
}
// Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console
const Mary = [97,134,105];
let avgScoreMary = (Mary[0] + Mary[1] + Mary[2]) / Mary.length;
log(`Mary's team scores ${avgScoreMary} points per game.`)
// Like before, change the scores to generate different winners, keeping in mind that there might be draws
if(avgScoreAleeza > avgScoreLis && avgScoreAleeza > avgScoreMary){
    log(`Aleeza's ${avgScoreAleeza} PPG tops Lis' and Mary's PPG.`);
}
else if(avgScoreLis > avgScoreAleeza && avgScoreLis > avgScoreMary) {
    log(`Lis' ${avgScoreLis} PPG tops Aleeza's and Mary's PPG.`);
}
else if(avgScoreMary > avgScoreAleeza && avgScoreMary && avgScoreLis) {
    log(`Mary's ${avgScoreMary} PPG tops Aleeza's and Lis' PPG.`)
}
else {
    log('Both team have the same average score');
}