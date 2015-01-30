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
		type: 'diy',
		instructions: ["Error Script I need to make some day"]
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
"Determines if the last digit is 0 or 5",
"Hint: Use % (Modulo Operator)"
]
	},{
		name:'',
		type: 'diy',
		instructions: ["Make a rocket count up and shoot off the rocket when it hits 0",
"Extra: use time.sleep(1)"
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