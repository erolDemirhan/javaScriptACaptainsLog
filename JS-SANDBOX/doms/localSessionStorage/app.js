// // set local storage item
//  localStorage.setItem('firstName', 'John');
//  localStorage.setItem('age', '23');

// set session storage item
//sessionStorage.setItem('name', 'Damien');

// the main difference between two of them is when you close the browser
// sessionStorage will be reset but the localStorage will stay until you delete it

// remove from storage
//localStorage.removeItem('name');

// get from the storage
// const firstName = localStorage.getItem('firstName');
// const age = localStorage.getItem('age');
// localStorage.clear();
// console.log(firstName, age);

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');
    e.preventDefault();
});