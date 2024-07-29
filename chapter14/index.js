" use strict";

//local file reader
// let message = document.getElementById("message");
// if (window.FileReader) {
//   message.innerText = "Good to go!";
// } else {
//   message.innerText = "No FileReader :(";
// }

//uploading files
let message = document.getElementById("message");
function uploadFile(files) {
  console.log(files[0]);
  message.innerText = files[0].name;
}

//
// function uploadFile(files) {
//   console.log(files[0]);
//   message.innerText = files[0].name;
// }

function uploadAndReadFile(files) {
  let fr = new FileReader();
  fr.onload = function (e) {
    message.innerHTML = e.target.result;
  };
  fr.readAsText(files[0]);
}
