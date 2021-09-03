// Function declaration
function add(num1, num2){
    return num1 + num2;
}
const sum1 = add(12, 2);
console.log(sum1);

// Function expression
const add2 = function add2 (num1, num2){
    return num1 + num2;
}

// Function expression (anonymous)
const add3 = function (num1, num2){
    return num1 + num2;
}

// Arrow function ***
const add4 = (num1, num2) => num1 + num2;