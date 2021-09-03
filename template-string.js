const pitbull = 'rain over me';
const bieber = "as long as you love me";
const jenifer = `feel the light`;

// Before ES6
const multiLine = 'first line. \n' + 'second line. \n' + 'third line. \n';
console.log(multiLine);

// After ES6
const multiLineNew = `new first line
new second lone
new third line
`
console.log(multiLineNew);

const count = 5;
const old = '<h3 class="friend-name>Friend-5</h3>';
const old2 = '<h3 class="friend-name>Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name>Friend-${count}</h3>`;
console.log(new1);

const first = 'Naim';
const second = 'Siddiqui';
const fullName = `${first} ${second}`;
console.log(fullName);