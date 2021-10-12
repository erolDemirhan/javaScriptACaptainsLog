let val;

// number to string
val = 5;

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('----');

val2 = String(5);
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

console.log('----');

val3 = String(4+4);
console.log(val3);
console.log(typeof val3);
console.log(val3.length);

console.log('----');

val4 = String(true);
console.log(val4);
console.log(typeof val4);
console.log(val4.length);

console.log('----');

val5 = String(new Date());
console.log(val5);
console.log(typeof val5);
console.log(val5.length);

console.log('----');

val6 = String([1,2,3,4]);
console.log(val6);
console.log(typeof val6);
console.log(val6.length);

val7 = (5).toString();
val8 = (true).toString();

console.log('----');
console.clear();

val9 = Number('5');

console.log(val9);
console.log(typeof val9);
console.log(val9.toFixed());

console.clear();

val10 = Number(true);
val11 = Number(false);
console.log(val10, val11);
console.log(typeof val10, typeof val11);
console.log(val10.toFixed(), val11.toFixed());

console.clear();

val12 = Number(null);
val13 = Number('Hello');/* NaN -> Not a Number */

console.log(val12, val13);
console.log(typeof val12, typeof val13);
console.log(val12.toFixed(), val13.toFixed());

console.clear();
val14 = Number([1,2,3]);/* NaN -> Not a Number */

console.log(val14);
console.log(typeof val14);
console.log(val14.toFixed()); 

console.clear();

val15 = parseInt('100'); // parseFloat for floating numbers
console.log(val15);
console.log(typeof val15);
console.log(val15.toFixed()); 

console.clear();

const data1 = '5';
const data2 = 6; // 6 to string and concatenate
const sum = data1 + data2;

console.log(sum);
console.log(typeof sum);

console.clear();
