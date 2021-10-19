class Person {

    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthDay.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getAdopted(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x, y){
        return x+y;
    }
}

const user = new Person('Alex', 'Will', '05-05-1990');
user.getAdopted('Joe');

console.log(user.greeting());
console.log(user.calculateAge());
console.log(Person.addNumbers(2,3));
