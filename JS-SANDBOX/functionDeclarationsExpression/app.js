// callable before the function definition itself
greet();
function greet(){
    console.log('test');
}
greet();

console.clear();
//params
function greet(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));


console.clear();
// default param 1
function defaultTest(firstName = 'test', lastName = 'test'){
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(defaultTest());

console.clear();
// default param 2
function defaultParam(firstName, lastName){
    if(typeof firstName === 'undefined'){
        firstName = 'John';
    }
    if(typeof lastName === 'undefined'){
        lastName = 'Doe';
    }
    return 'Hello ' + firstName + ' ' + lastName; 
}

console.log(defaultParam());
console.log(defaultParam('William', 'Joe'));
console.clear();

// anonymus functions
const square = function(x){
    return x*x;
};

console.log(square(8));

console.clear();

// Immediately invokable function expressions  IIFEs

(function(){
    console.log('IIFE');
})();

(function(firstName){
    console.log(firstName);
})('John');

console.clear();

// property methods

const todo = {
    add: function(){
        console.log('add todo...');
    },
    edit: function(id){
        console.log(id);
    }   
}

todo.add();
todo.edit(1);

todo.delete = function(){
    console.log('delete toto...');
}

todo.delete();

