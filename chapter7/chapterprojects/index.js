class Tracker{
    constructor(firstName,lastName,NoOfYears){
        this.firstName = firstName;
        this.lastName = lastName;
        this.NoOfYears = NoOfYears;
    }
}
let p1 = new Tracker("Boitumelo","Lefophane",7);
let p2 = new Tracker("Vukosi","Djija",3);
let p3 = new Tracker("Thapelo","Moagi", 4);

let arr = [p1,p2,p3];

Tracker.prototype.details = function(){
    return this.firstName + " " + this.lastName + " has worked here " +
    this.NoOfYears + " years";
}

// arr.forEach((employee) => {
//     console.log(employee.details());
// });
for(let i=0;i<arr.length;i++){
    console.log(arr[i].details());
}
