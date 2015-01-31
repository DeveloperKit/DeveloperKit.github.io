$(document).ready(function(){

	var diyList = [{
		name:'',
		type: 'diy',
		instructions: ["In console: enter type() for different types of values."]
	},{
		name: '',
		type: 'diy',
		instructions: ["Set your name to a variable called ‘name’",
"Create a new variable called ‘message’ in which you put in a message together with the previously created variable ‘name’",
"Print it",
"Change ‘name’",
"Reprint ‘message’",
]
	},{
		name: '',
		type: 'diy',
		instructions: ["The volume of a sphere with radius r is 4⁄3 πr³. What is the volume of a sphere with radius 5? Hint: 392.7 is wrong!"]
	},{
		name: '',
		type: 'diy',
		instructions: ["Import ‘math’",
"Find length of hypotenuse using math module",
"Find length of hypotenuse without using math module",
"Print last length as a string",
"Print the length of that string",
"Comments!",
"Run file"
]
	},{
		name: '',
		type: 'diy',
		instructions: ["Transfer statements from previous DIY to your functions using parameters; some  return and some don’t.",
"Call multiple functions with different arguments.",
"Do some arithmetic on your function calls – what do you notice?"
]
	},{
		name:'',
		type: 'challenge',
		instructions: ["Write a function called box_me",
		"Takes in a string",
		"Builds a box around it",
		"Box needs to adjust automatically according to the string's length"]
	},{
		name:'',
		type: 'diy',
		instructions: ["Write a function that takes in a random number",
"Determines if the last digit is 0 or 5 <br> Hint: Use % (Modulo Operator)"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a rocket count up and shoot off the rocket when it hits 0 <br> Extra: use time.sleep(1)"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a function called no_hugs that takes in a string",
"Each iteration of the loop, the string moves further away from hug to the other side of the room (50 spaces wide total)"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a function called to_words which takes in an int",
"Converts int to string",
"For each number in the string, convert to a word (language of choice)"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a list of strings called ‘bag’ with 5 food items",
"Make a function called add_item that takes a string called ‘food’ and a list of strings called ‘bag’",
"But wait! Be sure your bag is not too full. If there are 6 items or more, remove the last item and print the item.",
"Add the new item ‘food’",
"Sort the list",
"Return the new list"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a  function called remove_punc",
"Takes in a string",
"Returns without any punctuation"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a function called compact_tuples that takes in a list of tuples in the form: (string, int)",
"Merge all the strings",
"Add all the ints",
"Return the two as a new tuple"]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a function called e_count that takes in a string",
"Separate the string into a histogram of letters",
"Print out how many times ‘e’ is used if any"
]
	},{
		name:'',
		type: 'challenge',
		instructions: ["Make a function called pack_zoo_animals that takes in a list of tuples and returns a dictionary",
"Tuples are in the form of (string1, string2) where string1 = animal type (example: bird, cat, canine, etc), string2 = species (example: tiger, lion, falcon, etc.)",
"Returned dictionary must be of form { ‘string1’: { ‘string2’ : (number of string2) } }",
"Make a function called report_animals that takes in the above dictionary and prints it to the console in a readable form",
"Make a function called unpack_zoo_animals that takes in the above dictionary and converts back to a list of tuples"

]
	},{
		name:'',
		type: 'diy',
		instructions: ["Go to <a href=/files/darkoutside.zip>www.developerkit.co/files/darkoutside.zip</a>",
"Extract file and run the script",
"There is 1 syntax, 1 runtime, and 1 semantic error - debug the script!"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Write a script with a while loop that does not terminate until the user types in ‘exit’"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make two .txt files",
"Write something in one file",
"Make a script (or function) to copy content from one file to another"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a class called ‘Animal’",
"Make a class called ‘Cat’ which inherits Animal",
"‘Cat’ should have a color and a name",
"Add a __str__ method which tells you about the Cat",
"Add a method called ‘speak’ which has the cat say something to the console.",
"Make a cat object",
"Print information about the cat and have it speak"]
	},{
		name:'',
		type: 'challenge',
		instructions: [
"Card Game time!",
"Make four classes: ‘Game’, ‘Deck’, ‘Card’, and ‘Player’",
"A Card must: <br> a) Have a suit <br> b) Have a rank <br> c) Have a method to tell you what that suit and rank is",
"The Deck must: <br> a) Initially contain all cards <br> b) Have a method to add cards <br> c) Have a method to remove cards <br> d) Have a method to shuffle" ,
"The Player must: <br> a) Have a hand and a name <br> b) The hand must initially contain no cards <br> c) Have a method to add cards <br> d) Have a method to remove a random card and a given card <br> e) Have a method to see what cards are in the hand",
"The Game must: <br> a) Have one deck and up to 4 players (number decided upon initialization) <br> b) Have a method called deal which transfers x amount of cards from the deck to each player (you might want a parameter to specify what x is) <br> c) Have a way for the user to specify what x is <br> d) Print the player’s name and the number of cards distributed to each player to a file",
"Get creative. What can you do next?"

]
	},{
		name:'',
		type: 'diy',
		instructions: ["Download and install Pattern <br> git clone https://github.com/clips/pattern <br> cd pattern <br> python setup.py install",
"Check everything is installed correctly <br> >>> from pattern.web import *<br> >>> print URL('http://google.com').download()"]
	},{
		name:'',
		type: 'diy',
		instructions: ["You will be scraping an entire book from Project Gutenberg (legal)", 
"Scrape the following URL: <br><a href = http://www.gutenberg.org/cache/epub/1184/pg1184.txt> http://www.gutenberg.org/cache/epub/1184/pg1184.txt </a>",
"Make a histogram of word count <br> a) Hint: Save the text to a file, read one line at a time <br> b) To think about: How to deal with \n and grammar"]
	},{
		name:'',
		type: 'diy',
		instructions: ["Go to the following url: <br> <a href=http://www.clips.ua.ac.be/pages/pattern-web#twitter> http://www.clips.ua.ac.be/pages/pattern-web#twitter</a>" ,
"Search for ‘happiness’, stream ‘#netflix’, and check out the current trends on Twitter <br> Note: If you get a Unicode error - <br> Change tweet.text to tweet.text.encode(‘ascii’, ‘ignore’)"]
	},{
		name:'',
		type: 'challenge',
		instructions: ["It’s the End of the World! But you don’t know how the world is ending. Thankfully, people on Twitter might.",
		"Search for different disasters on Twitter related to the apocalypse (eg: #isis, #zombies, #samanddean, #mayanswereright)",
		"Track their frequency of occurrences within the past hour (or 4) <br>Hint: look at the tweet object, notice that is has a date timestamp which can be used to determine when the tweet was made",
		"Determine the most frequent",
		"Print your emergency warning to the console",
		"Panic."]
	}


	];

	/*
	,{
		name:'',
		type: 'diy',
		instructions: []
	}
	*/

	//Add the DIY and Challenges
	var diyCount = 1
		, chalCount = 1;
	for(var d in diyList){
		if(diyList[d].type == 'diy'){
			addDIY(diyCount, diyList[d]);
			diyCount++;
		} else if (diyList[d].type == 'challenge') {
			addDIY(chalCount, diyList[d]);
			chalCount++;
		}
	}

	//Hide everyting and only show div clicked on
	$('section div').hide();
	$('menu li').click(function(evt){
		//If click on menu item
		evt.preventDefault();
		var divID = $(this).attr('id') + '-section'; //Get relevant ID
		$('section div').hide();
		$('#'+divID).show();
	});

	function addDIY(diyNum, diy){
		//Adds in an element to the menu list and section
		var listID = (diy.type == 'diy')? 'diy'+ diyNum : 'chal'+ diyNum
			, divID = ((diy.type == 'diy')? 'diy'+ diyNum : 'chal'+ diyNum) + '-section'
			, title = '<h2>'+ ((diy.name.length == 0)? ((diy.type == 'diy')? 'DIY '+ diyNum : 'Challenge #'+ diyNum) : diy.name) +'</h2>'
			, instructions = '';
		//Make the list of instructions
		for(var i in diy.instructions){
			instructions += '<li>' + diy.instructions[i] + '</li>';
		}
		//Insert into the DOC
		$('menu ul').append('<li id="'+listID+'" class="">'+ title +'</li>');
		$('section').append('<div id="'+ divID +'">'+ title + '<ul>'+ instructions  +'</ul></div>');
	}

});
