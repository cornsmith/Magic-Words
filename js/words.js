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
	]
};

function changeWord() {
		var word = words[Math.floor(Math.random() * words.length)];
		document.getElementById("word").innerHTML = word;
		//document.getElementById("word").style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
	}

	function toggleColour(elem) {
		var x = document.getElementsByClassName("square");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.borderColor = "white";
		}
		elem.style.borderColor = "black";
		words = wordsets[elem.id];
		changeWord();
	}

var words = wordsets["yellow"];
document.getElementById("yellow").style.borderColor = "black";
changeWord()