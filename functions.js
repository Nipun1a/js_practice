/*function maketea(type_of_tea){
    return `Making ${type_of_tea}`;
    
}
let greet = maketea("chai");
console.log(greet);
*/

/*function ordertea (tea_type){
    function confirmorder(tea_type){
        return `oder confirm for ${
            tea_type};
        }`
    }
    return confirmorder(tea_type);
    

}
let chai = ordertea("choclate shake");
console.log(chai);
*/

// function greet (){ this is a regular function }
// const greet =() => { thsi is an arrow function }

/*const calculatetotal = (price,quantity) => {
    return price * quantity;

}
let totalcost = calculatetotal(400,2);
console.log(totalcost);
*/


/*function maketea (typeoftea) {
    return `maketea: ${typeoftea}`;
} 
function processteaorder (teafunction){
    return teafunction ('cold coffe');
}
let order = processteaorder(maketea);
console.log(order);*/


// this type of function in js is known as first class function.


function teamaker() {
    return function (teatype) {
        return `making ${teatype}`;
    };
}

let teaas = teamaker(); // Call the outer function to get the inner function

console.log(teaas("chocolate shake")); // Call the returned function with "chocolate shake"




