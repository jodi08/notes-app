const submitButton = document.querySelector('.btn')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  validate()
})

function validate() {
let username = document.getElementById('username').value
  let password = document.getElementById('password').value
  if(username === "admin" && password === "user"){
    window.location.replace("/index.html");
  }
  else {
    alert('Login failed.');
    window.location.reload();
    username.value = '';
    password.value = '';
  }
}
