// test.js
var array = [15,24,12];

for (var i = 0; i < array.length; i++) {
	console.log(array[i]);
}
	
	var months = 4;
  var woman = 100 * Math.pow(.85,months);
  console.log(woman);

function button1() {
	window.alert('This is an alert!')
	window.confirm('Do you want to confirm some shit?')
}

console.log("The following is my work with objects: ")
var colin = {};
colin.computer = {
	name: "MacBook Air",
	memory: "128GB",
	RAM: "2GHz"
};
colin.family = {
	mother: "Mary",
	father: "Terry",
	brother: "Matt"
};
colin.name = "Colin McNamara";
console.log("This is just a log of the 'colin' object:")
console.log(colin);

console.log("This is a for/in loop.  The variable 'key' is created to simply print whatever the key in the object is as well \
	as the contents of the inner objects")
for (var key in colin){
	console.log(key);
	console.log(colin[key]);
}

console.log("The following is the same thing but in a list function.")
var list = function(object){
	for (var key in object){
		console.log(key);
		console.log(object[key]);
	}
}
list(colin);


// var text = "Dog Cat Dog Cat Dog Cat Colin";
// var myName = "Colin";
// var hits = [];

// for (var i = 0; i < text.length; i++) {
// 	if(text[i] === myName[0]) {
// 		for (j = i; j - i < 5; j++) {
// 			console.log("This is j:" + j + text[j] + " ...and this is i: " + i);
// 		}
// 	}
	
// }


// for (var i = 0; i < text.length; i++) {
//     if (text[i] === myName[0]) {
//         for (var j = i; j - i < i + myName.length; j++) {
//             hits.push(text[j]);
//         }
        
//     };
// };

// if (hits.length === 0) {
//     console.log("Your name wasn't found");
// } else {
//     console.log(hits);
// };