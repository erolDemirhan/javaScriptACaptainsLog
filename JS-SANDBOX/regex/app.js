let re;
re = /hello/i;  // /hello/i  i makes it case insensitive without i it's case sensitive
// /hello/g global search

console.log(re);
console.log(re.source);

console.clear();

// exec() - return the result of an array or null

const result = re.exec('hello world');
console.log(result);

console.clear();

const result2 = re.exec('hi world');
console.log(result2);

console.clear();

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

console.clear();

// test - returns true or false

const result3 = re.test('Hello');
console.log(result3); // we have an uppercase in here

console.clear();

// match() return result array or null
const str = 'Hello There';
const result4 = str.match(re);
console.log(result4);

// search() return index of the first match if not found it returns -1

const str2 = 'Erol, Hello There';
const result5 = str2.search(re);
console.log(result5);

// replace() return a new string with some or all of matches of a pattern

const str3 = 'Hello There';
const newStr = str3.replace(re, 'Hi');
console.log(newStr);

