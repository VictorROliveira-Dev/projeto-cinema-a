const btn = document.querySelector('.button-modes');
const container = document.querySelector('.container');

btn.onclick = function () {
    this.classList.toggle('active')
    container.classList.toggle('active');
}