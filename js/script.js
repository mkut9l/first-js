const $btn = document.querySelector('.btn')
const $modalContainer = document.querySelector('.container')
const $close = document.querySelector('.close')

function closeModal() {
    $modalContainer.classList.remove('show')
}

function openModal() {
    $modalContainer.classList.add('show')
}

$btn.addEventListener('click', () => {
    openModal()
})

$close.addEventListener('click', () => {
    closeModal()
})

$accept.addEventListener('click', () => {
    const askPhoneNumber = prompt('Введите свой номер телефона в формате (551010203)')
    const askText = prompt('Ваш текст...')

    window.open(`https://api.whatsapp.com/send?phone=+996${askPhoneNumber}&text=${askText}`)
})

$modalContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('container')) {
        closeModal()
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape'){
        closeModal()
    }
})