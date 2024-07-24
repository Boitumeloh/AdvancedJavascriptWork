let out = document.querySelectorAll("div");

out.forEach((element)=>{
    element.addEventListener("click",()=>{
        document.body.style.backgroundColor = element.textContent;
    });
})


