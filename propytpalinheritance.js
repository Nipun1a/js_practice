function person(name){
    this.name = name;
}

person.prototype.getName = function(){
    console.log(`hello , my name is ${this.name}`);
}
let hitesh = new person("yug");
yug.greet();