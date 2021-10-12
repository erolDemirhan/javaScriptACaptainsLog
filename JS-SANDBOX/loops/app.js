// for loop

for(let i = 0; i < 3; i++){
    console.log(i);
}

console.clear();

let i = 0;
while(i < 3){
    console.log(i);
    i++;
}

console.clear();

let j = 0;

do{
    console.log(j);
    j++;    
}while(j<5);

console.clear();

const cars = ['ford', 'chevy', 'honda'];

for(let i = 0; i < cars.length ; i++){
    console.log(cars[i]);
}

console.clear();

cars.forEach(function(car){
    console.log(car);
});

console.clear();

//map

const users = [
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:3, name:'Karen'}
];

const ids = users.map(function(user){
    return user.id;
});

ids.forEach(function(id){
    console.log(id);
});

console.clear();

cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

console.clear();

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

console.clear();

const user ={
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

