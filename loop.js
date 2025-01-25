/*let sum =0;
let i = 0;
while (i <= 5) {
    sum  +=  i;
    i++;
    
}
console.log(sum);*/

/*let countdown = [];
i=5;
while (i > 0) {
    countdown.push(i);
    i--;
}
console.log(countdown);*/

/*let teacollection = [];
let tea;

do {
    tea = prompt('Enter your favourite tea (type "stop" to finish)'); // Use single quotes or escape the double quotes
    
    if (tea !== "stop") {
        teacollection.push(tea);
    }
} while (tea !== "stop");

console.log(teacollection);
*/

/*let total = 0;
let k = 1;
do {
    total +=k;
    k++;

}while (k<=3);
console.log (total);
*/

/*let multipliedno = [];
let numbers = [2,4,6];
let j=0;
for (let index = 0; index < numbers.length; index++) {
   j += numbers[index];
   multipliedno.push(j);
    
}
console.log(multipliedno);*/

/*let cities =["paris","ny","tokyo","london"];
let citylist=[];
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    citylist.push(element);
    
}
console.log(citylist);*/

/*let tea = ["green tea","black tea","chai","oolong tea"];
let element =[];
for (let index = 0; index < tea.length; index++) {
    if (tea[index] == "chai"){
        continue; //break for the previous question;
    }
     element.push(tea[index]);
    
}
console.log(element);*/

/*let array = [1,2,3,4,5];
let smallno = [];
for (const num of array) {
    if (num === 4){
        continue; // break for the previous question
    }
    smallno.push(num);

}
console.log(smallno);*/


/*let citiespopulation = {
    "london": 8900000,
    "New york": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
    //this is a object 
};
let citypopulation = {};
for (const city in citiespopulation){
    console.log(citiespopulation[city]);
    if (city == "berlin"){
        break;
    }
    citypopulation[city] = citiespopulation[city];
};
console.log(citypopulation);
*/

/*let tea = ["green tea","black tea","chai","oolong tea"];
let avatea = [];
tea.forEach (function(element) {
    if (element === 'chai'){
        return;
    }
    avatea.push(element);
    
});
console.log(avatea);
*/

/*let cities =["paris","ny","tokyo","london"];
travecities = [];
cities.forEach (function(element){  // it can also be write like that cities.forEach((element) =>{inside this all is same }
    if (element === 'ny'){
        return;

    }
    travecities.push(element);


    
});
console.log(travecities);
*/

let array =[2,5,7,9];
let mul=0;
let douno = [];
for (let index = 0; index < array.length; index++) {
    if (array[index] == "7"){
        continue;
    }
    else{
        double = array[index]*2;
        douno.push(double);

    }

    
} 
console.log(douno);

let tea = ["green tea","black tea","jasmine tea","chai","oolong tea"];
let shortteas = [];

for (const element of tea) {
    if (tea.length > 10){
        break;
    }
    shortteas.push(tea);
    
}














