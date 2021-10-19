// person constructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// customer constructor

function Customer(firstName, lastName, phoneNumber, memberShip){
    Person.call(this, firstName, lastName);

    this.phoneNumber = phoneNumber;
    this.memberShip = memberShip;
}

//------------------INHERTANCE----------------
// inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;
//------------------INHERTANCE----------------


// create a customer
const customer1 = new Customer('Alex', 'Will', '555-555-55-55', 'Premium');
console.log(customer1);

// Customer greeting OVERRIDED
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}


console.log(customer1.greeting());

