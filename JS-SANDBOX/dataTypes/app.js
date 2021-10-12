/*
Primitive Data Types
    Stored directly in the location the variable accesses
    stored on the stack
    All variables are undefined by default

    String
    Number  -> integer, decimal, float
    Boolean
    Null
    Undefined
    Symbols

Reference Data Types:
    Accessed by reference
    Objects that are stored on the heap

    Arrays
    Object Literals
    Functions
    Dates
    
*/

const userName = 'John Doe';
console.log(typeof userName);

const age = 45;
console.log(typeof age);

const result = true;
console.log(typeof result);

const car = null;
console.log(typeof car);

let test;
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym);

/*----*/
console.log('---------');

const numbers = [1,2];
console.log(typeof numbers);

const address = {
    city: 'Boston',
    state: 'Ma'
}
console.log(typeof address);

const today = new Date();
console.log(typeof today);
