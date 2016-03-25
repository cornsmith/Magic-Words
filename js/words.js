var wordsets = {
	"yellow": [
		"a   ",
		"and ",
		"be  ",
		"I   ",
		"in  ",
		"is  ",
		"it  ",
		"of  ",
		"that",
		"the ",
		"to  ",
		"was "
	],
	"blue": [
		"an",
		"by",
		"do",
		"go",
		"if",
		"me",
		"my",
		"no",
		"or",
		"up"
	],
	"red": [
		"all ",
		"are ",
		"as  ",
		"at  ",
		"but ",
		"for ",
		"had ",
		"have",
		"he  ",
		"her ",
		"his ",
		"not ",
		"on  ",
		"one ",
		"said",
		"so  ",
		"they",
		"we  ",
		"with",
		"you "
	],
	"green": [
		"big",
		"can",
		"did",
		"get",
		"has",
		"him",
		"new",
		"now",
		"off",
		"old",
		"our",
		"out",
		"see",
		"she",
		"two",
		"who"
	],
	"orange": [
		"back",
		"been",
		"came",
		"down",
		"from",
		"into",
		"just",
		"like",
		"made",
		"much",
		"over",
		"them",
		"this",
		"well",
		"went",
		"when"
	]
};

function shuffle(array) {
	var counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
			// Pick a random index
			var index = Math.floor(Math.random() * counter);

			// Decrease counter by 1
			counter--;

			// And swap the last element with it
			var temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
	}

	return array;
}

function changeWord() {
	// Pick random word
	//var word = words[Math.floor(Math.random() * words.length)];

	// Get and pop last word
	var word = words.pop();

	// Smiley if finished
	if (word) {
		document.getElementById("word").innerHTML = word;
	} else {
		document.getElementById("word").innerHTML = "&#9786;";
	};
}

function toggleColour(elem) {
	// Get the buttons
	var x = document.getElementsByClassName("square");

	// Highlight active button
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.borderColor = "white";
	}
	elem.style.borderColor = "black";

	// Initialise wordset
	words = wordsets[elem.id];
	shuffle(words);
	changeWord();
}

var words = wordsets["yellow"];
document.getElementById("yellow").style.borderColor = "black";
shuffle(words);
changeWord();