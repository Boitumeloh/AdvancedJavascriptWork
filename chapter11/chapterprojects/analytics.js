const counter = [];
const main = document.querySelector(".container");
main.addEventListener("click", tracker);
function tracker(e) {
  const el = e.target;
  if (el.id) {
    const temp = {};
    temp.content = el.textContent;
    temp.id = el.id;
    temp.tagName = el.tagName;
    temp.class = el.className;
    console.dir(el);
    counter.push(temp);
    console.log(counter);
  }
}
