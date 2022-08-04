const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.primary-nav__link');
const activePage = window.location.pathname;




navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
        
    } else if(visibility === 'true') {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        
    }
})

navLinks.forEach(element => {
    element.addEventListener('click', ()=> {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false) 
    })

    if(element.href.includes(`${activePage}`)) {
        element.classList.add('active')
    }
})

