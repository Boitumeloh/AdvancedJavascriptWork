//Exercise 12.1
// let div = document.querySelector("#output");
// let input = document.querySelector("#sText");
// let input2 = document.querySelector("#rText");
// let btn = document.querySelector("button");

// btn.addEventListener("click", lookUp);

// function lookUp() {
//   let s = div.textContent;
//   let rt = input2.value;
//   let reg = new RegExp(input.value, "gi");
//   if (s.match(reg)) {
//     let newValue = s.replace(reg, rt);
//     div.textContent = newValue;
//   }
// }

//Exercise 12.2
let div = document.querySelector(".output");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

btn.addEventListener("click", btnFun);

function btnFun(){
    let cont = input.value;
    let result = emailExp.test(cont);
    let response = "";

    if (!result){
        response = "Invalid Email";
        div.style.color = "red";
    }else{
        response = "Valid Email";
        div.style.color = "green";
    }
    input.value = "";
    div.textContent = response;
}

