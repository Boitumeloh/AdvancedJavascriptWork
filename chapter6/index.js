/************ ARROW FUNCTIONS************** */
// function doStuff(x){
//     console.log(x);
// };
// doStuff("Hello World!");

// let doArrowStuff = x =>console.log(x);
// doArrowStuff(" Great it works");

// let letsAddTwoNumbers = (x,y) => console.log(x+y);
// letsAddTwoNumbers(222, 555);

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

/************ SPREAD OPERATOR************** */

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
//  "powerful"];

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
//    }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);//5 + 9+6+7
//addFourNumbers(5, 9, 6, 7);

/************ REST PEREMETER************** */

// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
//    }
//    someFunction("hi", "there!", "How are you?");

/************Returning function values ************** */
// function addTwoNumbers(x, y) {
//     return x + y;
//    }
// let result = addTwoNumbers(4, 5);
// console.log(result);
// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//     let result = addTwoNumbers(i, 2*i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);

/************ Returning with arrow functions************** */
// let addTwoNumbers = (x, y) => x + y;
// let result = addTwoNumbers(12, 15);
// console.log(result);

// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
//    }

// console.log(addTwoNumbers(3,4));

/************ Variable scope in functions************** */

// function testAvailability(x) {
//     console.log("Available here:", x);
//    }
//    testAvailability("Hi!");
//    console.log("Not available here:", x);
// Available here: Hi!
// ReferenceError: x is not defined

// function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
//    }
// testAvailability();
// console.log("Not available here:", y);

//    Available here: Local variable!
//    ReferenceError: y is not defined

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
//    }
//    let z = testAvailability();
//    console.log("Outside the function:", z);
//    console.log("Not available here:", y);

//    Available here: I'll return
//    Outside the function: I'll return
//    ReferenceError: y is not defined

/************Immeddiately Invoked Function expressions************** */

// (function (){
//     console.log("IIFE");
// })();

// (()=>{
//     console.log("run right away");
// })();

/************Recursive functions************** */

// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//     getRecursive(--nr);
//     }
//    }
//    getRecursive(3);

// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//     logRecursive(nr - 1);
//     } else {
//     console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
//    }
//    logRecursive(3);

/************Nested functions************** */

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(2);

/************Anonymous functions************** */
// let functionVariable = function () {
//     console.log("Not so secret though.");
//    };

//    functionVariable();

/************Function callbacks************** */

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
//    }
// doFlexibleStuff(functionVariable);

// let youGotThis = function () {
//     console.log("You are doing really well, keep coding");
// };

// setTimeout(youGotThis, 1000);

//Exercise 6.1
// function addTwoNumbers(x,y){
//     result = x+y;
//     return result;
// };

// console.log(addTwoNumbers(3,4));

//Exercise 6.2
// let arr = ["computer", "vehicles", "cellphones"];

// function user_input(){
//     let user = prompt("guess: ");
//     let random = arr[Math.floor(Math.random()*(arr.length))];
//     console.log(user);
//     console.log(random);
// }

// user_input();

//Exercise 6.3
// let val1 = Number(prompt("1st: "));
// let val2 = Number(prompt("2nd: "));

// let opper = prompt('+ or -');
// function calc(valu1,opp, valu2){
//     let result;
//     if(opp == "+"){
//         result = valu1 + valu2;
//     }else if(opp == "-"){
//         result = valu1 - valu2;
//     }else{
//         result = valu1 + valu2;
//     }
//     console.log(result);
// }

// calc(val1,opper,val2);

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

/*****************Spread operator************/

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
//  "powerful"];

//  console.log(message);

// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//   console.log(x + y + z + a);
// }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);

/*****************Rest parameter************/

// function someFunction(param1, ...param2) {
//   console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

/*****************Returning function values************/
//let favoriteSubject = prompt("What is your favorite subject?");

// function addTwoNumbers(x, y) {
//   return x + y;
// }
// let result = addTwoNumbers(4, 5);
// console.log(result);

// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//   let result = addTwoNumbers(i, 2 * i);
//   resultsArr.push(result);
// }
// console.log(resultsArr);

//Exercise 6.4

// let val1 = Number(prompt("1st: "));
// let val2 = Number(prompt("2nd: "));

// let opper = prompt('+ or -');
// function calc(valu1,opp, valu2){
//     let result;
//     if(opp == "+"){
//         result = valu1 + valu2;
//     }else if(opp == "-"){
//         result = valu1 - valu2;
//     }else{
//         result = valu1 + valu2;
//     }
//     console.log(result);
// }

// calc(val1,opper,val2);

let arr = [];

for(let i = 0; i<10; i++){
    let valu1 = i*5;
    let valu2 = i*i;

    function calc(val1,val2){
        return val1 + val2;
    };
    let response = calc(valu1,valu2);
    arr.push(response);
}

console.log(arr);



/*****************Spread operator************/

/*****************Spread operator************/
