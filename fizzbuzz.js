var num = prompt("Choose a postive integer");

if(isNaN(num)) {
    console.log("You didn't choose an integer!");
} else if (num < 0) {
    console.log("Your integer isn't positive!");
}

for(var i = 1; i <= num ; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
}
