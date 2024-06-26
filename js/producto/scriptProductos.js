window.addEventListener('DOMContentLoaded', () => {
    const productId = new URLSearchParams(window.location.search).get('id')
    if (productId) {
        loadProduct(productId)
    }
})

function loadProduct(productId) {
    const product = products.find(product => product.id == productId)

    if (product) {
        const productContainer = document.querySelector('.product-container'),
              productHeader = document.querySelector('.product-header'),
              headerWidth = productHeader.offsetWidth,
              pictureContainer = document.querySelector('.picture-container'),
              productPricing = document.querySelector('.product-pricing'),
              priceTag = productPricing.querySelector('.price-tag'),
              productDetails = document.querySelector('.product-details')
              productInfo = document.querySelector('.product-info')
              productDescription = document.querySelector('.product-description')
              carouselItems = createCarouselItems(),
              { width, height } = calculateCarouselSize()
        
        productHeader.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
        `

        const details = [
            { name: 'Edad', value: product.age },
            { name: 'Tamaño', value: product.size },
            { name: 'Información adicional', value: product.additionalInfo },
            { name: 'Marca', value: product.brand || 'Sin especificar' }
        ]
        
        productDetails.innerHTML = '<hr/> <h3>Detalles</h3>'
        details.forEach(detail => {
            const item = document.createElement('div')
            item.innerHTML = `
                <b>${detail.name}:</b> ${detail.value}
            `

            productDetails.appendChild(item)
        })
        productDetails.appendChild(document.createElement('hr'))


        priceTag.innerText += `${product.price}`

        productInfo.innerHTML = '<h3>Información del Producto</h3>'
        product.info.forEach(text => {

            const item = document.createElement('p')
            item.innerText = text

            productInfo.appendChild(item)
        });
        productInfo.appendChild(document.createElement('hr'))

        productDescription.innerHTML = '<h3>Especificaciones</h3>'
        product.about.forEach(element => {
            const text = element.text

            const item = document.createElement('li')
            item.innerText = text

            productDescription.appendChild(item)
        });
        productDescription.appendChild(document.createElement('hr'))

        // Cargar carousel
        console.log(width)
        slide(carouselItems, width, height, false)

        function createCarouselItems() {
            const items = []
            for (let i = 0; i < product.pictures.length; i++) {
                const picture = product.pictures[i]
                const item = document.createElement('article')
                item.classList.add('carousel-item')
            
                const img = document.createElement('img')
                img.src = picture
            
                item.appendChild(img)
                carouselInner.appendChild(item)
                items.push(item)
            }
        
            return items
        }

        function calculateCarouselSize() {
            let width, height

            if (window.matchMedia('(min-width: 1400px)').matches) {
                width = 400
                height = 400
            } else if (window.matchMedia('(min-width: 1200px)').matches) {
                width = 300
                height = 300
            } else if (window.matchMedia('(min-width: 992px)').matches) {
                width = 250
                height = 250
            } else {
                height = 400
                width = headerWidth * 0.8
            }

            return { width, height }
        }
    }
}

function onCarouselSwap(index) {

}

function updateText(index) {}
