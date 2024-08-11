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
// let div = document.querySelector(".output");
// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

// btn.addEventListener("click", btnFun);

// function btnFun(){
//     let cont = input.value;
//     let result = emailExp.test(cont);
//     let response = "";

//     if (!result){
//         response = "Invalid Email";
//         div.style.color = "red";
//     }else{
//         response = "Valid Email";
//         div.style.color = "green";
//     }
//     input.value = "";
//     div.textContent = response;
// }

//Exercise 12.3
// function create(){
//     let lastOne= "";
//     for(let i=0; i<arguments.length;i++){
//         lastOne = arguments[i];
//     }
//     return lastOne;
// }

// console.log(create(29,24,43));

//Exercise 12.4
// let val = 5;
// val += adder();
// val += adder();
// val += adder();
// console.log(val);
// function adder() {
//   let counter = val;
//   for (let i = 0; i < val; i++) {
//     counter++;
//   }
//   return counter;
// }

//Exercise 12.5
function checker(val){
    try{
        if (isNaN(val)){
            throw "is not a number";
        }else{
            console.log("Got a number");
            
        }
    }catch (e) {
        console.error(e);
    }finally{
        console.log("Done "+ val);
    }
}

checker("b");
checker(20);