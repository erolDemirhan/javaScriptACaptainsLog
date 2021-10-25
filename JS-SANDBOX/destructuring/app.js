// destructuring a assignment

let a, b;

[a, b] = [100, 200];
// rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(a);
console.log(b);
console.log(rest);

({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(a, b);
console.log(rest);

console.clear();

// array destructuring

const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

console.clear();

// parse array return from the function

function getPeople(){
    return ['John', 'Beth', 'Mike'];
}

let person4, person5, person6;
[person4, person5, person6] = getPeople();
console.log(person4, person5, person6);

console.clear();

// object destructuring

const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello');
    }
}

// old es5 way

// const   name = person.name,
//         age = person.age,
//         city = person.city,
//         gender = person.gender;
    
// new es6 way

const { name, age, city, gender, sayHello } = person;

console.log(name, age, city, gender);

sayHello();

