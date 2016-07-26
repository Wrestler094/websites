// rockpaperscissors.js

var playerScore = 0;
var computerScore = 0;
var matches = 0;
var playerChoice = "";
var player = "";
var e = document.getElementById("player-display");
var c = document.getElementById("computer-display");
var pf = document.getElementById("player-fist");
var cf = document.getElementById("computer-fist");
var d = document.getElementById("rps-explanation");
document.getElementById("player-score").innerHTML = playerScore;
document.getElementById("computer-score").innerHTML = computerScore;
document.getElementById("matches-num").innerHTML = matches;
var winsults = ["Wow, well done, you beat a fucking computer, you should feel real proud of yourself.", 
	"Don't let this win go to your head...you are playing Rock-Paper-Scissors on a computer...by yourself.", 
	"Well done!  You don't completely suck!", 
	"The computer probably let you win..."];

var lossults = ["Ha! YOU SUCK!",
	"Man, I bet you were up all night, working on that one!",
	"Some babies were dropped on their heads but you were clearly thrown at a wall.",
	"YOU LOST!  THE EARTH IS FULL GO HOME.",
	"Wow, you are absolutely lousy at this...it's a KID'S GAME!",
	"I'd love to insult you but now it's just getting sad"];

var tiesults = ["Eh, you got lucky",
	"Yay, a tie, that's sort of a big deal for you, huh?",
	"It's a tie, bitches!!",
	"You tied."]

var winFunction = function(){
	d.innerHTML = winsults[Math.floor(Math.random()*winsults.length)]
  playerScore += 1;
  matches += 1;
};

var lossFunction = function(){
	d.innerHTML = lossults[Math.floor(Math.random()*lossults.length)];
  computerScore += 1;
  matches += 1;
};

var tieFunction = function(){
	d.innerHTML = tiesults[Math.floor(Math.random()*tiesults.length)];
  matches += 1;
  playerScore += 0.5;
  computerScore += 0.5;
};

	$(".select").click(function(){
		
		pf.className = "animated-fist fa fa-hand-rock-o fa-4x";
		cf.className = "animated-fist fa fa-hand-rock-o fa-4x";
		playerChoice = $(this).attr("id");
		var fists = $(".animated-fist")
		var up = 300;
		var down = 200;
		fists.animate({top: '-=50px'},up);
		fists.animate({top: '+=100px'},down, "swing");
		fists.animate({top: '-=100px'},up);
		fists.animate({top: '+=100px'},down, "swing");
		fists.animate({top: '-=100px'},up);
		fists.animate({top: '+=100px'},down, "swing");
		fists.animate({top: '-=100px'},up);
		fists.animate({top: '+=50px'},down, "swing");

		//setTimeout seems to need the function(){ }; I can't just put in the function that I want to call
		setTimeout(function(){ playerSwitch() }, up*4+down*4);
	});


var playerSwitch = function() {
	switch (playerChoice) {
		case "rock":
			pf.className = "animated-fist fa fa-hand-rock-o fa-4x";
			// console.log("rock");
			break;
		case "paper":
			pf.className = "animated-fist fa fa-hand-paper-o fa-4x";
			// console.log("paper");
			break;
		case "scissors":
			pf.className = "animated-fist fa fa-hand-scissors-o fa-4x";
			// console.log("scissors");
	};
	computerPick();
}


var computerPick = function() {
  var computerChoice = Math.random();
  
  if (computerChoice < 0.34) {
    computerChoice = "rock";
    // var d = document.getElementById("computer-display");
    // d.className = "fa fa-hand-rock-o fa-4x";
    cf.className = "animated-fist fa fa-hand-rock-o fa-4x";    
  } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    // var d = document.getElementById("computer-display");
    // d.className = "fa fa-hand-paper-o fa-4x";
    cf.className = "animated-fist fa fa-hand-paper-o fa-4x"; 
  } else {
    computerChoice = "scissors";
    // var d = document.getElementById("computer-display");
    // d.className = "fa fa-hand-scissors-o fa-4x";
    cf.className = "animated-fist fa fa-hand-scissors-o fa-4x";
  } 
  compare(playerChoice,computerChoice)
}

var compare = function(choice1,choice2){
	// Comparison for a tie
  if (choice1 === choice2) {
  	tieFunction();
    // d.innerHTML = "It's a tie!  Try again!"
    // matches += 1;
    // playerScore += 0.5;
    // computerScore += 0.5;
  } 

  // Comparison for Player's Choice = Rock
	else if (choice1 === "rock") {
  	if (choice2 === "scissors") {
    // d.innerHTML = "You win!  Great job!";
    // d.innerHTML = winsults[Math.floor(Math.random()*winsults.length)]
    // playerScore += 1;
    // matches += 1;
    	winFunction();
  	} else {
    // d.innerHTML = "You lose...how pathetic!!"
    // computerScore += 1;
    // matches += 1;
    	lossFunction();
 	 	};
 	} 
  
  // Comparison for Player's Choice = Paper
	else if (choice1 === "paper") {
	  if (choice2 === "rock") {
	    // d.innerHTML = "You win!  Great job!"
	    // playerScore += 1;
	    // matches += 1;
	    winFunction();
	  } else {
	    // d.innerHTML = "You lose...how pathetic!!"
	    // computerScore += 1;
	    // matches += 1;
	    lossFunction();
  		};
  } 

  // Comparison for Player's Choice = Scissors
  else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      // d.innerHTML = "You win!  Great job!"
      // playerScore += 1;
      // matches += 1;
      winFunction();
    } else {
      // d.innerHTML = "You lose...how pathetic!!"
      // computerScore += 1;
      // matches += 1;
      lossFunction();
    };
  };
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("computer-score").innerHTML = computerScore;
  document.getElementById("matches-num").innerHTML = matches;
};







