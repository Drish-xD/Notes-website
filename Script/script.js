// intiialising AOS

AOS.init({
    offset: 100,
    duration: 1200,
    once: false,
});

// Overflow hidden 

var menu = document.querySelector('.hamburger-icon');
menu.addEventListener('click', () => {
    document.body.classList.toggle('normal');
    document.body.classList.toggle('hidden');
});

// hamburger close
document.querySelectorAll('.drawer-list ul a').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.hamburger-icon').click();
    }, 2000);
});

// Theme Toggler

var toggler = document.querySelector('.theme-toggle');
var selection = document.querySelectorAll('body, .drawer-list, .hamburger-icon, .notes-link, .btn, footer, .form input, .file-dummy');

const changeThemeToDark = () => {
    console.log("dark");
    toggler.classList.remove('dawn');
    toggler.classList.add('dusk');
    selection.forEach(function (element) {
        element.classList.remove("light");
        element.classList.add("dark");
    });
    document.querySelector('.main-img').classList.remove('normal');
    document.querySelector('.main-img').classList.add('invert');
    localStorage.setItem("data-theme", "dark");
}

const changeThemeToLight = () => {
    console.log("llight");
    toggler.classList.add('dawn');
    toggler.classList.remove('dusk');
    selection.forEach(function (element) {
        element.classList.add("light");
        element.classList.remove("dark");
    });
    document.querySelector('.main-img').classList.add('normal');
    document.querySelector('.main-img').classList.remove('invert');
    localStorage.setItem("data-theme", "light");
}

toggler.addEventListener('click', () => {
    let theme = localStorage.getItem('data-theme')
    if (document.body.classList.contains("light")) {
        changeThemeToDark()
        console.log(theme);
    } else {
        changeThemeToLight()
        console.log(theme);
    }
});

window.onload = changetheme();

function changetheme() {
  const theme = localStorage.getItem('data-theme')

  if (theme != null && theme === "dark") {
    changeThemeToDark()
  } else {
    changeThemeToLight()
  }
}