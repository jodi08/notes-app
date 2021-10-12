const addBtn = document.querySelector(".add-btn");

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
  notes.foreach((note) => addNote(note))
}

addBtn.addEventListener('click', () => addNote())

function addNote() {
  const newNote = document.querySelector('.note')
    newNote.classList.add('show')
    console.log('it clicked')
  
  
}
function saveNote() {
  const savedNote = localStorage.setItem(newNote)
}
