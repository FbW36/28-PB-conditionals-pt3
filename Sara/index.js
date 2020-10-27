//1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
//- 1a) Calculate the average score for each team.

// TEAM ALEEZA
let gameA1 = 89;
let gameA2 = 89;
let gameA3 = 89;
let averageA = (gameA1 + gameA2 + gameA3) / 3;
console.log(averageA) ; // 104

// TEAM LIS
let gameL1 = 89;
let gameL2 = 89;
let gameL3 = 89;
let averageL = (gameL1 + gameL2 + gameL3) / 3;
console.log(averageL) ; // 111

//1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
//1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
if(averageA > averageL){
    console.log("Aleeza Wins! With a average score of " + averageA) ;
}else if(averageA === averageL){
    console.log("Its a draw! With a average score of " + averageA ) ;
}else{
    console.log("Lis Wins! with a average score of " + averageL) ;
}
//1b ==> Lis WINS!! With a average of 111 points!
//1c ==> its a draw

//1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let gameM1 = 89 ;
let gameM2 = 89 ;
let gameM3 = 89 ;
let averageM = (gameM1 + gameM2 + gameM3) / 3; 

if(averageA > averageL || averageA > averageM){
    console.log("Aleeza Wins! With a average score of " + averageA) ;
}else if(averageA === averageL && averageA === averageM){
    console.log("Its a draw! With a average score of " + averageA ) ;
}else if(averageL > averageA || averageL > averageM){
    console.log("Lis Wins! With a average score of " + averageL) ;
}else{
    console.log("Mary Wins! With a average score of " + averageM) ;
}
// Mary Wins! With a average score of 112





