// Create an array

var array = new Array();
console.log(array);
var array2 = ["Colin", "Matt", "Jack", "Charlie", "Andrew", "John", "Jay", "Steve"];
console.log(array2);
console.log(array2[1]);

// Cycle through the array with a For loop

for (var i = 0; i < array2.length; i++) {
  // console.log("Hello " + array2[i] + "!  The first letter of your name is: " + array2[i].charAt(0));
  // var letter = array2[i].charAt(0).toLowerCase();
  // console.log(letter);
  if (array2[i].charAt(0).toLowerCase() === "j") {
  	console.log("Goodbye " + array2[i]);
  }
  else {
  	console.log("Hello " + array2[i]);
  }
  
}

// Regular For loop (initializer, condition, incrementer)
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}

// I need to output "Hello [name]" if it starts with anything but "J"; if it starts with
// "J", I output "Goodbye [J-name]"




//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:




// Arrays
// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);


// // Short hand array creation
// var names = ["Yaakov", "John", "Joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// var names2 = ["Yaakov", "John", "Joe"];

// var myObj = {
//   name: "Yaakov",
//   course: "HTML/CSS/JS",
//   platform: "Courera"
// };
// for (var prop in myObj) {
//   console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }




// //Colin's version  of the material
// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS, & JS"};

// console.log(array);
// console.log(array[1]);
// array[2]("Colin");
// array[2](array[0]);
// console.log(array[3])
// console.log(array[3].course)

// Short hand array creation
// var names = ["Yaakov", "John", "Joe"];
// console.log(names);

// // for (var i = 0; i < names.length; i++) {
// //   console.log("Hello " + names[i]);
// // }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// console.log(names);


// var names2 = ["Yaakov", "John", "Joe"];

// // var myObj = {
// //   name: "Yaakov",
// //   course: "HTML/CSS/JS",
// //   platform: "Courera"
// // };
// // for (var prop in myObj) {
// //   console.log(prop + ": " + myObj[prop]);
// // }

// // for (var name in names2) {
// //   console.log("Hello " + names2[name]);
// // }

// // //names2.greeting became another property like name
// names2.greeting = "Hi!";

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }


// var counter = 0
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
// 	counter++
// }
// console.log(counter);