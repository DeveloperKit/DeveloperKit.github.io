$(document).ready(function(){

	var diyList = [{
		name:'',
		type: 'diy',
		instructions: ["type(...) for different types"]
	},{
		name: '',
		instructions: ["Set your name to a variable called ‘name’",
		"Use that variable in a variable called ‘message’ and print it",
		"Change ‘name’",
		"Reprint ‘message’"]
	},{
		name: '',
		type: 'diy',
		instructions: ["Solve a math problem for x"]
	},{
		name: '',
		instructions: ["Import ‘math’",
		"Find length of hypotenuse",
		"Find length of triangle side using Math Module",
		"Find length of triangle side without using Math Module",
		"Print last length as a string",
		"Print the length of that string",
		"Comments!",
		"Run file"]
	},{
		name: '',
		type: 'diy',
		instructions: ["Transfer previous statements from Math DIY to functions with parameters - some  return , some don’t",
		"Run multiple instances with different arguments",
		"Do some arithmetic in your in your main function - notice that you can do arithmetic on functions that return a value, but you cannot make arithmetic on functions that do not return a value or just print it."]
	}];

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