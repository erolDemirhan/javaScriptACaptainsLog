function myFunc(){
    return 'Hello';
}

console.log(myFunc());


async function myFuncAsync(){ // now we did make it promise
    return 'Async Hello';
}

myFuncAsync()
    .then(res => console.log(res));


async function myFuncAsyncAwait(){
        const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Async Await'), 1000);
    });

    const res = await promise; // wait until promise is resolved
    return res;
}

myFuncAsyncAwait()
    .then(res => console.log(res));

async function myFuncWithErr(){
        const promise = new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Hello'), 1000);
    });

    const error = true;

    if(!error){
        const res = await promise; // wait until promise is resolved
        return res;
    }else{
        await Promise.reject(new Error('Something went wrong!'));
    }
}

myFuncWithErr()
    .then(res => console.log(res))
    .catch(err => console.log(err));

// best case of async await usage

async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // only proceed once its resolved
    const data = await response.json();
    // only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));

