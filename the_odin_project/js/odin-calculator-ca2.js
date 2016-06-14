// odin-calculator-ca2.js
$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
		var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total"); //This is the display
    totaldiv.text("0");
    var numOfDecs = 0;
    
    // Click numbers
    $("#numbers a").not("#clear,#clearall").click(function(){
			number += $(this).text();
			totaldiv.text(number);
			testNumLength(number);
    });
    
    // Operators click
    $("#operators a, #side a, #sqrt").not("#equals,#decimal").click(function(){
      if ($(this).attr("id") === "sqrt") {
        operator = "sqrt";
        //Does this send it down to equals click?
        $("#equals").click();
        return; // this ends the function and does not continue doing the remaining parts of the function
      }
      operator = $(this).text();
      newnumber = number;
      number = "";
      totaldiv.text("0");
    });

    // clear and clearall click function
    $("#clear,#clearall").click(function(){
			number = "";
			totaldiv.text("0");
			if ($(this).attr("id") === "clearall") {
				newnumber = "";
			}
    });
    
    //Decimal click function
    $("#decimal").click(function(){
      for (i = 0; i < number.length; i++) {
          if (number.charAt(i) === ".") {
              numOfDecs += 1
          }
      }
      
      if (numOfDecs == 0) {
          number += ".";    
      }
      totaldiv.text(number);
      testNumLength(number);
    }); //End of Decimal Click function
    
    
    // Equals click function
    $("#equals").click(function(){
    	if (operator === "+"){
    		number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);
    	} else if (operator === "-"){
    		number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
    	} else if (operator === "÷"){
    		number = (parseFloat(newnumber, 10) / parseFloat(number,10)).toString(10);
    	} else if (operator === "×"){
    		number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
    	} else if (operator === "sqrt"){
    	    number = parseFloat(number,10);
    	    number = Math.sqrt(number);
    	    number = number.toString();
    	} else if (operator === "^"){
    	    number = parseFloat(number,10);
    	    newnumber = parseFloat(newnumber,10);
    	    number = Math.pow(newnumber,number);
    	    number = number.toString(10);
    	}
    	totaldiv.text(number);
    	testNumLength(number);
    	number = "";
    	newnumber = "";
    });
});