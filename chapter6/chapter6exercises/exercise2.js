let arr = [" Wake up"," Eat"," Code"," Repeat"];

function ask(){
    let user = prompt("Enter your name: ");
    let random = arr[Math.floor(Math.random()*arr.length)];
    console.log(user,random);
}

ask();