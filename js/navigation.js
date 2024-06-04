function openMobileMenu(navList) {
    navList.style.display = 'flex'
}

function hideMobileMenu(navList) {
    navList.style.display = 'none'
}

window.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.navbar-list')
    const hamburgerButton = document.querySelector('.hamburger')
    const closeButton = document.querySelector('.navbar-button:last-child')

    hamburgerButton.addEventListener('click', () => openMobileMenu(navList))
    closeButton.addEventListener('click', () => hideMobileMenu(navList))
})