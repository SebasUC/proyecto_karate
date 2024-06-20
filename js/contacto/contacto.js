document.addEventListener('DOMContentLoaded', function() {
    let activeForm

    const handleClick = (button) => {
        const formId = button.dataset.formId
        const form = document.getElementById(formId)

        if (form == null) {
            console.log(`No se pudo encontrar un formulario para el id "${formId}"`)
            return
        }

        if (activeForm !== undefined) {
            activeForm.classList.remove('is-active')
            activeForm.style.transition = ''
        }
        scrollToComponent(form)
        activeForm = form
    }

    const scrollToComponent = (form) => {
        form.classList.add('is-active')
        form.scrollIntoView({ behavior: 'smooth' })
        form.style.opacity = 0

        setTimeout(() => {
            form.style.transition = 'opacity 0.85s'
            form.style.opacity = 1
        }, 10);
    }
    
    const contactButtons = document.getElementsByClassName('contactButton')
    Array.from(contactButtons).forEach((button) => button.addEventListener('click', () => handleClick(button)));
})