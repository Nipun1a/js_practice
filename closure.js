function outer(){
    let counter = 4;
    return function () {
       counter++;
       return counter;
    };

}
let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

// it is the sppecial type of function which retains its memory of the functuon outside the function  