//only if conditionals

//1.a

let teamAleeza = 89 + 120 +103
let avrgTeamAleeza = teamAleeza/3
console.log("Aleeza average points in 3 games", avrgTeamAleeza); //104 points

let teamLis = 116 + 94 +123
let avrgTeamLis = teamLis/3
console.log("Lis average points in 3 games ", avrgTeamLis); //111 points

let teamMary = 97 + 131 +105
let avrgTeamMary = teamMary/3
console.log("Mary average points in 3 games ", avrgTeamMary); // 112 points


//1.b
if(avrgTeamAleeza > avrgTeamLis && avrgTeamAleeza> avrgTeamMary)
{
    console.log(`the Winner is Team Aleeza with an average score of ${avrgTeamAleeza} Points`);
}else if (avrgTeamLis > avrgTeamAleeza && avrgTeamLis > avrgTeamMary)
{
    console.log(`the Winner is Team Lis with an average score of ${avrgTeamLis} Points`);
}else if(avrgTeamMary>avrgTeamAleeza && avrgTeamMary > avrgTeamLis) 
{
console.log(`the Winner is Team Aleeza with an average score of ${avrgTeamMary} Points`);
}else 
{
    console.log("there is a draw");
}