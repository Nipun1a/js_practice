const person = {
    name: "yug",
    greet(){
        console.log(`hello , my name is ${this.name}`);
    },
};
person.greet();

const greetFunction = person.greet;
greetFunction(); // This will not work as expected because 'this' is undefined

const boundGreetFunction = person.greet.bind({name:"arya"});
boundGreetFunction(); // This will work correctly