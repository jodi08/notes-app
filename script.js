const addBtn = document.querySelector(".add-btn");
const logoutBtn = document.querySelector('.btn-logout');

const notes = JSON.parse(localStorage.getItem('savedNotes'));

if(notes) {
  notes.foreach((note) => addNote(note))
}
logoutBtn.addEventListener('click', (e) => {
  e.preventDefault()
  username = ''
  password = ''
  window.location.replace('/login.html')
  console.log('it worked')
})

addBtn.addEventListener('click', () => addNote())

function addNote() {
  const newNote = document.querySelector('.note')
    newNote.classList.add('show')
    console.log('it clicked')
  
  
}
function saveNote() {
  const savedNote = localStorage.setItem('notes', JSON.stringify(notes))
}
