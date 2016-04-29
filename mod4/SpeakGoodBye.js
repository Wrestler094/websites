// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function(window){
	var speakWord = "Good Bye";

	var byeSpeaker = {}
	byeSpeaker.speak = function speak(name) {
  	console.log(speakWord + " " + name);
	}

	// STEP 8: Rewrite the 'speak' function such that it is attached to the
	// byeSpeaker object instead of being a standalone function.
	// See Lecture 52, part 2
	window.byeSpeaker = byeSpeaker;
})(window);
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;



// Colin's Notes

// 1. SpeakGoodBye and SpeakHello are just the names of the files, nothing else.
//			-you are not calling the page/file name like with html (css/styles.css)
//			-you are calling the function that you create
// 2. I need to understand why I need to do window.byeSpeaker = byeSpeaker.  It 
//		looks like the Lecture is 52