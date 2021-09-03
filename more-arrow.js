// variable is function name - parameters - work
const add = (num1, num2)  => num1 + num2;
const sum = add(1,3);
console.log(sum);

const tenTimes = (num) => num * 10;
const output = tenTimes(2);
console.log(output);

// One parameter needs no brackets
const fiveTimes = num => num * 5;
const value = fiveTimes(3);
console.log(value);

// No parameters
const getName = () => 'Naim Siddiqui';
const name = getName();
console.log(name);

// Multiple line of works
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(2,3);
console.log(total);