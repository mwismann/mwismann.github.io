const hamburger = document.querySelector('#hamburger');
const logoContainer = document.querySelector('.logo-container');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('nav > ul');
const closeMobileMenu = document.querySelector('#close-mobile-menu');
const overlay = document.querySelector('#overlay');
const header = document.querySelector('header');

hamburger.addEventListener('click', function() {
    logoContainer.style.display = 'none';
    hamburger.style.display = 'none';
    nav.style.display = 'flex';
    nav.style.width = '100%';
    navMenu.style.display = 'flex';
    closeMobileMenu.style.display = 'block';
    overlay.style.display = 'block';
    header.style.height = '95vh';
    header.style.borderBottomLeftRadius = '1rem';
    header.style.borderBottomRightRadius = '1rem';
    header.style.backgroundColor = 'rgba(255, 255, 255)';
    header.style.flexDirection = 'column';
    header.style.justifyContent = 'flex-start';
    header.style.alignItems = 'flex-start';
})

closeMobileMenu.addEventListener('click', function() {
    logoContainer.style.display = 'block';
    hamburger.style.display = 'block';
    nav.style.display = 'block';
    nav.style.width = 'fit-content';
    navMenu.style.display = 'none';
    closeMobileMenu.style.display = 'none';
    overlay.style.display = 'none';
    header.style.height = 'fit-content';
    header.style.borderRadius = 'none';
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    header.style.flexDirection = 'row';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
})