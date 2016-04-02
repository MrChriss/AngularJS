var hiddenNum = Math.floor(Math.random() * 100);
var tryy = 1;        

while (chosenNum != hiddenNum) {
    var chosenNum = prompt('choose a whole number between 0 and 100');  
    if (chosenNum < hiddenNum) {
        alert("Your number is smaller than the hidden number!");
    } else if (chosenNum > hiddenNum) {
        alert("Your number is greater than the hidden number!");
    }
    tryy++;
}
alert("Congratz, you win! The hidden number was " + hiddenNum);
alert("You have tried " + tryy + " times");
