let arr = [];

for(let i=0;i<10;i++){
    let val1 = i*5;
    let val2 = i*i;
    let response = runner(val1,val2);
    arr.push(response);
};

function runner(param1, param2){
    let result = param1 + param2;
    return result;
};

console.log(arr);