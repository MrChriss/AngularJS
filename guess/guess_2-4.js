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
//make ~SHURE~ to get the right input :D
do {
    var chosenNum = prompt("Choose an integer between " + min + " and " + max);
    
        if ((chosenNum < min || chosenNum > max) && chosenNum != parseInt(chosenNum, 10)) {
            alert("You didn't choose an between the specified range AND it is not an integer!\nYou failed miserably!");            
        } else if (isNaN(chosenNum)) {
            alert(chosenNum + " is not a number!");
        } else if (chosenNum != parseInt(chosenNum, 10)) {
            alert(chosenNum + " is not an integer!");
        } else if (chosenNum < min || chosenNum > max) {
            alert("You didn't choose an integer between the specified range!\nTry again!");
        } else {
            if (chosenNum < randomNumStatt) {
                alert("Your number is smaller than the hidden number!");
            } else if (chosenNum > randomNumStatt) {
                alert("Your number is greater than the hidden number!");
            } 
        }
    
    tryy++;
    
} while (chosenNum != randomNumStatt);
   
alert("Congratz, you win! The hidden integer was " + randomNumStatt);
alert("You have tried " + tryy + (tryy === 1 ? " time!" : " times!"));
