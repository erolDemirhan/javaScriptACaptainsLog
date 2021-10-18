const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// focus
// taskInput.addEventListener('focus', runEvent); when i click inside of the input box

// blur
// taskInput.addEventListener('blur', runEvent); click input than click somewhere else than it works

// cut
// taskInput.addEventListener('cut', runEvent); // mouse ile cut

// paste
// taskInput.addEventListener('paste', runEvent);

// input   paste and cut is also an input event
// taskInput.addEventListener('input', runEvent);

// change
select.addEventListener('change', runEvent); // so when i click to the select option value it will console out change

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    //heading.innerText = e.target.value;
    // get input value
    //console.log(taskInput.value);
    //e.preventDefault();
}