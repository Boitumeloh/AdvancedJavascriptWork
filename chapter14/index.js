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

// window.onload = function () {
//   let canvas = document.getElementById("c1");
//   canvas.height = 300;
//   canvas.width = 300;
//   let ctx = canvas.getContext("2d");
//   let myImage = document.getElementById("flower");
//   ctx.drawImage(myImage, 10, 10);
// };

// let canvas1 = document.getElementById("canvas1");
//  let ctx1 = canvas1.getContext("2d");
//  ctx1.strokeRect(5, 5, 150, 100);
//  let canvas2 = document.getElementById("canvas2");
//  let ctx2 = canvas2.getContext("2d");
//  ctx2.beginPath();
//  ctx2.arc(60, 60, 20, 0, 2 * Math.PI);
//  ctx2.stroke();
//  let canvas3 = document.getElementById("canvas3");
//  let ctx3 = canvas3.getContext("2d");
//  ctx3.drawImage(canvas1, 10, 10);
//  ctx3.drawImage(canvas2, 10, 10);

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let imgLoader = document.getElementById("imgLoader");
// imgLoader.addEventListener("change", upImage, false);
// function upImage() {
//   let fr = new FileReader();
//   fr.readAsDataURL(event.target.files[0]);
//   fr.onload = function (e) {
//     let img = new Image();
//     img.src = event.target.result;
//     img.onload = function () {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
//     };
//     console.log(fr);
//   };
// }

//ADDING ANIMATIONS
// window.onload = init;
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// canvas.height = 500;
// canvas.width = 500;
// var pos = {
//   x: 0,
//   y: 50,
// };
// function init() {
//   draw();
// }
// function draw() {
//   pos.x = pos.x + 5;
//   if (pos.x > canvas.width) {
//     pos.x = 0;
//   }
//   if (pos.y > canvas.height) {
//     pos.y = 0;
//   }
//   ctx.fillRect(pos.x, pos.y, 100, 100);
//   window.setTimeout(draw, 50);
// }

//Drawing on canvas with a mouse
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// canvas.width = 700;
// canvas.height = 700;

//Saving dynamic images
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 200;
// const penColor = document.getElementById("squareColor");
// penColor.addEventListener("change", function () {
//   color = event.target.value;
//   draw(color);
// });
// document.getElementById("save").addEventListener("click", function () {
//   let dataURL = canvas.toDataURL();
//   document.getElementById("holder").src = dataURL;
// });
// function draw(color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(70, 70, 100, 100);
// }

/*****************Media on the page********************** */


/*****************DYNAMIC CANVAS********************* */

/*****************DYNAMIC CANVAS********************* */

/*****************DYNAMIC CANVAS********************* */

/*****************DYNAMIC CANVAS********************* */
