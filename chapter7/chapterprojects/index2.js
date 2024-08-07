class Prices{
    #price1=20;
    #price2=45;
    constructor(item1, item2){
        this.item1 = item1;
        this.item2 = item2;
    }

    calculate(){
        return (this.item1 * this.#price1)+(this.item2*this.#price2);
    }

    get total(){
        return this.calculate();
    }
}

let item1 = new Prices(2,0);
let item2 = new Prices(1,3);
let item3 = new Prices(3,2);
console.log(item1.total);
console.log(item2.total);
console.log(item3.total);


