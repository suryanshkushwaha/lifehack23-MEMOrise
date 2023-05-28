/*=============== TYPES ===============*/
const modalViews = document.querySelectorAll('.type__modal')
        modalBtns = document.querySelectorAll('.type__button')
        modalCloses = document.querySelectorAll('.type__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})