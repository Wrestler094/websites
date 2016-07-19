// colinsjs.js

$(document).ready(function(){ 
	var a = document.getElementById("btn-386");
	function produceAlert(){
		alert('You clicked the button!');
	};

	a.addEventListener('click', produceAlert);

	$("#btn-388").one("click", firstClick);
		function firstClick() {
		    confirm( "You just clicked this for the first time!" );
		 		var i = 1;
		    // Now set up the new handler for subsequent clicks;
		    // omit this step if no further click responses are needed
		    $(this).click(function(){
		    	i += 1;
		    	confirm("You have clicked this before!  This is click #" + i + "."); 
		    });
		}












});