// sets are basically unique values of any type

const set1 = new Set();

// add values
set1.add(100);
set1.add('A string');
set1.add({userName: 'John'});
set1.add(true);
set1.add(100); // it didn't add again

console.log(set1);

const set2 = new Set([1, true, 'string']);
console.log(set2);

// -----------------------------

// get count
console.log(set1.size);

// check values
console.log(set1.has(100));
console.log(set1.has(30+40+30));
console.log(set1.has({userName: 'John'})); // print out false cause it stays in heap memory its not a primitive type like number or boolean or string


// delete from the set

set1.delete(100);

console.log(set1);

// iterate from set
console.clear();

for(let item of set1){
    console.log(item);
}


console.clear();
set1.forEach((value) => {
    console.log(value);
});

// convert to array

const setArr = Array.from(set1);
console.log(setArr);

