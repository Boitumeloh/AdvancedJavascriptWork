/*******************CODE 1************************ */
// Define three functions
function firstTask() {
  console.log("Task 1");
}

function secondTask() {
  console.log("Task 2");
}

function thirdTask() {
  console.log("Task 3");
}

// Execute the functions
firstTask();
secondTask();
thirdTask();

/*******************CODE 2************************ */

function someLongRunningFunction() {
  let start = Date.now();
  while (Date.now() - start < 5000) {
    // do nothing
  }
  return "Hello";
}

console.log("Starting...");

let result = someLongRunningFunction();
console.log(result);

console.log("...Finishing");

/*******************CODE 3************************ */

console.log("Start of script");

setTimeout(function () {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");

/*******************CODE 4************************ */
// Declare function
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 3000);
}

// Execute function with a callback
fetchData(function (data) {
  console.log(data);
});

console.log("Data is being fetched...");

/*******************CODE 5************************ */
// getData(function(a) {
//     getMoreData(a, function(b) {
//       getEvenMoreData(b, function(c) {
//         getEvenEvenMoreData(c, function(d) {
//           getFinalData(d, function(finalData) {
//             console.log(finalData);
//           });
//         });
//       });
//     });
//   });

/*******************CODE 6************************ */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from the promise!");
  }, 2000);
});
console.log(myPromise);


/*******************CODE 7************************ */
let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');
let all = Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log(values);
});

console.log(all);

