///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum(x, y,) {
  return x + y;
}



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(x, y, z) {
  return ((x + y + z)/3);
}


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var string;
function (getLength) {
  return getLength.string
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(x, y) {
  if (y > x) {
    console.log('True');
  } else {
    console.log('False');
}};


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greetName = function(name) {
  console.log("Hello" + ", " + "name" + "!");
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"



var exclamation = prompt("Type in an exclamation word.");
var adjective1 = prompt("Type an adjective.");
var classmate = prompt("Enter a classmate's name.");
var occupation = prompt("Type in an occupation.");
var adjective2 = prompt("I need one more adjective.");
var adverb = prompt("Provide an adverb.");
var holiday = prompt("Enter a holiday.")

// "Wow! Coding is harder than I thought.", said Trini. Personally, I think it's better than marketing where I was every Founder's Day.
var joinString = "exclamation" + "!  " + "Coding is" + "adjective1" + " than I thought, said" + "classmate" + "." + "  But I think it's" + "adjective2" + " than" + "occupation" + " , where I was" + " adverb" + " every" + " holiday" + ".";

function alert(madlib) {
    console.log(""exclamation" + "!  " + "Coding is" + "adjective1" + " than I thought, said" + "classmate" + "." + "  Personally, I think it is" + "adjective2" + " than" + " occupation" + ", where I was" + " adverb" + " every" + " holiday" + ".";");
}
