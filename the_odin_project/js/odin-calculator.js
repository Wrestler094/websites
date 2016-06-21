// odin-calculator.js
// Javascript functions for calculator
var display_num = "";
var first_num = "";
var second_num = "";
var operator = "";


function add(a,b){
	var sum = a + b;
	return sum;
};

function subtract(a,b){
	var diff = a - b;
	return diff;
};

function multiply(a,b){
	var product = a * b;
	return product;
};

function divide(a,b){
	var quotient = a / b;
	return quotient;
};

function click1(){
	display_num += "1";
	document.getElementById("display").innerHTML = display_num;
};
function click2(){
	display_num += "2";
	document.getElementById("display").innerHTML = display_num;
};
function click3(){
	display_num += "3";
	document.getElementById("display").innerHTML = display_num;
};
function click4(){
	display_num += "4";
	document.getElementById("display").innerHTML = display_num;
};
function click5(){
	display_num += "5";
	document.getElementById("display").innerHTML = display_num;
};
function click6(){
	display_num += "6";
	document.getElementById("display").innerHTML = display_num;
};
function click7(){
	display_num += "7";
	document.getElementById("display").innerHTML = display_num;
};
function click8(){
	display_num += "8";
	document.getElementById("display").innerHTML = display_num;
};
function click9(){
	display_num += "9";
	document.getElementById("display").innerHTML = display_num;
};
function click0(){
	display_num += "0";
	document.getElementById("display").innerHTML = display_num;
};

function clickPlus(){
	operator = "+"
	first_num = parseFloat(display_num,10);
	display_num = "";
	// document.getElementById("display").innerHTML = display_num;
}

function clickMinus(){
	operator = "-"
	first_num = parseFloat(display_num,10);
	display_num = "";
	// document.getElementById("display").innerHTML = display_num;
}

function clickMultiply(){
	operator = "&times;"
	first_num = parseFloat(display_num,10);
	display_num = "";
	// document.getElementById("display").innerHTML = display_num;
}

function clickDivide(){
	operator = "&divide;"
	first_num = parseFloat(display_num,10);
	display_num = "";
	// document.getElementById("display").innerHTML = display_num;
};

function clickEquals(){
	second_num = parseFloat(display_num,10);
	var result = 0;
	switch(operator){
		case "+":
			result = add(first_num,second_num);
			document.getElementById("display").innerHTML = result;
			break;
		case "-":
			result = subtract(first_num,second_num);
			document.getElementById("display").innerHTML = result;
			break;
		case "&times;":
			result = multiply(first_num,second_num);
			if (result > 999999999) {
				result = result.toExponential();
			}
			result = result.toString();
			document.getElementById("display").innerHTML = result.substring(0,10);
			break;
		case "&divide;":
			if (second_num === 0) {
				document.getElementById("display").innerHTML = "NaN"
			} else {
				result = divide(first_num,second_num);
				result = result.toString();
				document.getElementById("display").innerHTML = result.substring(0,10);
			}
			break;
	};
	display_num = ""
	first_num = ""
	second_num = ""
};

function clickClear(){
	display_num = "";
	first_num = "";
	second_num = "";
	var empty = ""
	document.getElementById("display").innerHTML = empty;
};










	// Clicking buttons on the calculator
// $(document).ready(function(){
	
// 	$(".number").click(function(){
// 		console.log(this).val();
// 	})

	
// 		$("#n1").click(function(){
// 			console.log(1);
// 		});
// 		$("#n2").click(function(){
// 			console.log(2);
// 		});
// 		$("#n3").click(function(){
// 			console.log(3);
// 		});
// 		$("#n4").click(function(){
// 			console.log(4);
// 		});
// 		$("#n5").click(function(){
// 			console.log(5);
// 		});
// 		$("#n6").click(function(){
// 			console.log(6);
// 		});
// 		$("#n7").click(function(){
// 			console.log(7);
// 		});
// 		$("#n8").click(function(){
// 			console.log(8);
// 		});
// 		$("#n9").click(function(){
// 			console.log(9);
// 		});
// 		$("#n0").click(function(){
// 			console.log(0);
// 		});
// 		$("#plus").click(function(){
// 			console.log("+");
// 		});
// 		$("#minus").click(function(){
// 			console.log("-");
// 		});
// 		$("#times").click(function(){
// 			console.log("*");
// 		});
// 		$("#divide").click(function(){
// 			console.log("/");
// 		});
// 	});