const toggle = document.querySelector('.nav__toggle')
const links = document.querySelector('.nav__links')
const btnSwitch = document.querySelector('#switch');


toggle.addEventListener('click', () => {
    links.classList.toggle('nav__toggle--active')
})

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')

    // Guardado en Local Storage

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
})

// Comprobando modo actual

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark')
    btnSwitch.classList.toggle('active')
} else {
    document.body.classList.remove('dark')
    btnSwitch.classList.remove('active')
}
