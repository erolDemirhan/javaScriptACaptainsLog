const firstName = 'John';
const lastName = 'Doe';
let age = 34;

let val;

val = firstName + ' ' + lastName;

console.log(val);

console.clear();

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

console.log(val);

console.clear();

// escaping

val = 'That\'s awesome!';

console.log(val);

console.clear();

val = firstName.length;

console.log(val);

console.clear();

val = firstName.concat(' ', lastName);

console.log(val);

console.clear();

val = firstName.toUpperCase();
val = lastName.toLowerCase();

console.clear();

val = firstName[0];

console.log(val);

console.clear();

val = firstName.indexOf('J');
console.log(val);
val = firstName.lastIndexOf('J');
console.log(val);
console.clear();

val = firstName.charAt('2');
console.log(val);

console.clear();

val = firstName.charAt(firstName.length-1);
console.log(val);

console.clear();

val = firstName.substring(0,1);
console.log(val);

val = firstName.slice(0,2); // can take negative numbers to back reverse
console.log(val);

const str = "shiba inu will hit 0.005 at this december";
val = str.split(' ');
console.log(val);

console.clear();

const str2 = "#weeknd#concert#thisnight"; // (4) ['', 'weeknd', 'concert', 'thisnight']
val = str2.split('#');
console.log(val);

console.clear();

val = str.replace('december', 'november');
console.log(val);

console.clear();

val = str.includes('shiba');
console.log(val);

