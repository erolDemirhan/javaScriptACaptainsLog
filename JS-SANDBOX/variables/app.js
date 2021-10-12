// var, let, const
/*
var userName = 'John Doe';
console.log(userName);

userName = 'reassign is possible';
console.log(userName);

// init a variable

var greeting;
console.log(greeting);
greeting = 'defined';
console.log(greeting);

// letters, numbers, _, $
// can not start with a number

// multi word vars  naming the variables in a different way
var firstName = 'John'; // camel case
var first_name = 'Sarah';// underscore
var FirstName = 'Tom';// pascal case
*/

// let
/*
let userName;
userName = 'John Doe';
console.log(userName);
userName = 'Steve Smith';
console.log(userName);
*/

// const
/*
const userName = 'John';
console.log(userName);
userName = 'Steve'; // it is forbidden like in the c# as well
console.log(userName);
*/

const person = {
    name: 'John',
    age: 33
}

person.name = 'Sarah'; // burası önemliydi

console.log(person);

const numbers = [1,2,3];

console.log(numbers);
numbers.push(4);
console.log(numbers);

