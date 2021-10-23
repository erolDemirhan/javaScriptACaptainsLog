const sayHello = function(){
    console.log('test');
}

sayHello();

const sayArrow = () => {
    console.log('arrow');
}

sayArrow();

const oneLineArrow = () => console.log('one line arrow');

oneLineArrow();

const returnArrow = () => 'return';

console.log(returnArrow());

// ------------------------------- returning object literal
console.clear();

const objLit = () => { msg : 'objLit'}

console.log(objLit());

// it will return undefined so we need to wrap it with parantheses

const objLitWithPrnthss = () => ({ msg : 'objLit with Prnthss'});

console.log(objLitWithPrnthss());

// -------------------------------  params

console.clear();

const withParam = prms => console.log(`this is a ${prms}`);

withParam('test');

// if it is a single params than you do not need to use parantheses

// -------------------------------- multiple params

const multiParams = (paramOne, paramTwo) => console.log(`multi params are ${paramOne} ${paramTwo}`);

multiParams(3,4);
multiParams('john', 'doe');

// -------------------------------- 

console.clear();

const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function(name){
    return name.length;
});

console.log(nameLengths);

// ------------------------------- using arrow

const nameLngths = users.map(name => name.length);

console.log(nameLngths);

console.clear();

document.getElementById('button3').addEventListener('click', getText);

function getText(){
    fetch('test.txt').then(res => res.text())
    .then( data => {document.getElementById('output').innerHTML = data;})
    .catch(err => console.log(err));
}
