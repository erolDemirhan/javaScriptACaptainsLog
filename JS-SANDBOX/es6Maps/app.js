// Maps are key value pairs - can use any types as key or value

const map1 = new Map();

// set some keys

const   key1 = 'some string',
        key2 = {},
        key3 = function(){};

// set map values by key

map1.set(key1, 'V4lu3 of k3y 0n3');
map1.set(key2, 'V41u3 0f k3y 0n3');
map1.set(key3, 'vAlu3 of k3y 0n€');

console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// count the values
console.log(map1.size);

// iterating throuhg the map

// loop using for of to get keys and values

console.log('loop is about to start');

for(let [key, value] of map1){
    console.log(`${key} = ${value}`);
}

// iterate keys only

console.log('iterate over keys');

for(let key of map1.keys()){
    console.log(key);
}

// iterate over values

console.log('iterate over values');

for(let value of map1.values()){
    console.log(value);
}


console.clear();

// loop foreach

map1.forEach(function(value, key){
    console.log(`${key} = ${value}`);
});

// convert to array

console.clear();

const keyValArr = Array.from(map1);
console.log(keyValArr);

// create array of the values

const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);

