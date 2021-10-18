// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//     console.log('test');
//     e.preventDefault(); // preventing that default link behaviour which is clear task button 
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    console.log('Clicked');
    e.preventDefault();
    let val;
    val = e;

    // event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Hello'; // when i hit the button it will change to hello
    // event type
    val = e.type;
    // timestamp
    val = e.timeStamp;
    // coords event relative to the window
    val = e.clientY; // button click point
    val = e.clientX; // button click point

    val = e.offsetY; // button click point
    val = e.offsetX; // button click point
    console.log(val);
}
