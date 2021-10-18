// event bubbling is the concept of arrivial to the parent from the element that occurs and event
// delagation is the reverse of it


// event bubbling first

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// at the end of that i just clicked on task list than every element has bubbled up respectively

// event delegations

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);
// only the first one is working this is why we use delegations

document.body.addEventListener('click', deleteItem);


// function deleteItem(e){
//     if(e.target.className === 'fa fa-remove'){
//         console.log('delete item');
//     }
// }

function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}