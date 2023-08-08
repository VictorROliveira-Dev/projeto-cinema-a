const btn = document.querySelector('.button-modes');
const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelector('.nav-link');
const secondlink = document.querySelector('.navegator-link');
const menuicon = document.querySelector('.navbar-toggler-icon');

btn.onclick = function () {
    this.classList.toggle('modechange')
    container.classList.toggle('modechange');
    navbar.classList.toggle('modechange');
    navlink.classList.toggle('modechange');
    secondlink.classList.toggle('modechange');
    menuicon.classList.toggle('modechange');
}