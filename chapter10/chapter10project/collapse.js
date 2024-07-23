let titl = document.querySelectorAll(".title");
let text = document.querySelectorAll(".myText");

titl.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    console.log(elem.nextElementSibling);
    remover();
    elem.nextElementSibling.classList.toggle("active");
  });
});

function remover() {
  openText.forEach((el) => {
    el.classList.remove("active");
  });
}
