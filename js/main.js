const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.primary-nav__link');

// Open and close side bar 
navToggle.addEventListener('click', () => {
    const visible = primaryNav.getAttribute('data-visible') === 'true';
    primaryNav.setAttribute('data-visible', !visible);
    navToggle.setAttribute('aria-expanded', !visible);
})

// Close side bar when user clicks on a link
navLinks.forEach(element => {
    element.addEventListener('click', ()=> {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false) 
    })
})