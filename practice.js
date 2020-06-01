function lvl1exercise1 () {
  // Declare a variable without instantiating it and return it!
var aVariable;
return aVariable
};
lvl1exercise1 ();

function lvl1exercise2 () {
  // Declare and instantiate a number and return it
var aNumber = 5;
return aNumber;
}

lvl1exercise2 ();

function lvl1exercise3 () {
    // Declare and instantiate a floating point number that is not a whole number and return it
var aFloat = 1.1;
return aFloat;
}

lvl1exercise3 ();

function lvl1exercise4 () {
  // Declare and instantiate a string "Hello World!" and return it
var string = "Hello, World!";
return string;
}

lvl1exercise4 ();

function lvl1exercise5 () {
// Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
var myArray = ["Hello World!",4];
return myArray;
}

lvl1exercise5 ();

function lvl1exercise6 () {
// Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
var myObject = {
  key1 : "Hello World!",
  key2 : 4}
  return myObject;
}

lvl1exercise6 ();

function lvl1exercise7 () {
// Declare and instantiate a boolean value 'false' and return it
var myBoolean=false;
return myBoolean;
}

lvl1exercise7 (); 

//..................................................................


function lvl2exercise1 (num1, num2) {
// Return the sum of num1 and num2
return num1 + num2;
}

lvl2exercise1 (3, 4);

function lvl2exercise2 (num1, num2) {
// Return the difference of num1 and num2
return num1-num2;
}

lvl2exercise2 (3, 4)

function lvl2exercise3 (num1, num2) {
// Return the multiplication of num1 and num 2
return num1 * num2;
}

lvl2exercise3 (3, 4);

function lvl2exercise4 (num1, num2) {
// Return the division of num1 and num2
return num1/num2;
}

lvl2exercise4 (3, 4);

function lvl2exercise5 (num1) {
// Add 2 to num1 using += and return it
return num1 += 2;
}

lvl2exercise5 (3);

//..................................................................


function lvl3exercise1 () {
  // Create a "hello" and a "world", return the concatenation of the two
return  "hello" + "world";
}

lvl3exercise1 ();

function lvl3exercise2 () {
  // Create a "hello" and a 12, return the concatenation of the two
  return  "hello" + 12;
}

lvl3exercise2 ();

function lvl3exercise3 () {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
var myTwelve = 12;
return myTwelve + "okay";
}

lvl3exercise3 ();

function lvl3exercise4 () {
  // Create a "hello world!" string. Return the length of the string
var helloWorld = "hello world!";
return helloWorld.length;
}

lvl3exercise4 ();

function lvl3exercise5 () {
  // Create a "hello world!" string. Return the index of the word "world".
var helloWorld = "hello world!";
return helloWorld.indexOf("world");
}

lvl3exercise5 ();

//..................................................................


function lvl4exercise1 () {
  // Return the boolean value "true"
return true;
}

lvl4exercise1 ();

function lvl4exercise2 () {
  // Return the boolean value "false"
return false;
}

lvl4exercise2 ();

function lvl4exercise3 (bool) {
  // Return the opposite of the input boolean value
  return !bool;
}

lvl4exercise3 (true);

function lvl4exercise4 (bool1, bool2) {
  // Return the logical "and" of the input boolean values
  return bool1 && bool2;
}

lvl4exercise4 (false, false);

function lvl4exercise5 (bool1, bool2) {
  // Return the logical "or" of the input boolean values
  return bool1 || bool2;
}

lvl4exercise5 (true, false);

function lvl4exercise6 (bool1, bool2) {
  // Return the logical "equivalence" of the input boolean values
  return bool1 == bool2;
}

lvl4exercise6 (true, false);


//..................................................................

function lvl5exercise1 () {
  // Push the string "hello" into the array and return it.
  var arr = [1, 'adam'];
  arr.push ("hello");
  return arr;
}
lvl5exercise1 ();

function lvl5exercise2 () {
  // Remove the last element from the array and return it
  var arr = [1, 'adam'];
  arr.pop();
  return arr;
}

lvl5exercise2 ();

function lvl5exercise3 () {
  // Return the length of the array
  var arr = [1, 'adam'];
  return arr.length; 
}

lvl5exercise3 ();

function lvl5exercise4 () {
  // Return the index of "adam" in the array
  var arr = [1, 'adam']
  return arr.indexOf("adam");
}

lvl5exercise4 ();



//..................................................................


function lvl6exercise1 (num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  if (num = 1) {
    return 'hello';
  }
  else if (num = 2) {
    return 'world';
  }
  else {
    return 'bye';
  }
}

lvl6exercise1 (1);

function lvl6exercise2 () {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = []
  for (let i = 0; i < 10; i++) {
    arr.push('hello');
  }
    return arr;
  }

lvl6exercise2 ();

function lvl6exercise3 () {
  // Empty this array using a while loop and return it
  var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
  for (let i = 10; i >  0; i--) {
    arr.pop();
  }
    return arr;
  }

lvl6exercise3 ();

//..................................................................

// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(num,str) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    var str
    arr.push(str);
  }
  return arr;
}

finalFunction(5,'hotdogs');
