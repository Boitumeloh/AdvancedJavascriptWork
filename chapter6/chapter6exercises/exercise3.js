// let n1 = 3;
// let n2 = 4;

// let operator;

function adder(n1,opp,n2){
    if (opp == "+"){
        return n1+n2;
    }else if(opp == "-"){
        return n1-n2;
    }else{
        return n1+n2;
    }
};

console.log(adder(3,"-",4));