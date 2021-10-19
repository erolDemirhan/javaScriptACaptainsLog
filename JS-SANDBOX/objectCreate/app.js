const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsAdopted: function(newLastName){
        this.lastName = newLastName;
    }
}

const user = Object.create(personPrototypes);
user.firstName = 'Alex';
user.lastName = 'Doe';
console.log(user);
console.log(user.greeting());
user.getsAdopted('Will');
console.log(user.greeting());

const user2 = Object.create(personPrototypes, {
    firstName: {value: 'Jack'},
    lastName: {value: 'John'}
});

console.log(user2.greeting());

