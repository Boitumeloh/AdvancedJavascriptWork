/***************If else statements */
// let rain = true;

// if (rain) {
//     console.log("U need an umbrella");
// }else {
//     console.log("no umbrella needed");
// };

// let age = Number(prompt("enter your age: "));

// if(age < 18 ){
//     alert("not allowed");
// }else{
//     alert("you have access");
// }

//Exercise 4.1

// let bool = true;
// console.log(bool);
// if (bool) {
//     alert("this is a true boolean value");
// };
// if (!bool) {
//     alert("this is a not logical gate");
// };
// // else {
// //     alert("no boolean was used");
// // }


// let age = 10;
// let cost = 0;
// let message;
// if (age < 3) {
//  cost = 0;
//  message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//  cost = 5;
//  message ="With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//  cost = 10;
//  message ="A regular ticket costs 10 dollars.";

// } else {
//     cost = 7;
//     message ="A ticket is 7 dollars.";
//    }
//    console.log(message);
//    console.log("Your Total cost "+cost);

// let age = Number(prompt("Enter your age: "));

// let message ;

// if (age => 21 ){
//     message= "entry confirmed, and can purchase alchohol ";
// }else if (age => 19){
//     message="entry confirmed, but cannot buy alchohol";
// }else {
//     message = "entry denied";
// };

// console.log(message);

// let id = true;
// let access = id ? console.log("access allowed") : console.log("not allowed");

// let activity = "Breakfast";

//if statement
// if(activity === "Get up") {
//     console.log("It is 6:30AM");
//    } else if(activity === "Breakfast") {
//     console.log("It is 7:00AM");
//    } else if(activity === "Drive to work") {
//     console.log("It is 8:00AM");
//    } else if(activity === "Lunch") {
//     console.log("It is 12.00PM");
//    } else if(activity === "Drive home") {
//     console.log("It is 5:00PM")
//    } else if(activity === "Dinner") {
//     console.log("It is 6:30PM");
// } 

//switch statements
// switch(activity) {
//     case "Get up":
//     console.log("It is 6:30AM");
//     break;
//     case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//     case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//     case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//     case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//     case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//    };

//Exercise 4.4
// let num = Math.floor(Math.random()*6);

// let message = prompt("Enter a message: ");

// switch(num){
//     case 0:
//         console.log(message);
//         let response = "this is the first case";
//         console.log(response);
//         break;
//     case 1:
//         console.log(message);
//         let response1 = "this is the second case";
//         console.log(response1);
//         break;
//     case 2:
//         console.log(message);
//         let response2 = "this is the third case";
//         console.log(response2);
//         break;
//     case 3:
//         console.log(message);
//         let response3 = "this is case number 4";
//         console.log(response3);
//         break;
//     case 4:
//         console.log(message);
//         let response4 = "this is case number 5";
//         console.log(response4);
//         break;
//     default:
//         console.log(message);
//         let response5 = "this is the last case";
//         console.log(response5);
// };

let prize = Number(prompt("Select a number between 0 and 10: "));

let message_out = "My Selection: ";

switch(prize){
    case 0:
        response = " U get no reward ";
        console.log(message_out + prize + response);
        break;
    case 1:
        response = " U get 100 coins ";
        console.log(message_out + prize + response);
        break;
    case 2:
        response = " U get 200 coins ";
        console.log(message_out + prize + response);
        break;
    case 3:
        response = " U get 300 coins ";
        console.log(message_out + prize + response);
        break;
    case 4:
        response = " U get 400 coins";
        console.log(message_out + prize + response);
        break;
    case 5:
        response = " U get 500 coins";
        console.log(message_out + prize + response);
        break;
    case 6:
        response = " U get 600 coins";
        console.log(message_out + prize + response);
        break;
    case 7:
        response = " U get 700 coins";
        console.log(message_out + prize + response);
        break;
    case 8:
        response = " U get 800 coins";
        console.log(message_out + prize + response);
        break;
    case 9:
        response = " U get 900 coins ";
        console.log(message_out + prize + response);
        break;
    default:
        response = " U get 1000 coins ";
        console.log(message_out + prize + response);
}



