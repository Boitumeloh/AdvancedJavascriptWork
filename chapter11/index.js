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

// function sendInfo() {
//   let p = event.target.parentElement;
//   message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }

// function message(m) {
//   document.getElementById("welcome").innerHTML = m;
// }

/**********************DOM EVENT FLOW************************ */

// function bubble() {
//   console.log(this.innerText);
// }
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", bubble);
// }

/**********************onchange and onblur************************ */
// function logEvent() {
//   let p = event.target;
//   if (p.name == "firstname") {
//     message("First Name Changed to " + p.value);
//   } else {
//     message("Last Name Changed to " + p.value);
//   }
// }
// function sendInfo() {
//   let p = event.target.parentElement;
//   message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }
// function message(m) {
//   document.getElementById("welcome").innerHTML = m;
// }

/**********************KEY EVENT HANDLERS************************ */
// function numCheck() {
//   message("Number: " + !isNaN(event.key));
//   return !isNaN(event.key);
// }
// function numCheck2() {
//   message("Not a number: " + isNaN(event.key));
//   return isNaN(event.key);
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

/**********************Drag and drop elements************************ */

// let holderItem;
// function dStart() {
//   holderItem = event.target;
// }
// function nDrop() {
//   event.preventDefault();
// }
// function dDrop() {
//   event.preventDefault();
//   if (event.target.className == "box") {
//     event.target.appendChild(holderItem);
//   }
// }

/**********************FORM SUBMISSION************************ */
// function valForm() {
//   var p = event.target.children;
//   //conditions makes all 3 fields required
//   if (p.firstName.value == "") {
//     message("Need a first name!!");
//     return false;
//   }
//   if (p.lastName.value == "") {
//     message("Need a last name!!");
//     return false;
//   }
//   if (p.age.value == "") {
//     message("Need an age!!");
//     return false;
//   }
//   return true;
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

/**********************Animating elements************************ */
function toTheRight() {
  let b = document.getElementById("block");
  let x = 0;
  setInterval(function () {
    if (x === 600) {
      clearInterval();
    } else {
      x++;
      b.style.left = x + "px";
    }
  }, 2);
}

/**********************Drag and drop elements************************ */

/**********************Drag and drop elements************************ */
