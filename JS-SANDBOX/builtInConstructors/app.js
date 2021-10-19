// strings

const nameOne = 'Alex';
const nameTwo = new String('Doe');

console.log(nameOne);// string
console.log(nameTwo);// object

console.log(typeof nameOne);
console.log(typeof nameTwo);

if(nameOne === 'Alex'){
    console.log('yes'); // this will work cause the type of nameOne is string also
}else{
    console.log('no');
}

if(nameTwo === 'Doe'){
    console.log('yes');
}else{
    console.log('no'); // this will work cause the typeOf nameTwo is object not string
}

// Number

const num1 = 5;
const num2 = new Number(5);

console.log(num1===num2); // we get false

// boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1 === bool2);

// functions

const getSum1 = function(x, y){
    return x+y;
}

const numOne = 5;
const numTwo = 4;

const getSum2 = new Function('a', 'b', `return ${numOne} + ${numTwo}`);

console.log(getSum1(4,5));
console.log(getSum2(numOne, numTwo)); // it works without the params too

// object

const userInfos = {name: "Alex"};
const userInfos2 = new Object({name: "Doe"});

console.log(userInfos.name);
console.log(userInfos2.name);

// Array

const arrayOne = [1,2,3,4];
const arrayTwo = new Array(1,2,3,4);

console.log(arrayOne);
console.log(arrayTwo);

// regex

const regOne = /\w+/; // looking for word character one or more times
const regTwo = new RegExp('\\w+');

console.log(regOne);
console.log(regTwo);

