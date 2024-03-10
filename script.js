const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const alunoLink = document.querySelector('.nav-links li a[href="#"]');
const navLinks2 = document.querySelector('.nav-links2');

burger.addEventListener('click', () => {
  toggleNav();
});

alunoLink.addEventListener('click', (event) => {
  event.preventDefault();
  toggleNav2();
});

function toggleNav() {
  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
  });

  burger.classList.toggle('toggle');
}

function toggleNav2() {
  navLinks2.style.display = (navLinks2.style.display === 'none') ? 'block' : 'none';
}
