/*let computer = {cpu: 12};
let lenovo = { screen: "hd"};
let tomhardware = {};

console.log(`lenovo` , lenovo.__proto__);*/

/*
let genericcar = {tyres:4};
let tesla = {
    driver: "AI",
};

Object.setPrototypeOf(tesla , genericcar);

console.log(`tesla`, Object.getPrototypeOf(tesla));
*/

function Tea(Type){
    this.type = Type;
}
    Tea.prototype.describe = function (){
        return `this is a lemon tea ${this.type}`;
    };
 
let lemontea = new Tea ("lemon tea");
console.log(lemontea.describe);


