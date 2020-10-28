// 1
let aleeza = 89 + 120 + 103;
console.log("aleeza", aleeza);
let lis = 116 + 94 + 123;
console.log("lis", lis);

// 1a
let averageAleeza = aleeza / 3;
console.log("Average Aleeza's Team ==>", averageAleeza);
let averageLis = lis / 3;
console.log("Average Lis' Team ==>", averageLis);

// 1b
if (averageAleeza > averageLis) {
  console.log("winner after 3rd game is Aleeza's Team", averageAleeza);
} else if (averageAleeza < averageLis) {
  console.log("winner after 3rd game is Lis' Team", averageLis);
} else console.log("it is a draw");

// 1c
aleeza = aleeza + 132 + 145 + 122 + 136;
averageAleeza = aleeza / 7;
lis = lis + 56 + 67 + 98 + 92;
averageLis = lis / 7;
if (averageAleeza > averageLis) {
  console.log("winner after 7th game is Aleeza's Team", averageAleeza);
} else if (averageAleeza < averageLis) {
  console.log("winner after 7th game is Lis' Team", averageLis);
} else console.log("it is a draw");

// 1d
let mary = 97 + 134 + 105;
let averageMary = mary / 3;
console.log("averageMary ==>", averageMary);
console.log("averageAleeza ==>", averageAleeza);
console.log("averageLis ==>", averageLis);
console.log(
  "The winner is ==>",
  Math.max(averageAleeza, averageLis, averageMary)
);

// 1e
