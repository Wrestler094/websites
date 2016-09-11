// pinochle.js

// Notes

// 1. Make deck creation a function
// 2. Do Clubs-Diamonds-Spades-Hearts sort

$(document).ready(function(){
	var deck = []
	var denominations = ["9", "9", "J", "J", "Q", "Q", "K", "K", "10", "10", "A", "A"]
	var suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
	var suit_num = 0;
	var den_num = 0;
	var entity = "";
	var player1 = {}

	

	


	// Shuffle function from here: 
	// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	function shuffle(array) {
  	var currentIndex = array.length, temporaryValue, randomIndex;

  	// While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

  	return array;
	}

	function html_suit(suit) {
		switch (suit){
			case "Clubs":
				entity = "&clubs;"
				return entity;
				break;
			case "Diamonds":
				entity = "&diams;"
				return entity;
				break;
			case "Hearts":
				entity = "&hearts;"
				return entity;
				break;
			default:
				entity = "&spades;"
				return entity;
				break;
		}
	}



	// Deck Creation
	var deckCreation = function() {
		for (var x = 0; x < 48; x++) {
			deck[x] = {}
			
			if (x >= 12) {
				den_num = x - Math.floor(x/12)*12
			} else {
				den_num = x
			}

			// 0 - 11: Clubs, 12 - 23: Diamonds, 24 - 35: Hearts, 36 - 47: Spades

			if (x < 12) {
				suit_num = 0
			} else if (x < 24) {
				suit_num = 1
			} else if (x < 36) {
				suit_num = 2
			} else {
				suit_num = 3
			}


			deck[x].suit = suits[suit_num]
			deck[x].denomination = denominations[den_num]
		
		}
	}

	// var dealHands = function(){
	// 	shuffle(deck);
		
	// 	for (var i = 0; i < 49; i++){
	// 		if (i < 12) {
	// 			switch (deck[i].suit){
	// 				case "Clubs":
	// 					player1.insert(0,deck[i])
	// 					console.log(player1)
	// 					break;
	// 				default:
	// 					player1[0]
	// 			}

				
	// 		}

	// 	}
	// }
	
	deckCreation();
	// dealHands();
	
	$("#abc1").click(function(){
		shuffle(deck)
		$("#abc1").text(deck[0].suit)
	});

	$("#generate").click(function(){
		console.log("Hello")
		shuffle(deck)
		

		
		for (var i = 1; i < 49; i++){
			if (i < 13) {
				
				var suit_id = "#p1s" + i
				var denom_id = "#p1d" + i
				var c = i-1
				// $(suit_id).text(deck[c].suit)
				$(suit_id).html(html_suit(deck[c].suit))
				$(denom_id).text(deck[c].denomination)
				$(suit_id).css("color", "black")
				if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
					$(suit_id).css("color", "red")
				}

			} else if (i < 25) {
				var a = i - 12
				var suit_id = "#p2s" + a
				var denom_id = "#p2d" + a
				var c = i-1
				$(suit_id).html(html_suit(deck[c].suit))
				$(denom_id).text(deck[c].denomination)
				$(suit_id).css("color", "black")
				if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
					$(suit_id).css("color", "red")
				}
			} else if (i < 37) {
				var a = i - 24
				var suit_id = "#p3s" + a
				var denom_id = "#p3d" + a
				var c = i-1
				$(suit_id).html(html_suit(deck[c].suit))
				$(denom_id).text(deck[c].denomination)
				$(suit_id).css("color", "black")
				if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
					$(suit_id).css("color", "red")
				}
			} else {
				var a = i - 36
				var suit_id = "#p4s" + a
				var denom_id = "#p4d" + a
				var c = i-1
				$(suit_id).html(html_suit(deck[c].suit))
				$(denom_id).text(deck[c].denomination)
				$(suit_id).css("color", "black")
				if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
					$(suit_id).css("color", "red")
				}
			}
			
		}

	});




});
