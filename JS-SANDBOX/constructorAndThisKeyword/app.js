// user constructor
function User(userName, dob){
    this.userName = userName; // this is the current instance of the object
    this.birthday = new Date(dob);

    this.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const user = new User('Alex', '6-01-1988');

console.log(user);
console.log(user.calcAge());