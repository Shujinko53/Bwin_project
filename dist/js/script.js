window.addEventListener('DOMContentLoaded', () => {
    const mainBtn = document.querySelector('.btn'),
          rulesLink = document.querySelector('.footer__link'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__close');

    mainBtn.addEventListener('click', () => {
        console.log('Button clicked');
    })

    rulesLink.addEventListener('click', () => {
        modal.style.display = "block";
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = "none";
    });
});