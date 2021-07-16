window.addEventListener('DOMContentLoaded', () => {
    const mainBtn = document.querySelector('.btn'),
          rulesLink = document.querySelector('.footer__link'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__close'),
          overlay = document.querySelector('.overlay');

    mainBtn.addEventListener('click', () => {
        console.log('Button clicked');
    })

    rulesLink.addEventListener('click', () => {
        overlay.style.display = "block";
        modal.style.display = "block";
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    window.addEventListener('keydown', (evt) => {
        if(evt.keyCode == 27) {
            modal.style.display = "none";
        }
    })
});