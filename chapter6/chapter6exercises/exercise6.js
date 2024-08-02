function recursive(num){
    console.log(num);
    if(num ===0){
        return 1;
    }else{
        return num*recursive(--num);
    }
};

console.log(recursive(7)); 