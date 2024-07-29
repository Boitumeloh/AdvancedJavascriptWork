" use strict";

//local file reader
// let message = document.getElementById("message");
// if (window.FileReader) {
//   message.innerText = "Good to go!";
// } else {
//   message.innerText = "No FileReader :(";
// }

//uploading files
// let message = document.getElementById("message");
// function uploadFile(files) {
//   console.log(files[0]);
//   message.innerText = files[0].name;
// }

//
// function uploadFile(files) {
//   console.log(files[0]);
//   message.innerText = files[0].name;
// }

// function uploadAndReadFile(files) {
//   let fr = new FileReader();
//   fr.onload = function (e) {
//     message.innerHTML = e.target.result;
//   };
//   fr.readAsText(files[0]);
// }

/*****************Getting position data with GeoLocation********************** */

// window.onload = init;
// function init() {
//   console.dir(navigator.geolocation);
// }
// function init() {
//   navigator.geolocation.getCurrentPosition(showGeoPosition);
// }
// function showGeoPosition(data) {
//   console.dir(data);
// }

/*****************HTML5 CANVAS********************** */
// let canvas = document.getElementById("c1");
// let ctx = canvas.getContext("2d");
// canvas.width = 500; //px
// canvas.height = 500; //px
// ctx.fillStyle = "pink";
// ctx.fillRect(20, 40, 100, 100);

/*****************DYNAMIC CANVAS********************* */
// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 150;
// canvas.height = 200;
// // canvas.width = 100;
// // canvas.height = 100;
// //ctx.lineWidth = 2;
// //ctx.moveTo(0, 20);
// //ctx.lineTo(50, 100);
// ctx.arc(75, 100, 50, 0, Math.PI * 2);
// ctx.stroke();
//Adding text to the canvas

// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 200;
// ctx.font = "24px Arial";
// let txt = "Hi canvas!";
// ctx.fillText(txt, 10, 35);

//Adding and uploading images to the canvas

window.onload = function () {
  let canvas = document.getElementById("c1");
  canvas.height = 300;
  canvas.width = 300;
  let ctx = canvas.getContext("2d");
  let myImage = document.getElementById("flower");
  ctx.drawImage(myImage, 10, 10);
};

/*****************Getting position data with GeoLocation********************** */

/*****************DYNAMIC CANVAS********************* */

/*****************DYNAMIC CANVAS********************* */

/*****************DYNAMIC CANVAS********************* */

/*****************DYNAMIC CANVAS********************* */
