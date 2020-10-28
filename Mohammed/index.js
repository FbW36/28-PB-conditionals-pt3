
// 1-

let aleezaTeamScores = [89, 120, 103];
let lisTeamScores = [116, 94, 123];


// 1a- Average score for each team
let sumScoreAleezaTeam = 0;
let sumScoreLisTeam = 0;

let avScoreAleezaTeam;
let avScoreLisTeam;

for (let i = 0; i < aleezaTeamScores.length; i++)
{
    sumScoreAleezaTeam += aleezaTeamScores[i];
    sumScoreLisTeam += lisTeamScores[i];
}

avScoreAleezaTeam = (sumScoreAleezaTeam) / (aleezaTeamScores.length);
avScoreLisTeam = (sumScoreLisTeam) / (aleezaTeamScores.length);

console.log(sumScoreAleezaTeam,aleezaTeamScores.length );
console.log(`The average score of Aleeza's team is ==> ${avScoreAleezaTeam} \nThe average score of Lis's team is ==> ${avScoreLisTeam}`);


// 1b- The winner team
let winnerTeam = avScoreLisTeam > avScoreLisTeam ? `The winner team is Aleeza's team with average score of ${avScoreAleezaTeam}` : `The winner team is Lis's team with average score of ${avScoreLisTeam}`;

console.log(winnerTeam);


// 1c. 
let aleezaTeamScores1 = [89, 98, 78];
let lisTeamScores1 = [96, 83, 75];

let sumScoreAleezaTeam1 = 0;
let sumScoreLisTeam1 = 0;

let avScoreAleezaTeam1;
let avScoreLisTeam1;

for (let i = 0; i < aleezaTeamScores1.length; i++)
{
    sumScoreAleezaTeam1 += aleezaTeamScores1[i];
    sumScoreLisTeam1 += lisTeamScores1[i];
}

avScoreAleezaTeam1 = (sumScoreAleezaTeam1) / (aleezaTeamScores1.length);
avScoreLisTeam1 = (sumScoreLisTeam1) / (aleezaTeamScores1.length);

console.log(sumScoreAleezaTeam1,aleezaTeamScores1.length );
console.log(`The average score of Aleeza's team is ==> ${avScoreAleezaTeam1} \nThe average score of Lis's team is ==> ${avScoreLisTeam1}`);

if (avScoreAleezaTeam1 > avScoreLisTeam1)
{
    console.log(`The winner team is Aleeza's team with average score of ${avScoreAleezaTeam1}`);
}
else if (avScoreAleezaTeam1 < avScoreLisTeam1)
{
    console.log(`The winner team is Lis's team with average score of ${avScoreLisTeam1}`);
}
else
{
    console.log(`Both teams have the same average ${avScoreAleezaTeam1} = ${avScoreLisTeam1}`);
}


// 1d.
let maryTeamScore = [97, 134, 105];
let sumScoreMary = 0;
let avScoreMaryTeam;

for (let i = 0; i < maryTeamScore.length; i++)
{
    sumScoreMary += maryTeamScore[i];
}

avScoreMaryTeam = (sumScoreMary) / (maryTeamScore.length);

if ( (avScoreAleezaTeam > avScoreLisTeam) && (avScoreAleezaTeam > avScoreMaryTeam) )
{
    console.log(`The winner team is Aleeza's team with average score of ${avScoreAleezaTeam}`);
}
else if (avScoreLisTeam > avScoreMaryTeam)
{
    console.log(`The winner team is Lis's team with average score of ${avScoreLisTeam}`);
}
else
{
    console.log(`The winner team is Mary's team with average score of ${avScoreMaryTeam}`);
}


// 1e
let aleezaTeamScores2 = [68, 62, 76];
let lisTeamScores2 = [68, 92, 65];
let maryTeamScore2 = [88, 62, 65];

let sumScoreAleezaTeam2 = 0;
let sumScoreLisTeam2 = 0;
let sumScoreMaryTeam2 = 0;

let avScoreAleezaTeam2;
let avScoreLisTeam2;
let avScoreMaryTeam2;

for (let i = 0; i < aleezaTeamScores2.length; i++)
{
    sumScoreAleezaTeam2 += aleezaTeamScores2[i];
    sumScoreLisTeam2 += lisTeamScores2[i];
    sumScoreMaryTeam2 += maryTeamScore2[i];
}

avScoreAleezaTeam2 = (sumScoreAleezaTeam2) / (aleezaTeamScores2.length);
avScoreLisTeam2 = (sumScoreLisTeam2) / (lisTeamScores2.length);
avScoreMaryTeam2 = (sumScoreMaryTeam2) / (maryTeamScore2.length);

if ( (avScoreAleezaTeam2 > avScoreLisTeam2) && (avScoreAleezaTeam2 > avScoreMaryTeam2) )
{
    console.log(`The winner team is Aleeza's team with average score of ${avScoreAleezaTeam2}`);
}
else if (avScoreLisTeam2 > avScoreMaryTeam2)
{
    console.log(`The winner team is Lis's team with average score of ${avScoreLisTeam2}`);
}
else if (avScoreMaryTeam2 > avScoreLisTeam2)
{
    console.log(`The winner team is Mary's team with average score of ${avScoreMaryTeam2}`);
}
else
{
    console.log(`All teams have the same average scores, Aleeza Team Average Scores: ${avScoreAleezaTeam2} = Lis Team Average Scores: ${avScoreLisTeam2} = Mary Team Average Score: ${avScoreMaryTeam2}`);    
}
