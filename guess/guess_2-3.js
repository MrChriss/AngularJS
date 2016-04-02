//convert input to integers, set radix 10 
var max = parseInt(prompt("Chose the upper limit of the hidden integer"), 10);
var min = parseInt(prompt("Chose the lower limit of the hidden integer"), 10);

//generate ~pseudo~ random integers within the specified range
var randomNumStat = function randumNumStat(x, y)
{
    return Math.floor(Math.random() * (x - y + 1)) + y;
}
//set the generated integer to a fixed value
var randomNumStatt = randomNumStat(max, min);
var tryy = 0;        

//compare guesses to computer generated value
do {
    var chosenNum = parseInt(prompt("Choose a whole number between " + min + " and " + max), 10);
    
    if (chosenNum < randomNumStatt) {
        alert("Your number is smaller than the hidden number!");
    } else if (chosenNum > randomNumStatt) {
        alert("Your number is greater than the hidden number!");
    }
    
    tryy++;
    
} while (chosenNum != randomNumStatt);
   
alert("Congratz, you win! The hidden integer was " + randomNumStatt);
alert("You have tried " + tryy + (tryy === 1 ? " time!" : " times!"));
