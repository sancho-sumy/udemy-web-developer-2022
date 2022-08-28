const menu = document.querySelector('.menu');

document.querySelector('.hamburger').addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelector('.menu__close').addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelector('.menu__overlay').addEventListener('click', () => {
  menu.classList.toggle('active');
});
