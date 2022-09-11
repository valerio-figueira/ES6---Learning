//ECMAScript 6
//SECTION ABOUT FUNCTION PARAMETERS

//By default, the function parameter is defined as undefined, e.g:

say();
function say(text){
    console.log(typeof(text)); //undefined
}

//We can defined default value of the function parameters by easy way (ES6) as example below:
message();
function message(text = "Hello, World!"){
    console.log(text);
}

//In ES5, we could make it by using ternary operator, e.g:
printMessage();
function printMessage(text){
    text = typeof(text) !== "undefined" ? message : "Hello, World!";
    console.log(text);
}

//More function parameters examples
let toyBox = [];

put("Toy Car", toyBox);
put("Ball", toyBox);

console.log(toyBox);

function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
};

//default parameter as function:
date();

function date(d = today()){
    console.log(d);
}
function today(){
    return new Date().toLocaleDateString("pt-BR");
}

//We can use parameter as function to make arguments mandatory as follow:
function argMandatory() {
    throw new Error('The argument is required.');
}
function add(x = argMandatory(), y = argMandatory()){
    return x + y;
}
//add(10); ERROR
console.log(add(10, 15)); // OK


//We can use a return value of a function as a default value for a parameter. For example:

let taxRate = () => 0.1;
let getPrice = function (price, tax = price * taxRate()){
    return price + tax;
}
let fullPrice = getPrice(50);
console.log("R$" + fullPrice + " Full price value");

export let headerMessage = "Hello!";
export function setMessage(msg){
    return headerMessage = msg;
}