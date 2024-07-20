let arr = [];
let val = 7;

// let rows = 10;
// let colomn = 10;

for(let i=0; i< val; i++){
    let tempArr = [];
    for(let j=0; j<val; j++){
        tempArr.push(i*j);
    }
    arr.push(tempArr);
    
}
console.table(arr);