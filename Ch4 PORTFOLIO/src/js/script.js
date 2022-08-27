const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  close = document.querySelector('.menu__close'),
  menuOverlay = document.querySelector('.menu__overlay');


hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

close.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menuOverlay.addEventListener('click', () => {
  menu.classList.toggle('active');
});
