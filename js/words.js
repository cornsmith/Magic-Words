function setWordsets() {
	// Coloured sets of words
	return {
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
		],
		"indigo": [
			"will",
			"only",
			"make",
			"must",
			"what",
			"your",
			"were",
			"here",
			"come",
			"call",
			"then",
			"some"
		],
        "violet": [
            "about",
            "before",
            "could",
            "first",
            "little",
            "look",
            "more",
            "other",
            "right",
            "their",
            "there",
            "want",
            "where",
            "which"
        ],
		"pink": [
			"after",
			"am",
			"boy",
			"day",
			"eat",
			"five",
			"fly",
			"girl",
			"good",
			"help",
			"home",
			"jump",
			"play",
			"ran",
			"read",
			"saw",
			"sing",
			"sit",
			"think",
			"us"
		],
		"purple": [
			"again",
			"ask",
			"best",
			"bring",
			"far",
			"find",
			"give",
			"how",
			"kind",
			"left",
			"man",
			"mother",
			"own",
			"room",
			"say",
			"step",
			"these",
			"too",
			"walk",
			"wish"
		],
		"aqua": [
			"always",
			"away",
			"bird",
			"dog",
			"fast",
			"four",
			"going",
			"hand",
			"keep",
			"let",
			"many",
			"night",
			"people",
			"round",
			"school",
			"take",
			"thing",
			"tree",
			"water",
			"work"
		]
	};
}

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
	wordsets = setWordsets();
	words = wordsets[elem.id];
	shuffle(words);
	changeWord();
}

var wordsets = setWordsets();
toggleColour(document.getElementById("yellow"));