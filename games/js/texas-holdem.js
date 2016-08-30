// texas-holdem.js

$(document).ready(function(){
	var deck = []
	var denominations = ["2", "3", "4", "5", "6", "7", "8", "9","10", "J","Q","K", "A"]
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
	// end of shuffle function

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
	// end of html_suit function





	// Deck Creation
	var deckCreation = function() {
		for (var x = 0; x < 52; x++) {
			deck[x] = {}
			
			if (x >= 13) {
				den_num = x - Math.floor(x/13)*13
			} else {
				den_num = x
			}

			// 0 - 11: Clubs, 12 - 23: Diamonds, 24 - 35: Hearts, 36 - 47: Spades

			if (x < 13) {
				suit_num = 0
			} else if (x < 26) {
				suit_num = 1
			} else if (x < 39) {
				suit_num = 2
			} else {
				suit_num = 3
			}


			deck[x].suit = suits[suit_num]
			deck[x].denomination = denominations[den_num]
		
		}
	} 
	
	// ******* END OF DECK CREATION *********

	
	
	deckCreation();

	var deal = function(id,count) {
		$(id).html("");
		$(id).css("color", "black")
		$(id).append(deck[count].denomination);
		$(id).append(html_suit(deck[count].suit));
		if (deck[count].suit == "Hearts" || deck[count].suit == "Diamonds"){
			$(id).css("color", "red");
			// $(id).css("border", "black")
		}
		$(id).css("border-color", "black")

	}
	

	$("#generate").click(function(){
		console.log("Hello");
		shuffle(deck);
		

		deal("#p1c1",0)
		deal("#p1c2",1)
		deal("#p2c1",2)
		deal("#p2c2",3)
		deal("#p3c1",4)
		deal("#p3c2",5)
		deal("#p4c1",6)
		deal("#p4c2",7)
		deal("#p5c1",8)
		deal("#p5c2",9)
		deal("#p6c1",10)
		deal("#p6c2",11)
		deal("#p7c1",12)
		deal("#p7c2",13)
		deal("#p8c1",14)
		deal("#p8c2",15)
		

	}); 

	// END OF GENERATE CLICK

	$("#flop").click(function(){
		deal("#tablec1",16);
		deal("#tablec2",17);
		deal("#tablec3",18);
	});
	// END OF FLOP

	$("#turn").click(function(){
		deal("#tablec4",19);
	});
	// END OF TURN

	$("#river").click(function(){
		deal("#tablec5",20);
	});
	// END OF RIVER

});

// ****** END OF DOCUMENT READY **********


		

		// pinochle
		// for (var i = 1; i < 49; i++){
		// 	if (i < 13) {
				
		// 		var suit_id = "#p1s" + i
		// 		var denom_id = "#p1d" + i
		// 		var c = i-1
		// 		// $(suit_id).text(deck[c].suit)
		// 		$(suit_id).html(html_suit(deck[c].suit))
		// 		$(denom_id).text(deck[c].denomination)
		// 		$(suit_id).css("color", "black")
		// 		if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
		// 			$(suit_id).css("color", "red")
		// 		}

		// 	} else if (i < 25) {
		// 		var a = i - 12
		// 		var suit_id = "#p2s" + a
		// 		var denom_id = "#p2d" + a
		// 		var c = i-1
		// 		$(suit_id).html(html_suit(deck[c].suit))
		// 		$(denom_id).text(deck[c].denomination)
		// 		$(suit_id).css("color", "black")
		// 		if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
		// 			$(suit_id).css("color", "red")
		// 		}
		// 	} else if (i < 37) {
		// 		var a = i - 24
		// 		var suit_id = "#p3s" + a
		// 		var denom_id = "#p3d" + a
		// 		var c = i-1
		// 		$(suit_id).html(html_suit(deck[c].suit))
		// 		$(denom_id).text(deck[c].denomination)
		// 		$(suit_id).css("color", "black")
		// 		if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
		// 			$(suit_id).css("color", "red")
		// 		}
		// 	} else {
		// 		var a = i - 36
		// 		var suit_id = "#p4s" + a
		// 		var denom_id = "#p4d" + a
		// 		var c = i-1
		// 		$(suit_id).html(html_suit(deck[c].suit))
		// 		$(denom_id).text(deck[c].denomination)
		// 		$(suit_id).css("color", "black")
		// 		if (deck[c].suit == "Hearts" || deck[c].suit == "Diamonds") {
		// 			$(suit_id).css("color", "red")
		// 		}
		// 	}