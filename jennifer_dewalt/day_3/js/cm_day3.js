// cm_day.js

function changeBackground () {

	rand = "#" + Math.random().toString(16).slice(2,8);
	document.getElementById("cm_background").style.backgroundColor = rand;
}