const person = {
    firstName: 'Jeffrey',
    lastName: 'Murdock',
    age: 33,
    email: 'jeffrey_murdock@gmail.com',
    hobbies: ['music', 'sport'],
    address:{
        city: 'London',
        state: 'Ln'
    },
    getBirthYear: function(){
        return 2021 - this.age;
    }
}

let val;

val = person;
console.log(val);

console.clear();
// get specific val

val = person.firstName;
console.log(val);

val = person.hobbies[0];
console.log(val);

val = person.address.city;
console.log(val);

val = person.getBirthYear();
console.log(val);

console.clear();

const people = [
    {name: 'John', age: 30},
    {name: 'William', age: 43}
];

for(let i = 0; i<people.length; i++){
    console.log(people[i].name, people[i].age);
}

