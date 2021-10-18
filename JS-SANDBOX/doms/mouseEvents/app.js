const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
clearBtn.addEventListener('click', runEvent);

// double click
clearBtn.addEventListener('dblclick', runEvent);

// mouse down
clearBtn.addEventListener('mousedown', runEvent); // that means click AND hold

// mouse up
clearBtn.addEventListener('mouseup', runEvent); // mouse click than up

// mouse enter
card.addEventListener('mouseenter', runEvent);

// mouse leave 
card.addEventListener('mouseleave', runEvent);

// mouse over
card.addEventListener('mouseover', runEvent);

// mouse out
card.addEventListener('mouseout', runEvent);

// mouse over ve mouse out element içindeki elementte de çalışır... mouse enter mouse leave parent elementte çalışır

// mouse move
card.addEventListener('mousemove', runEvent); // good for games or interactive web sites




// event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault();
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}