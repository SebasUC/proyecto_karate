class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div></div>`
    }
}

customElements.define('custom-footer', Footer)