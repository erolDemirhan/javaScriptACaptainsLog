// document.getElementsByClassName
/*
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); inside of the ul get
all classes which called collection-item 

console.log(listItems);
*/
// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[1].textContent = 'workFaster';

//convert html collection into an array

lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
    li.textContent = index;
});

console.log(lis);
console.clear();

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item){
    item.textContent = 'querySelectorAll';
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item, index){
    item.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

