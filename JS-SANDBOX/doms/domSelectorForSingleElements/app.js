// get element by id
console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').id);

// change styling
document.getElementById('task-title').style.background = '#333';

// change colour to white
document.getElementById('task-title').style.color = '#fff';

// adding padding
document.getElementById('task-title').style.padding = '5px';

// Change content
document.getElementById('task-title').textContent = 'Task List';

// insert html
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// const taskTitle = document.getElementById('task-title'); assign'ından sonra taskTitle'ı alias gibi kullanabiliriz

// document.querySelector();

console.clear();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));//it will gonna get the first h5 if there are more than one h5 in the file

document.querySelector('li').style.color = 'red'; // first one again like above one
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello Emacs';
document.querySelector('li:nth-child(odd)').textContent = 'Odd ones'; // only the first odd effected cause this
// is the single element effector

