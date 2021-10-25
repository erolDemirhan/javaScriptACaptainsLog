try{
    // will produce a ref error
    myFunction();
}catch(e){
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
}finally{
    console.log('finally runs regardless of result...');
}

console.log('Program continues...');

try{
    null.func();
}catch(e){
    console.log(`${e.name}: ITS NULL YOU FOOLS!`);
}finally{
    console.log('finally runs regardless of result...');
}

try{
    eval('test');
}catch(e){
    console.log(e);
}finally{
    console.log('finally runs regardless of result...');
}

console.clear();

try{
    decodeURIComponent('%');
}catch(e){
    console.log(e);
}finally{
    console.log('finally runs regardless of result...');
}

console.clear();

const user = {email: 'jdoe@gmail.com'};

try{
    if(!user.name){
        console.log('User has no name');
    }
}catch(e){

}
finally{
    console.log('finally runs regardless of result...');
}