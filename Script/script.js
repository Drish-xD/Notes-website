// intiialising AOS

AOS.init();

// Theme Toggler

var toggler = document.querySelector('.theme-toggle');
toggler.addEventListener('click', () => {
    toggler.classList.toggle('dawn');
    toggler.classList.toggle('dusk');
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    document.querySelector('.hamburger-icon').classList.toggle('light');
    document.querySelector('.hamburger-icon').classList.toggle('dark');
    document.querySelector('.main-img').classList.toggle('normal');
    document.querySelector('.main-img').classList.toggle('invert');
    document.querySelector('footer').classList.toggle('light');
    document.querySelector('footer').classList.toggle('dark');
    document.querySelectorAll('.notes-link').forEach(function (element) {
        element.classList.toggle("light");
        element.classList.toggle("dark");
    });
});