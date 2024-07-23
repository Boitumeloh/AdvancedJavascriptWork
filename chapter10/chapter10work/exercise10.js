document.querySelector("#addItem");

function addOne() {
  let create = document.getElementById("addItem").value;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(create));
  document.getElementById("sList").appendChild(li);
}
