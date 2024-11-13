const hamburger = document.getElementById('hamburger');
const menu = document.getElementsByClassName('menu')[0];
const heading = document.getElementById('heading');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('align-self-end');
  heading.classList.toggle('hide');
  header.classList.toggle('full-width');
  nav.classList.toggle('full-width');

  if (menu.classList.contains('show')) {
    hamburger.innerHTML = 'X';
  } else {
    hamburger.innerHTML = '&#9776;';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    menu.classList.remove('show');
    hamburger.innerHTML = '&#9776;';
    hamburger.classList.remove('align-self-end');
    heading.classList.remove('hide');
    header.classList.remove('full-width');
    nav.classList.remove('full-width');
  }
});