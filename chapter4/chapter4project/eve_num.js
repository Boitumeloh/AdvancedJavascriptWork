let random = (Math.floor(Math.random()*101));

let guess = Number(prompt("Enter a number between 0 and a 100: "));



switch(random){
    case guess === random:
        alert(`you guessed the correct number`);
        break;
    case guess > random:
        alert("You guessed a number above the correct one "+ random +" was the correct guess");
        break;
    default:
        alert("you are below the correct guess "+ random +" was the correct guess");
}