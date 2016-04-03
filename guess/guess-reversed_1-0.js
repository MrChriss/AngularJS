
alert("1. Pick a number and write it down on a piece of paper.\n2. Choose a range somewhere in wich the integer is located, positive or negative.\n3. I will guess the number.\n4. Just remember to give me the right feedback :)");

var max = parseInt(prompt("Chose the upper limit of the hidden integer"), 10);
var min = parseInt(prompt("Chose the lower limit of the hidden integer"), 10);

//set the algorythm
var compGuess = function compGuess(x, y) {    
        return Math.floor((x  +  y) / 2);
}
//store user hints, set initial computer descision, to start the loop
var guide = undefined;
var compDesc = compGuess(max, min);

//loop over computer choices, change variables for the algoryhm
while (compDesc) {
    compDesc = compGuess(max, min);
    alert(compDesc);
    
    var guide = prompt("Was the number: smaler, greater, or equal (<, >, =) than the hidden number?");
    switch (guide) {
        case "<":
            min = Math.floor((max  +  min) / 2);
            break;
        case ">":
            max = Math.floor((max + min) / 2);
            break;
        case "=":
            alert("Algorythm ftw!");
            compDesc = false;
            break;
        default:
            alert("input one of the three symbols please!");
            break;
    }
}
