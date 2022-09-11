//The rest parameter must be at the end of the argument list as follow:
function fn(a, b, ...array){
    console.log("Rest parameter: " + a, b, array);
}

fn("A", "B", 1, 2, 3, 4, 5);

//If only two first parameters be entered, the rest parameter will be ignored and printed as empty array: "[]":
fn("A", "B");

//The rest parameters must appear at the end of the argument list:
/*function rest(a, ...rest, b){
    // ERROR
}*/

//Rest Parameter Example:
function sum(...args){
    let total = 0;
    for(let item of args){
        total += item;
    }
    return total;
}

console.log(sum(1, 5, 10));


//Filtering the numbers:
console.log("Filtered number and sum is equal to " + enhancedSum(5, 5, 5, 5, "Text", null, true));

function enhancedSum(...args){
    return args
    .filter((e) => {
        return typeof (e) === 'number';
    })
    .reduce((prev, curr) => {
        return prev + curr;
    });
};