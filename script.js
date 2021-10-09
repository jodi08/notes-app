const addNote = document.querySelector(".btn");
const note = document.getElementById('note');

addNote.addEventListener('click', addNewNote())

function addNewNote() {
  const newNote = document.createElement('div')
  newNote.classList.add('note')
  newNote.innerHTML = note.value
  newNote.appendChild
  
}
  

