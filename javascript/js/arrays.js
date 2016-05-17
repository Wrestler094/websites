// arrays.js
var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
   document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your favorite fruit? ");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}

var words = []

function funnyWord() {
	var word = prompt("Enter a word that you want see somewhere on this page: ");
	words.push(word);
}

function showWord() {
	var num = Math.floor(Math.random()*words.length)
	document.getElementById("funny_word").innerHTML = words[num];
}

// I want to show a word count and use a dictionary / hash