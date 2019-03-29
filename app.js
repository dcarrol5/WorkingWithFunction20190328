/*jslint esversion:6*/


function add(a, b, ) {
    return a + b;
}
const substract = function (a, b) {
    return a - b;
};

const multiply = (a, b) => a * b;
const log = (a) => console.log('value of a is : ${a}');
const sumar = add;
const AGE = 65;

function divide(a, b = 2) {
    return a / b;
}

console.log(divide(8, 4, 3));
console.log(divide(8, 4));
console.log(divide(8));

var value = divide([10, 2], 4);


console.log(AGE);
console.log(sumar('hello', 'world'));
console.log(add);
console.log(typeof add);
console.log(substract(10, 7));
console.log(substract);
console.log(typeof multiply);
console.log(multiply(3, 5));
console.log(multiply);

return;

