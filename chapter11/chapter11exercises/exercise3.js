document.addEventListener("DOMContentloaded", (e) => {
  message("Document Ready", e);
});

window.onload = (e) => {
  message("Window Ready", e);
};

function message(param1, param2) {
    console.log(param1, param2);
}
