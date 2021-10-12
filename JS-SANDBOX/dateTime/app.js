let val;

const today = new Date();
val = today;
console.log(val);

console.clear();

const birthdate = new Date('01-06-1988 21:00:00');
val = birthdate;
console.log(val);

const diffVers = new Date('January 06 1988');
const diffVers2 = new Date('01/06/1988');
console.log(diffVers);
console.log(diffVers2);

console.clear();

val = today.getMonth();
console.log(val);

val = today.getDate();
console.log(val);

val = today.getDay();
console.log(val);

val = today.getFullYear();
console.log(val);

val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

console.clear();

val = today.getTime();
console.log(val);

birthdate.setMonth(0); // date and full year is changable also
console.log(birthdate);

