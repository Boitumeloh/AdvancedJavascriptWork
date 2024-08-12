let textArea1 = document.querySelector('textarea[name="txtarea"]');
let textArea2 = document.querySelector('textarea[name="txtarea2"]');
let btn = document.querySelector("button");


btn.addEventListener("click", (e) => {
    let content = textArea1.value;
    let emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
    let match = content.match(emailExp);

    let arr = [];
    for(let i=0; i<match.length;i++){
        if(arr.indexOf(match[i])==-1){
            arr.push(match[i]);
        }
    }
    textArea2.value = arr.join(',');
})