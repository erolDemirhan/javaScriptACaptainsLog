const id = 100;

if(id == 100){
    console.log('correct');   
}else{
    console.log('incorrect');
}

if(id === 100){ // id !== 100 it is 100 okey but it is string
    console.log('equal value and type');
}else{
    console.log('incorrect');
}

console.clear();

if(typeof id !== 'undefined'){ // in the case of id is not defined in this file
    console.log(`The id is ${id}`);
}else{
    console.log('No id');
}

console.log(id === 100 ? 'correct' : 'incorrect');

// rest of the things are the same that you already familiar from other languages

const color = 'red';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

