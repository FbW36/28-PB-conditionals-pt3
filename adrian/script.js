//1
let Aleeza1 = 89;
let Aleeza2 = 120;
let Aleeza3 = 103;

let Liz1 = 116;
let Liz2 = 94;
let Liz3 = 123;
//a)
let AleezaAve = (Aleeza1 + Aleeza2 + Aleeza3) / 3
let LizAve = (Liz1 + Liz2 + Liz3) / 3;

//b)
if(AleezaAve > LizAve)console.log(`The winner is Aleeza's team with and average of ${AleezaAve}`)
else if (AleezaAve < LizAve)console.log(`The winner is Liz's team with and average of ${LizAve}`);
else console.log("There is a tie");
//c)
//done
//d)
let Mary1 = 97;
let Mary2 = 134;
let Mary3 = 105;
let MaryAve = (Mary1 + Mary2 + Mary3) / 3;
if (AleezaAve > LizAve && AleezaAve > MaryAve)
  console.log(`The winner is Aleeza's team with and average of ${AleezaAve}`);
else if (AleezaAve === LizAve && AleezaAve > MaryAve)
  console.log(
    `The winners are Aleeza's and Liz's team with and average of ${AleezaAve}`
  );
else if (AleezaAve === LizAve && AleezaAve < MaryAve)
  console.log(`The winner is Mary's team with and average of ${MaryAve}`);
else if (LizAve > AleezaAve && LizAve > MaryAve)
  console.log(`The winner is Liz's team with and average of ${LizAve}`);
else if (LizAve === MaryAve && LizAve > AleezaAve)
  console.log(`The winners are Liz's and Mary's teams with and average of ${LizAve}`);
else if (MaryAve > LizAve && MaryAve > AleezaAve)
  console.log(`The winner is Mary's team with and average of ${MaryAve}`);
else if (MaryAve > LizAve && MaryAve === AleezaAve)
  console.log(
    `The winners are Mary's and Aleeza's team with and average of ${MaryAve}`
  );
