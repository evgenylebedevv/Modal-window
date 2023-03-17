const btn = document.getElementById('myBtn')
const modal = document.getElementById('myModal')

btn.addEventListener('click', openModal)

function openModal() {
    modal.classList.add('open')
    attachModalEvents()
}

function attachModalEvents() {
    modal.querySelector('.close').addEventListener('click', closeModal)
    document.addEventListener('keydown', handleEscape)
    modal.addEventListener('click', handleOutside)
}

function closeModal() {
    modal.classList.remove('open')
    detachModalEvents()
}

function detachModalEvents() {
    modal.querySelector('.close').removeEventListener('click', closeModal)
    document.removeEventListener('keydown', handleEscape)
    modal.removeEventListener('click', handleOutside)

}

function handleEscape(event) {
    event.key === 'Escape' ? closeModal() : false
}

function handleOutside(event) {
    !(event.target.closest('.modal-content')) ? closeModal() : false
}
