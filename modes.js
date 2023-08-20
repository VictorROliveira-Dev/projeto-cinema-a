const btn = document.querySelector('.button-modes');
const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const menuicon = document.querySelector('.navbar-toggler-icon');
let cards = document.querySelectorAll('.card');
let card_texts = document.querySelectorAll('h5');
let button_cards = document.querySelectorAll('.button-cards');
let modals = document.querySelectorAll('.modal-content');
let modal_texts = document.querySelectorAll('.modal-title');
let button_modal = document.querySelectorAll('.modal-header');
let footer = document.querySelectorAll('footer');
let footer_link = document.querySelectorAll('a');
let footer_text = document.querySelectorAll('p');

btn.onclick = function () {
    this.classList.toggle('modechange')
    container.classList.toggle('modechange');
    navbar.classList.toggle('modechange');
    menuicon.classList.toggle('modechange');

    cards.forEach(el => {
        el.classList.toggle('modechange');
    })

    card_texts.forEach(el => {
        el.classList.toggle('modechange');
    })

    button_cards.forEach(el => {
        el.classList.toggle('modechange');
    })

    modals.forEach(el => {
        el.classList.toggle('modechange');
    })

    modal_texts.forEach(el => {
        el.classList.toggle('modechange');
    })

    button_modal.forEach(el => {
        el.classList.toggle('dark');
    })

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