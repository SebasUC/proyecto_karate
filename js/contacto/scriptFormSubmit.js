import { resetForm } from "./scriptCommon.js"
const forms = document.getElementsByTagName('form')
// const joinForm = document.getElementById('join-form')
// const questionsForm = document.getElementById('questions-form')
// const sponsorshipForm = document.getElementById('sponsorship-form')

const handleSubmit = (event) => {
    event.preventDefault()
    
    const form = event.target
    const formData = new FormData(form)

    const allFieldsFilled = findErrors(form);

    if (!allFieldsFilled) {
        showErrorMessage(1)
        return
    }

    const data = Object.fromEntries(formData.entries())

    resetForm(form)
    showSuccessMessage()
}

const findErrors = (form) => {
    let allFieldsFilled = true

    form.querySelectorAll('[required]').forEach((input) => {
        if (!input.value.trim()) {
            allFieldsFilled = false;
            input.classList.add('input-error'); // Agrega una clase para resaltar el campo vacío (opcional)
        } else {
            input.classList.remove('input-error'); // Remueve la clase si el campo está lleno (opcional)
        }
    })

    return allFieldsFilled
}

const showErrorMessage = (errorCode) => {
    if (errorCode === 1) {
        Toastify({
            text: "Error: Debe llenar todos los campos requeridos.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #56070c, #8f3d38)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}

const showSuccessMessage = () => {
    Toastify({
        text: "¡Muchas gracias por contactarnos! Le contestaremos lo más pronto posible.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

Array.from(forms).forEach((form) => {
    form.addEventListener('submit', handleSubmit)
})