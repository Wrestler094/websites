// odin-calculator.js
// Javascript functions for calculator
	function add(a,b){
		var sum = a + b;
		return sum;
	}

	function subtract(a,b){
		var diff = a - b;
		return diff;
	}

	function multiply(a,b){
		var product = a * b;
		return product;
	}

	function divide(a,b){
		var quotient = a / b;
		return quotient;
	}

	function buttonClick() {
		console.log(this.val());
	}

	// Clicking buttons on the calculator
$(document).ready(function(){
	//Logging out items by class
	$(".number").click(function(){
		console.log(this).val();
	})

	//Logging out each of the buttons by id
		$("#n1").click(function(){
			console.log(1);
		});
		$("#n2").click(function(){
			console.log(2);
		});
		$("#n3").click(function(){
			console.log(3);
		});
		$("#n4").click(function(){
			console.log(4);
		});
		$("#n5").click(function(){
			console.log(5);
		});
		$("#n6").click(function(){
			console.log(6);
		});
		$("#n7").click(function(){
			console.log(7);
		});
		$("#n8").click(function(){
			console.log(8);
		});
		$("#n9").click(function(){
			console.log(9);
		});
		$("#n0").click(function(){
			console.log(0);
		});
		$("#plus").click(function(){
			console.log("+");
		});
		$("#minus").click(function(){
			console.log("-");
		});
		$("#times").click(function(){
			console.log("*");
		});
		$("#divide").click(function(){
			console.log("/");
		});
	});