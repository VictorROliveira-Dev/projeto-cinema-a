const btn = document.querySelector('.button-modes');
const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const menuicon = document.querySelector('.navbar-toggler-icon');
let footer = document.querySelectorAll('footer');
let footer_link = document.querySelectorAll('a');
let footer_text = document.querySelectorAll('p');

btn.onclick = function () {
    this.classList.toggle('modechange')
    container.classList.toggle('modechange');
    navbar.classList.toggle('modechange');
    menuicon.classList.toggle('modechange');

    footer.forEach(el => {
        el.classList.toggle('modechange');
    })

    footer_text.forEach(el => {
        el.classList.toggle('modechange');
    })

    footer_link.forEach(el => {
        el.classList.toggle('modechange');
    })
}