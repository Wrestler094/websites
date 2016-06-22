// odin-calculatorcm2.js
$(document).ready(function(){
	var number = "";
	var operator = "";
	var firstnum = "";

	// Display numbers
	$(".num").click(function(){
		number += $(this).text();
		$("#display").text(number);
	});

	// Operators clicked
	$(".operator").click(function(){
		operator = $(this).text();
		firstnum = number;
		number = "";
	});

	// Let's do some math
	$("#equals").click(function(){
		var a = parseInt(firstnum);
		var b = parseInt(number);
		var result = 0;
		switch(operator){
			case "+":
				result = a + b;
				$("#display").text(result);
				break;
			case "-":
				result = a - b;
				$("#display").text(result);
				break;
			case "*":
				result = a * b;
				$("#display").text(result);
				break;
			case "/":
				result = a / b;
				$("#display").text(result);
				break;
		}
	});

	$("#clear").click(function(){
		number = "";
		firstnum = "";
		$("#display").text(0);
	})


	











});