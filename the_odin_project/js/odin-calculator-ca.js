// odin-calculator-ca.js
$(document).ready(function(){

	// This function was given and is designed to test the length of the number that is being inputted

	var testNumLength = function(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length-9,9));
      if (number.length > 15) {
          number = "";
          totaldiv.text("Err");
      }
    } 
  };

  // 
	var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text("0");
    
   
  // This is what makes the numbers work.  This is what it does:
  	// 1. It selects all a's in the #numbers div except for #clear and #clear all
  	// 2. When any of the numbers are clicked (except for clear and clearall), three things are done
  	// 3. First, it appends the text of that a tag to the number string
  	// 4. Second, it sets the variable totaldiv equal to the new number variable
  	//			- as a reminder, #total is the display
  	// 5. Third, it calls the testNumLength function
  // in CA, +=this.html() works but not here
  $("#numbers a").not("#clear,#clearall").click(function(){
      number += $(this).html();
      totaldiv.text(number);
      testNumLength(number);
  });

  // This is what enables the operators except for the equals sign
  	// 1. It selects all a's in the #operators div except for #equals
  	// 2. The operator

  $("#operators a").not("#equals").click(function(){
     operator = $(this).text();
     newnumber = number;
     number = "";
     totaldiv.text("0");
	});

  // This is the clear and clearall button functionality
	$("#clear, #clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).id == "#clearall") {
            newnumber = "";
        }
  });

	// This is what makes the whole thing work
	// 1. I created a new variable result and then converted number and newnumber to integers
	// 2. I run a series of if else statements to go through each operator and perform the correct calculation
	// 3. I call testNumLength to make sure that aren't too many digits
	// 4. I convert result back into a string
	// 5. I show the result in the display and then reset both number and newnumber

	$("#equals").click(function(){
    var result = "";
    number = parseInt(number);
    newnumber = parseInt(newnumber);

    // #2 - 
    if (operator == "+") {
        result = number + newnumber;
    } else if (operator == "-") {
        result = newnumber - number;
    } else if (operator == "*") {
        result = newnumber * number;   
    } else {
        result = newnumber / number;
    }

    // #3
    testNumLength(result);

    // #4
    result = result.toString();

    // #5
    totaldiv.text(result);
    number = "";
    newnumber = "";
  });





});
