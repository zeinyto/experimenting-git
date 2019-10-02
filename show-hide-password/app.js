let pwd = document.getElementById('pass');
let eye = document.getElementById('eyes');

eye.addEventListener('click', toggleClick);

function toggleClick() {

  eye.classList.toggle('active');

  (pwd.type === 'password') ? pwd.type = 'text' : pwd.type = 'password';
}