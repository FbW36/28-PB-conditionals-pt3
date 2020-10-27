//28-PB-conditionals-pt3
//Programming Basics: Conditionals Part 3

//Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

//Print your results to the console

//Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
const aleezaTeam = [97,134,1105]
const lisTeam = [97,134,1105]


//1a) Calculate the average score for each team.
const averageAleezaTeam = (aleezaTeam.reduce(function(a, b){return a + b})) / aleezaTeam.length;
console.log(`Average score Aleeza Team => ${averageAleezaTeam.toFixed()}`)
const averageLisTeam = (lisTeam.reduce(function(a, b){return a + b})) / lisTeam.length;
console.log(`Average score Lis Team => ${averageLisTeam.toFixed()}`)
//1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if(averageAleezaTeam > averageLisTeam){
    console.log(`The winer is Aleeza Team => ${averageAleezaTeam.toFixed()}`)
}else if(averageLisTeam > averageAleezaTeam){
    console.log(`The winer is Lis Team => ${averageLisTeam.toFixed()}`)
} else{
    console.log("Draw")
}
//1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

//check last one :D 

//1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

const maryTeam = [97,134,1105]
const averageMaryTeam = (maryTeam.reduce(function(a, b){return a + b})) / maryTeam.length;
console.log(`Average score Mary Team => ${averageMaryTeam.toFixed()}`)


if((averageAleezaTeam > averageLisTeam) || (averageAleezaTeam > averageMaryTeam)){
    console.log(`The winer is Aleeza Team => ${averageAleezaTeam.toFixed()}`)
}else if((averageLisTeam > averageAleezaTeam) || (averageLisTeam > averageMaryTeam)){
    console.log(`The winer is Lis Team => ${averageLisTeam.toFixed()}`)
 } else if((averageMaryTeam > averageAleezaTeam) || (averageMaryTeam > averageLisTeam)){
    console.log(`The winer is Mary Team => ${averageMaryTeam.toFixed()}`)
}else{
    console.log("draw ! ")
}
//1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
//Done it :D