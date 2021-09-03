// Before ES6
function add (num1, num2){
    console.log(num1, num2);
    if (num2 == undefined){
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}
const result = add(12);
console.log(result);

// After ES6
function add2 (number1, number2 =  0){  // We can set a default value
    console.log(number1, number2);
    const sum = number1 + number2;
    return sum;
}
const result2 = add2(10,2);
console.log(result2);