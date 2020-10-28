//1
let aleezateam = 89+120+103
let lisTeam = 116+94+123

//a
let averageAleeza = aleezateam/3
console.log(averageAleeza);
let lisAverage = lisTeam/3
console.log(lisAverage);

//b-c
if(averageAleeza>lisAverage){
    console.log(`The winner is Aleeza's team with and average of ${averageAleeza}`);
}else if(averageAleeza<lisAverage){
    console.log(`The winner is Lis's team with and average of ${lisAverage}`);
}else{
    console.log('There is a tie');
}
//d-e
let marryTeam = 97+134+105
let marryAverage = marryTeam/3

if(averageAleeza>lisAverage && averageAleeza>marryAverage){
    console.log(`The winner is Aleeza's team with and average of ${averageAleeza}`);
}else if(lisAverage>averageAleeza && lisAverage>marryAverage){
    console.log(`The winner is Lis's team with and average of ${lisAverage}`);
}else if(marryAverage>averageAleeza && marryAverage>lisAverage){
    console.log(`The winner is Mary's team with and average of ${marryAverage}`);    
}else{
    console.log('There is a tie');
}