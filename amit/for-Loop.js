// 1
// 1a
let Aleeza1 = 89;
let Aleeza2 = 120;
let Aleeza3 = 103;

let Lis1 = 116;
let Lis2 = 94;
let Lis3 = 123;

let AleezasAvarage = (Aleeza1 + Aleeza2 + Aleeza3) / 3;
let LisAvarage = (Lis1 + Lis2 + Lis3) / 3;

// 1b
if (AleezasAvarage > LisAvarage) {
  console.log("Aleez is the winner", AleezasAvarage);
} else if (LisAvarage > AleezasAvarage) {
  console.log("Lis is the winner:", LisAvarage);
} else {
  console.log("game is draw");
}

// 1c I should change the scores

// 1d
let Marry1 = 97;
let Marry2 = 134;
let Marry3 = 105;

let MaarrysAvarage = (Marry1 + Marry2 + Marry3) / 3;

if (MaarrysAvarage > AleezasAvarage && LisAvarage) {
  console.log("marry is winner:", MaarrysAvarage);
} else if (LisAvarage > MaarrysAvarage && AleezasAvarage) {
  console.log("Lis is winnner:", LisAvarage);
} else if (AleezasAvarage > MaarrysAvarage && LisAvarage) {
  console.log("ALlez is winner:", AleezasAvarage);
} else {
  console.log("game is Draw,Noone win");
}

// 1e I should  again change the scores,
