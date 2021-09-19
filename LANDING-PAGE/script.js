const toggle = document.getElementById('toggle');
const closes = document.getElementById('close');
const opens = document.getElementById('open');
const modal = document.getElementById('modal');

//toggle nav

toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));


//show modal
opens.addEventListener('click', () => modal.classList.add('show-modal'));

// hide modal
closes.addEventListener('click', () => modal.classList.remove('show-modal'));

// hide modal outside click

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);