"use strict";

//specifying events

//using JS
//document.getElementById("unique").onclick = function() { magic(); };

//using event lestiners
// document.getElementById("unique").addEventListener("click",()=> magic());

// function magic(){
//     alert(" Aba cadabraa!!!");
// }

/**********************ONLOAD EVENT HANDLERS************************ */
// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e);
// });

/**********************MOUSE EVENT HANDLERS************************ */
// function changeColor() {
//   document.getElementById("divvy").style.backgroundColor = "blue";
// }

// window.onload = function donenow() {
//   console.log("hi");
//   document.getElementById("divvy").addEventListener("mousedown", function () {
//     changeColor(this, "green");
//   });
//   document.getElementById("divvy").addEventListener("mouseup", function () {
//     changeColor(this, "yellow");
//   });
//   document.getElementById("divvy").addEventListener("dblclick", function () {
//     changeColor(this, "black");
//   });
//   document.getElementById("divvy").addEventListener("mouseout", function () {
//     changeColor(this, "blue");
//   });
// };

// console.log("hi again");

// function changeColor(el, color) {
//   el.style.backgroundColor = color;
// }

/**********************THE EVENT TARGET PROPERTY************************ */
// function triggerSomething() {
//   console.dir(event.target);
// }

function sendInfo() {
  let p = event.target.parentElement;
  message("Welcome " + p.firstname.value + " " + p.lastname.value);
}

function message(m) {
  document.getElementById("welcome").innerHTML = m;
}

/**********************DOM EVENT FLOW************************ */

/**********************ONLOAD EVENT HANDLERS************************ */

/**********************ONLOAD EVENT HANDLERS************************ */

/**********************ONLOAD EVENT HANDLERS************************ */
