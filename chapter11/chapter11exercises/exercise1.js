let mode = true;

window.onclick = (function message(){
    console.log(mode);
    if (mode == true){
        document.body.style.backgroundColor = "black";//page color
        document.body.style.color = "white";//font color
        mode = true;
    }else if(mode == false){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
        mode = false;
    }
})();