let aleezaTeamScore = 333;
let lizTeamScore = 333;
let average1 = aleezaTeamScore / 3;
let average2 = lizTeamScore / 3;

if (average1 > average2) {
    console.log(`Team Aleeza wins with an average of ${average1}!`);
} else if (average1 < average2) {
    console.log(`Team Liz wins with an average of ${average2}!`);
} else {
    console.log("It's a draw!");
}

let maryTeamScore = 330;
let average3 = maryTeamScore / 3;

if (average1 > average2 && average1 > average3 ) {
    console.log(`Team Aleeza wins with an average of ${average1}!`);
} else if (average1 < average2 && average3 < average2) {
    console.log(`Team Liz wins with an average of ${average2}!`);
} else if (average1 < average3 && average2 < average3) {
    console.log(`Team Mary wins with an average of ${average3}!`);
} else {
    console.log("It's a draw!");
}