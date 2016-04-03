//convert input to integers, set radix 10
var max = parseInt(prompt("Chose the upper limit of the hidden integer"), 10);
var min = parseInt(prompt("Chose the lower limit of the hidden integer"), 10);
var tryySet = parseInt(prompt("Choose the number of guesses"), 10);

//generate ~pseudo~ random integers within the specified range
var randomNumStat = function randumNumStat(x, y)
{
    return Math.floor(Math.random() * (x - y + 1)) + y;
}

//set the generated integer to a fixed value
//initialize array for storing answers
//chosenNum is undefined so the loop starts, regardless of user input
var randomNumStatt = randomNumStat(max, min);
var tryy = 0;
var choices = [];    
var chosenNum = undefined;

//compare guesses to computer generated value
//make ~SHURE~ to get the right input :D
while (chosenNum != randomNumStatt) {
    
    chosenNum = prompt("Choose a whole number between " + min + " and " + max);
    choices.push(chosenNum);
    
//checking for correct input, giving feedback to user
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
    
//checking: WIN/LOSE    
    if (tryy === tryySet) {
        alert("You're out of luck!\nGame over!"); 
        alert("You tried " + tryy + (tryy === 1 ? " time!" : " times!"));
        alert("Your choices were: \n" + choices.join(", ") + ".");
        break;
    } else if (chosenNum === randomNumStatt) {
        alert("Congratz, you win! The hidden integer was " + randomNumStatt);
        alert("You have tried " + tryy + (tryy === 1 ? " time!" : " times!"));
        alert("Your choices were: \n" + choices.join(", ") + ".");
        break;
    }
}
