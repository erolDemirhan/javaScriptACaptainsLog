// iterator

function nameIterator(names){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < names.length ?
            {value: names[nextIndex++], done:false} :
            {done: true}
        }
    }
}

// create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

console.clear();
// generators

function* sayNames(){
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const username = sayNames();

console.log(username.next().value);
console.log(username.next().value);
console.log(username.next().value);
console.log(username.next().value);

console.clear();

function* createIds(){
    let index = 0;
    while(true){
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

