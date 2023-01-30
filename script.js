const hamburger = document.querySelector('#hamburger');
const logoContainer = document.querySelector('.logo-container');
const navMenu = document.querySelector('nav > ul');
const closeMobileMenu = document.querySelector('#close-mobile-menu');

hamburger.addEventListener('click', function() {
    logoContainer.style.display = 'none';
    hamburger.style.display = 'none';
    navMenu.style.display = 'block';
    closeMobileMenu.style.display = 'block';
})

closeMobileMenu.addEventListener('click', function() {
    logoContainer.style.display = 'block';
    hamburger.style.display = 'block';
    navMenu.style.display = 'none';
    closeMobileMenu.style.display = 'none';
})