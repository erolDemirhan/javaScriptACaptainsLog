// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = new Date(dob);
    // thisCalculateAge = function(){
    //     const diff = Date.now() - this.birthDay.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// calculate age

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthDay.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// gel full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// adopted
Person.prototype.adoptedBy = function(newLastName){
    this.lastName = newLastName;
}

const user = new Person('Alex', 'Doe', '06-01-1988');
const userTwo = new Person('Jack', 'Will', '11-02-1989');

console.log(userTwo);

console.log(user.calculateAge());

console.log(userTwo.getFullName());

user.adoptedBy(userTwo.lastName);

console.log(user.getFullName());

console.log(user.hasOwnProperty('firstName'));

