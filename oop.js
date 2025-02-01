let car = {
    make: "toyota",
    model: "camry",
    year: 2020,
    start: function (){
        return `${this.make} car got started in ${this.year}`;

    },
};
//console.log(car.start ());


function person(name,age){
    this.name = name;
    this.age = age;
}

let john = new person("arya" , 19);
//console.log(arya.name);

function Animal (type){
    this.type = type
}
Animal.prototype.speak = function(){
    return `&{this.type}makes a sound`

}

Array.prototype.hitesh = function (){
    return `Custom method ${this}`;
};

/*let myArray = [1,2,3];
console.log(myArray.hitesh());
let myNewArray = {1,2,3,4,5,6};
//console.log(myNewArray.hitesh());
*/


class Vehicle {
    constructor(make,model){
        this.make = make ;
        this.model = model;
    }

    start (){
        return `${this.model} is a car from ${this.make}`;

    }
}

class cars extends Vehicle {
    drive (){
        return `${this.make}: this is an inheritance example`;

    }
}

let mycars = new cars ("rr" , "bmw");
console.log(mycars.start());
console.log(mycars.drive());

// encapsulation

class BankAccount {
    #balance = 0;

    deposit (amount){
        this.#balance += amount;
        return this.#balance;
    
    }

    getBalane (){
        return `$ ${this.#balance`;
        }
    }
let account = new BankAccount();
}
    
    
    