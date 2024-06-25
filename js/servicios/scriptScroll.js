const elements = document.querySelectorAll('.main-button')
elements.forEach(element => element.addEventListener('click', onClick))

function onClick() {
    const services = document.querySelector('.carousel-block .content')
    services.scrollIntoView({ behavior: 'smooth' })
}