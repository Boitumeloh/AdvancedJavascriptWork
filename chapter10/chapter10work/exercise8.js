let arr = ["Abel", "Boitumelo", "Lucky", "Vukosi", "Thapelo"];

document.querySelector("#message");
document.querySelector("#output");

(function build() {
  let html = "<h1></h1><table>";
  arr.forEach((item, index) => {
    html += `<tr class="box" data-row="${index + 1}"
             data-name="${item}" onclick="getData(this)">
             <td>${item}</td>`;
    html += `<td >${index + 1}</td></tr>`;
  });
  html += "</table>";
  document.getElementById("output").innerHTML = html;
})();

function getData(el) {
  let temp = el.getAttribute("data-row");
  let tempName = el.getAttribute("data-name");
  message.innerHTML = `${tempName} is in row #${temp}`;
}
