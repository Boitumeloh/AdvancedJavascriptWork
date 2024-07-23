"use strict";

//console.log("Hello Boitumelo");

//Moving down DOM TREE
// console.dir(
//   document.body.children.forest.children.tree2.children.shrubbery.children
//     .treasure
// );
// console.dir(document.body);

// console.dir(
//   document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]
// );

// console.log(document.body.children.forest.children.tree2.parentElement)//moving upwards
// document.body.children.forest.children.tree2;//sideways
// document.body.children.forest.children.tree2.previousElementSibling;
// document.body.children.forest.children.tree1.nextElementSibling;

/********************Selecting elements as objects************************** */
// console.dir(document.body.children.greeting);

// //Changing innerText
// document.body.children.greeting.innerText = "Bye!";

// //Changing innerHTML
// document.body.children.greeting.innerHTML = "<b>Bye!</b>";

/********************Accessing elements in the DOM************************** */

//Accessing elements by ID

// let item1 = document.getElementById("two");
// item1.innerHTML = "<i>Hey!</i>";
// console.log(item1);

// //BY TAG NAME
// let tags = document.getElementsByTagName("div");
// console.log(tags);
// let tag3 =  document.getElementsByTagName("div").item(1);
// console.log(document.getElementsByTagName("div").namedItem("one"));
// console.log(document.getElementsByTagName("h1"));

// //BY CLASS
// let classes = document.getElementsByClassName("example");
// console.log(classes);

// //BY CSS SELECTOR
// console.log(document.querySelectorAll("p"));

// //Using querySelector() and Using querySelectorAll()
// let firstDiv = document.querySelector("div");
// console.log(firstDiv);

// let sh = document.querySelector(".something");
// console.log(sh);

// let Alldivs = document.querySelectorAll("div");
// console.log(Alldivs);

/********************Element click handler************************** */

/********************Selecting elements as objects************************** */

// document.getElementById("one").onclick =function stop(){
//     alert("ouch stop");
// };

/********************This and the DOM************************** */

// function reveal(el) {
//   console.log(el);
//   console.log(el.parentElement);
// }

// function reveal(el.parentElement){
//     console.log(el);
//     }

/********************Manipulating element style************************** */
// function toggleDisplay() {
//   let p = document.getElementById("magic");
//   if (p.style.display === "none") {
//     p.style.display = "block";
//   } else {
//     p.style.display = "none";
//   }
// }

// function rainbowify() {
//   let divs = document.getElementsByTagName("div");
//   for (let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = divs[i].id;
//   }
// }

/********************Changing the classes of an element************************** */

//adding
// function disappear() {
//   document.getElementById("shape").classList.add("hide");
// }
//removing

function change() {
  document.getElementById("shape").classList.remove("blue");
}

//Toggling classes



/********************This and the DOM************************** */
