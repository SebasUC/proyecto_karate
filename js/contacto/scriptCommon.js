export const resetForm = (form) => {
    form.reset()
    form.querySelectorAll('.input-error').forEach((input) => {
        input.classList.remove('input-error'); // Remueve la clase si el campo está lleno (opcional)
    })
}