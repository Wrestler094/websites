// cm_day4.js
$(document).ready(function () {

	var paint = "white"
	var words = ["Kapow!", "Bam!", "OW OW!!!", "Sweet!"];
	var kapow = "Bam!"

	$(".color").on("click", function () {
		paint = $(this).css('background-color');
	})

	$(".button").on("click", function () {
		kapow = words[Math.floor(Math.random()*words.length)];
	})
	
	
	$('.row').on('click', function () {
		$(this).css("background-color", paint );
		$(this).html(kapow);
		kapow = words[Math.floor(Math.random()*words.length)];
	});



});