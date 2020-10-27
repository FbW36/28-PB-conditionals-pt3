// const average = function (score) {
//   let sum = 0;
//   for (let i = 0; i < score.length; i++) {
//     sum += score[i];
//   }
//   return sum / score.length;
// };

// let teamA = average([89, 120, 103]);
// let teamL = average([116, 94, 123]);
// let teamM = average([97, 134, 105]);

let teamA1 = 89;
let teamA2 = 120;
let teamA3 = 103;
let teamL1 = 116;
let teamL2 = 94;
let teamL3 = 123;
let teamM1 = 97;
let teamM2 = 134;
let teamM3 = 105;

let teamA = (89 + 120 + 103) / 3;
let teamL = (116 + 94 + 123) / 3;
let teamM = (97 + 134 + 105) / 3;

console.log(teamA, teamL, teamM);

if (teamA > teamL) {
  console.log(`Aleeza's team is a winner! Average score is ${teamA}`);
} else console.log(`Lis's team is a winner! Average score is ${teamL}.`);

if (teamA > teamL && teamA > teamM) {
  console.log(`Aleeza's team is a winner! Average score is ${teamA}`);
} else if (teamL > teamA && teamL > teamM) {
  console.log(`Lis's team is a winner! Average score is ${teamL}.`);
} else if (teamM > teamA && teamM > teamL) {
  console.log(`Mary's team is a winner! Average score is ${teamM}.`);
} else console.log(`All teams are draw`);
