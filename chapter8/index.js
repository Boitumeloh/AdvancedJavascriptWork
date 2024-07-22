"use strict";

/*****************Global Methods******************** */

/*****************decodeUri() and encodeUri()******************** */
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

/*****************decodeUriComponent() and encodeUriComponent()******************** */

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

//Exercise 8.1
// let uri = "How's%20it%20going%3F";
// let decoded_uri = decodeURIComponent(uri);
// console.log(decoded_uri);
// let encoded_uri = encodeURIComponent(uri);
// console.log(encoded_uri);

// let web_uri = " s http://www.basescripts.com?=Hello World";
// let encodedwb_uri = encodeURIComponent(web_uri);
// console.log(encodedwb_uri);\

/*****************Making integers with parseInt()******************** */

// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

// let str_float = "7.9";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_int = "6";
// let float_int = parseFloat(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_binary = "0b101";
// console.log(str_binary);
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);
// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

/*****************Executing JavaScript with eval()******************** */

/*****************Array methods******************** */
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//   console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);
/*
arr.forEach((e, 1) => {console.log("Printing stuff:", element, "on array position:", index)})
*/

//Filtering an array

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, _index) {
//   return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

//Checking a condition for all elements
//console.log(arr.every(checkString));

//Replacing part of an array with another part of the array

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr);
// arr.copyWithin(0, 3, 5);
// console.log(arr);
//0: replacing grapefruit//replacing grapefruit and 4 because we are copying 2 elements
//3: copying from index 3 - 5.6 is the value
//5: the last index we want to copy from plus 1

//Mapping the values of an array
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

// let bbb = ["so", "bye", "bye", "love"];
// console.log(bbb.lastIndexOf("bye"));

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("hi"));

//Exercise 8.2

// let arr = [
//   "Laurence",
//   "Mike",
//   "Larry",
//   "Kim",
//   "Joanne",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
// ];
// let arr2 = arr.filter((value, index, array) => {
//   console.log(value, index, array.indexOf(value));
//   return array.indexOf(value) === index;
// });
// console.log(arr2);

//exercise 8.3
// const myArr = [1, 4, 5, 6];
// const myArr1 = myArr.map(function (ele) {
//   return ele * 2;
// });
// console.log(myArr1);
// const myArr2 = myArr.map((ele) => ele * 2);
// console.log(myArr2);


/*****************String methods******************** */

//Combining strings
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(s1);
// console.log(s2);
// console.log(result);

//Converting a string to an array

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

//Converting an array to a string

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);
// x = letters.join('-');
// console.log(x);


//Working with index and positions
//let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);
// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound);

//Search
// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);
// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re);

// let pos1 = poem.charAt(10);
// console.log(pos1);

//Creating substrings
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

//Replacing parts of the string
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(hi);
// console.log(new_hi);

//Uppercase and lowercase 
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

//The start and end of a string
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_start3 = encouragement.toLowerCase().startsWith("you");
// console.log(bool_start3);

// let bool_end = encouragement.endsWith("Something else");
// console.log(bool_end);


/*****************Number methods******************** */
// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

//Checking if something is finite
// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

//Checking if something is an integer
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

//Specifying a number of decimals
// let x = 1.23456;
// let newX = x.toFixed(2);
// console.log(x, newX);
// let x2 = 1.23456;
// let newX2 = x.toFixed(3);
// console.log(x, newX2);
// let x = 1.23456;
// let newX = x.toPrecision(2);
// // let x = 1.23456;
// // let newX = x.toPrecision(4);
// console.log(newX);


/*****************Math methods******************** */

//Max and Min
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// //Square root and raising to the power of
// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// //Turning decimals into integers
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

//Exponent and logarithm

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);


/*****************Date methods******************** */
//Creating dates

// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

//Methods to get and set the elements of a date
// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d);

// d.setMonth(9);
// console.log(d);

// d.setDate(10);
// console.log(d);

// d.setHours(10);
// console.log(d);

// d.setTime(1622889770682);
// console.log(d);

//Parsing dates

let d = new Date();

let d1 = Date.parse("June 5, 2021");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);

//Converting a date to a string

console.log(d.toDateString());

console.log(d.toLocaleDateString());

/*****************Date methods******************** */

/*****************Date methods******************** */

/*****************Date methods******************** */

/*****************Date methods******************** */