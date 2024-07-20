/**************While Loops************* */
// let i = 0;
// while (i < 10){
//     console.log(i);
//     i++;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;

// fibonacciArray = [];

// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
// }

// console.log(fibonacciArray);

//Exercise 5.1
// let max=5

// let random = Math.floor(Math.random()*(max+1));

// console.log(random);

// let guess_state = false;

// while(!guess_state){
//     let guess = Number(prompt("Enter a number between 1-5: "));
//     if (guess == random){
//         guess_state = true;
//         alert("thats the correct guess");
//         break;
//     }else if (guess > random){

//         alert("You are above the correct number");
//         break;
//     }else{
//         alert("You are below the correct number");
//         break;
//     }
// }

/**************Do While Loops************* */
// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));
// console.log(number);

//Exercise 5.2

// let counter = 0;

// let step = 1 ;
// do{
//     counter +=step;
//     console.log(counter);
// } while((counter>0  && counter < 100))

/**************For Loops************* */
// let arr = [];
// for (let i = 0; i<100;i = i+2){
//     arr.push(i);
// }
// console.log(arr);

//Exercise 5.3
// let arr = [];
// for(let i=0; i<10;i++){
//     let stat = i%2? true:false;
//     let obj = {
//         name: `Lesson ${i}`,
//         status : stat
//     }
//    arr.push(obj);

// }
// console.log(arr);
/************Nested Loops************* */
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }
// console.table(arrOfArrays);

//Exercise5.4

// let myTable = [];
// let rows = 5 ;
// let colomn = 5;
// let counter = 0;
// for(let i=0; i< rows; i++){
//     let tempTable = [];
//     for(let j = 0; j< colomn; j++){
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);

/**************Loops and arrays************* */
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("M")) {
//     delete names[i];
//     continue;
//   }
//   names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names.push(" Boitumelo");
// }
// console.log(names);

//Exercise 5.5

// let grid = [];
// let cells = 64;
// let counter = 0;
// let rows;
// for(let i=0; i<cells+1; i++){
//     if(counter%8 == 0){
//         if(rows != undefined){
//            grid.push(rows);
//         }
//         rows = [];

//         //delete rows[i];
//     }
//     counter++;
//     let temp = counter;
//     rows.push(temp);
//     // if(temp == cells){
//     //     grid.push(rows);
//     // };
// }
// console.table(grid);

/**************FOR OF Loops************* */
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names) {
//   console.log(name);
// }

//Exercise 5.6

// let empty = [];

// for(let i=0; i<10;i++) {
//     empty.push(i+1);

// }
// console.log(empty);

// for(let j; j<empty.length;j++){
//     console.log(empty[i]);
// }
// for(let val of empty){
//     console.log(val);
// }

/**************Loops and objects : for in loop************* */
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// for (let prop in car) {
//   console.log(car[prop]);
// }
// for (let prop in car) {
//   console.log(prop);
// }

//Exercise 5.7

// let obj ={
//     item1 : "Computer ",
//     item2: "Cellphone",
//     item3: "Vehicle"
// }

// for(prop in obj){
//     console.log(prop, " : ", obj[prop]);
// }
// let arr = [{item1 : "Computer "}, {item2: "Cellphone"},{item3: "Vehicle"}];

// for(let i = 0; i<arr.length; i++){
//     for(val in arr[i]){
//         console.log(arr[i][val]);
//     }
// }

/**************Looping over objects by converting to an
array************* */

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };

// // let arrKeys = Object.keys(car);
// // console.log(arrKeys);

// for (let key of Object.values(car)) {
//   console.log(key);
// }

// let arrKeys = Object.keys(car);
// for (let i = 0; i < arrKeys.length; i++) {
//   console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }
// let arrEntries = Object.entries(car);
// console.log(arrEntries);

// for (const [key, value] of Object.entries(car)) {
//   console.log(key, ":", value);
// }


/**************FOR OF Loops************* */
// let output = "";
// let skipThis = 7;
// for (let i = 0; i < 10; i++) {
//  if (i === skipThis) {
//  continue;
//  }
//  output += i;
// }
// console.log(output);
/**************FOR OF Loops************* */