import { resetForm } from "./scriptCommon.js"
let activeForm

const handleClick = (button) => {
    const formId = button.dataset.formId
    const form = document.getElementById(formId)

    if (form == null) {
        console.error(`No se pudo encontrar un formulario para el id "${formId}"`)
        return
    }

    if (activeForm !== undefined) {
        activeForm.classList.remove('is-active')
        activeForm.style.transition = ''
    }
    scrollToComponent(form)
    addActiveClassToSection()
    activeForm = form
}

const addActiveClassToSection = () => {
    const section = document.getElementsByClassName('contact-block')[0]
    section.classList.add('is-form-active')
}

const scrollToComponent = (form) => {
    form.classList.add('is-active')
    form.style.opacity = 0

    setTimeout(() => {
        form.scrollIntoView({ behavior: 'smooth' })
        form.style.transition = 'opacity 0.85s'
        form.style.opacity = 1
        resetForm(form)
    }, 10);
}

const contactButtons = document.getElementsByClassName('contactButton')
Array.from(contactButtons).forEach((button) => button.addEventListener('click', () => handleClick(button)));