// Global Scope
var a = 1;
let b = 2;
const c = 3;

/*
function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a, b, c);
}

test();
*/
console.log('Global scope before the block scope: ', a, b, c);

if(true){
    // Block scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block scope: ', a, b, c);
}

console.log('Global scope: ', a, b, c);

// let and const variables act like different variables inside of the block scope as you see even if their variable names are same
// but var act like there is no scope inside of the file


