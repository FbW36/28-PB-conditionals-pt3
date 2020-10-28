//1a)
alezaAverage = (89 + 120 + 103) / 3;
lisAverage = (116 + 94 + 123) / 3;


//1b)
if(alezaAverage>lisAverage){
    console.log("Aleza is the winner with " + alezaAverage + "points");
}
else{
    console.log("Lis is the winner with " + lisAverage + " points");
}

//1c)
alezaAverage = (122 + 108 + 103) / 3;
lisAverage = (116 + 94 + 123) / 3;
//console.log(alezaAverage, lisAverage); 

if(alezaAverage>lisAverage){
    console.log("Aleza is the winner with " + alezaAverage + " points");
}
else if(alezaAverage==lisAverage){
    console.log("It's a draw");
}
else{
    console.log("Lis is the winner with " + lisAverage + " points");
}

//1d)
maryAverage = (97 + 134 + 105) / 3;
if(alezaAverage>lisAverage){
    console.log("Aleza is the winner with " + alezaAverage + " points");
}
else if(maryAverage>lisAverage || maryAverage>alezaAverage){
    console.log("Mary is the winner with " + maryAverage + " points");
}

else if(alezaAverage==lisAverage || maryAverage==lisAverage || alezaAverage==maryAverage){
    console.log("It's a draw");
}
else{
    console.log("Lis is the winner with " + lisAverage + " points");
}

