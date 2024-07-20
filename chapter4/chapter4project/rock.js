let arr = ["rock","paper","scissors"];

let random = Math.floor(Math.random()*3);

let comp_choice = arr[random];

alert(comp_choice);
let user_choice = prompt("Enter your choice: ");
let response;


if (user_choice == comp_choice){
    response = "tie";
}else if(((user_choice == arr[0] ) && (comp_choice == arr[1])) || ((user_choice== arr[1]) && (comp_choice == arr[2])) || ((user_choice == arr[2]) && (comp_choice== arr[0]))) {
    response = "comp wins";
}else{
    response = "User wins";
};
alert(response);
