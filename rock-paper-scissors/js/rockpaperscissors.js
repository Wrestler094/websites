// rockpaperscissors.js
var playerScore = 0;
var computerScore = 0;
var matches = 0;
var playerChoice = ""
var player = ""
var computer = ""
document.getElementById("player-score").innerHTML = playerScore;
document.getElementById("computer-score").innerHTML = computerScore;
document.getElementById("matches-num").innerHTML = matches;


// This function is activated when a player clicks on one of the
var rockpaperscissors = function(item) {
	player = item;
	playerChoice = item.getAttribute("id");
	computerPick();
}

var computerPick = function() {
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
    var d = document.getElementById("computer-display");
    d.className += "fa fa-hand-rock-o fa-4x";

  } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    var d = document.getElementById("computer-display");
    d.className += "fa fa-hand-paper-o fa-4x";
  } else {
    computerChoice = "scissors";
    var d = document.getElementById("computer-display");
    d.className += "fa fa-hand-scissors-o fa-4x";
  } 
  compare(playerChoice,computerChoice)
}

var compare = function(choice1,choice2){
  if (choice1 === choice2) {
    var d = document.getElementById("rps-explanation")
    d.innerHTML = "It's a tie!  Try again!"
    matches += 1;
    playerScore += 0.5;
    computerScore += 0.5;
  } 

	else if (choice1 === "rock") {
  	if (choice2 === "scissors") {
    var d = document.getElementById("rps-explanation");
    d.innerHTML = "You win!  Great job!";
    playerScore += 1;
    matches += 1;
  	} else {
    var d = document.getElementById("rps-explanation")
    d.innerHTML = "You lose...how pathetic!!"
    computerScore += 1;
    matches += 1;
 	 	};
 	} 
  	
	else if (choice1 === "paper") {
	  if (choice2 === "rock") {
	    var d = document.getElementById("rps-explanation")
	    d.innerHTML = "You win!  Great job!"
	    playerScore += 1;
	    matches += 1;
	  } else {
	    var d = document.getElementById("rps-explanation")
	    d.innerHTML = "You lose...how pathetic!!"
	    computerScore += 1;
	    matches += 1;
  		};
  } 

  else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      var d = document.getElementById("rps-explanation")
      d.innerHTML = "You win!  Great job!"
      playerScore += 1;
      matches += 1;
    } else {
      var d = document.getElementById("rps-explanation")
      d.innerHTML = "You lose...how pathetic!!"
      computerScore += 1;
      matches += 1;
    };

  };
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("computer-score").innerHTML = computerScore;
  document.getElementById("matches-num").innerHTML = matches;
};


// var playAgain = function(){
//   if (playerChoice = "") {
//     alert("Waiting on you, slick...(make a fucking selection!)")
//   } else {
//     a = player.getAttribute("id");
//     d = document.getElementById(a);
//     d.style.backgroundColor = "";
//     d.style.color = ""
//     document.getElementById("rps-comp").className = "";
//     document.getElementById("rps-result-under").innerHTML = "";
//   }
// }


















// var rockpaperscissors = function(item) {
//   player = item;
//   playerChoice = item.getAttribute("id");
//   document.getElementById(playerChoice).style.backgroundColor = "black";
//   document.getElementById(playerChoice).style.color = "blue";
//   document.getElementById(playerChoice).style.borderRadius = "5px";

//   // Timeout before revealing computer's pick  
//   setTimeout(function(){computerPick()},500);
  
// }

// var computerPick = function() {
//   var computerChoice = Math.random();
//   if (computerChoice < 0.34) {
//     computerChoice = "rock";
//     var d = document.getElementById("rps-comp");
//     d.className += "fa fa-hand-rock-o fa-4x";

//   } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
//     var d = document.getElementById("rps-comp");
//     d.className += "fa fa-hand-paper-o fa-4x";
//   } else {
//     computerChoice = "scissors";
//     var d = document.getElementById("rps-comp");
//     d.className += "fa fa-hand-scissors-o fa-4x";
//   } 
//   compare(playerChoice,computerChoice)
// }

// var compare = function(choice1,choice2){
//   if (choice1 === choice2) {
//     var d = document.getElementById("rps-result-under")
//     d.innerHTML = "It's a tie!  Try again!"
//     matches += 1;
//     playerScore += 0.5;
//     computerScore += 0.5;
//   } else if (choice1 === "rock") {
//     if (choice2 === "scissors") {
//       var d = document.getElementById("rps-result-under");
//       d.innerHTML = "You win!  Great job!";
//       playerScore += 1;
//       matches += 1;
//     } else {
//       var d = document.getElementById("rps-result-under")
//       d.innerHTML = "You lose...how pathetic!!"
//       computerScore += 1;
//       matches += 1;
//     };

//   } else if (choice1 === "paper") {
//     if (choice2 === "rock") {
//       var d = document.getElementById("rps-result-under")
//       d.innerHTML = "You win!  Great job!"
//       playerScore += 1;
//       matches += 1;
//     } else {
//       var d = document.getElementById("rps-result-under")
//       d.innerHTML = "You lose...how pathetic!!"
//       computerScore += 1;
//       matches += 1;
//     };
//   } else if (choice1 === "scissors") {
//     if (choice2 === "paper") {
//       var d = document.getElementById("rps-result-under")
//       d.innerHTML = "You win!  Great job!"
//       playerScore += 1;
//       matches += 1;
//     } else {
//       var d = document.getElementById("rps-result-under")
//       d.innerHTML = "You lose...how pathetic!!"
//       computerScore += 1;
//       matches += 1;
//     };

//   };
//   document.getElementById("player-score").innerHTML = playerScore;
//   document.getElementById("computer-score").innerHTML = computerScore;
//   document.getElementById("matches-num").innerHTML = matches;

// };

