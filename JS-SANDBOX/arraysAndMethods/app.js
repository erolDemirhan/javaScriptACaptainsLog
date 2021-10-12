// create some arrays

const numbers = [12,43,54,65,67,78];
const numbers2 = new Array(34,231,43,54,56);
const chars = ['sally', 'susan', 'jane'];
const mixed = ['steve', 'patrick', 'jeffrey', 3, {a:1, b:2}, new Date(), undefined, null, true];

let val;

console.log(numbers);
console.log(val);

// get array length
val = numbers.length;
console.log(val);
//check if array
val = Array.isArray(numbers);
console.log(val);

// get single value
val = numbers[0];
console.log(val);

//insert into array aka assign a value to an exact point
numbers[2] = 100;
console.log(numbers);

// find index of value
val = numbers.indexOf(78);
console.log(val);

// mutating arrays
numbers.push(600);
console.log(numbers);

// add on the front
numbers.unshift(7);
console.log(numbers);

//take of from end
numbers.pop();
console.log(numbers);

//take of from front
numbers.shift();
console.log(numbers);

//splice values
numbers.splice(1,1);
console.log(numbers);

//reverse array
numbers.reverse();
console.log(numbers);

//concat array
val = numbers.concat(numbers2);
console.log(val);

//sort
val = chars.sort();
console.log(val);

const numbersSort = [5,4,3,2,1];

val = numbersSort.sort();
console.log(val);

// use the compare function

val = numbersSort.sort(function(x, y){
    return x - y;
});
console.log(val);


val = numbersSort.sort(function(x, y){
    return y - x;
});
console.log(val);

// find returns the first number that under the 50
function underFifty(num){ 
    return num < 50;
}

val = numbersSort.find(underFifty);
console.log(val);

