const humburgerManu = document.querySelector('.mobileManu-icon');
const mobileNavLinks = document.querySelector('.mobile-navLinks');

humburgerManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle("navManu")
})


