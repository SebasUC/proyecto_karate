const template = document.createElement('template');

// Definir el contenido del Shadow DOM
template.innerHTML = `
    <style>
        @import "./components/nav-bar.css";
    </style>
    <nav class="navbar">
        <button class="burger">
            <img src="assets/hamburger.png">
        </button>

        <ul class="navbar-list">
            <li class="navbar-button"><a class="navbar-link" href="index.html">Inicio</a></li>
            <li class="navbar-button"><a class="navbar-link">Blog</a></li>
            <li class="navbar-button"><a class="navbar-link">Nosotros</a></li>
            <li class="navbar-button"><a class="navbar-link">Contacto</a></li>
            <li class="navbar-button"><a class="navbar-link" href="acercaNosotros.html">Acerca de</a></li>
            <li class="navbar-button"><a class="navbar-link" href="faq.html">FAQ</a></li>
            <li class="navbar-button"><a class="navbar-link">Cerrar</a></li>
        </ul>
    </nav>
`;

class NavBar extends HTMLElement {

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const hamburgerButton = this.shadowRoot.querySelector('.burger');
        const closeButton = this.shadowRoot.querySelector('.navbar-button:last-child');

        hamburgerButton.addEventListener('click', this.openMobileMenu);
        closeButton.addEventListener('click', this.hideMobileMenu);
    }

    openMobileMenu = (e) => {
        const navList = this.shadowRoot.querySelector('.navbar-list');
        if (navList) {
            navList.style.display = 'flex';
        }
    }

    hideMobileMenu = (e) => {
        const navList = this.shadowRoot.querySelector('.navbar-list');
        if (navList) {
            navList.style.display = 'none';
        }
    }
}

customElements.define('nav-bar', NavBar);
