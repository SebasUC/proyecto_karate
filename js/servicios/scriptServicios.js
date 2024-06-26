const itemContent = document.querySelector('.content-wrapper')
const itemTitle = document.getElementById('content-title')
const itemText = document.getElementById('content-text')

function createItems() {
    const items = []
    for (let i = 0; i < services.length; i++) {
        const service = services[i]
        const item = document.createElement('article')
        item.classList.add('carousel-item')
    
        const img = document.createElement('img')
        img.src = service.img
        
        item.appendChild(img)
        carouselInner.appendChild(item)
        items.push(item)
    }

    return items
}

function onCarouselSwap(index) {
    itemContent.style.transition = 'opacity 0.2s ease-out'
    itemContent.style.opacity = 0

    setTimeout(() => {
        updateText(index)
        itemContent.style.transition = 'opacity 0.45s ease-in'
        itemContent.style.opacity = 1
    }, 150);
}

function updateText(index) {
    const service = services[index]
    
    itemTitle.innerText = service.name
    itemText.innerText = service.description
}

// Crear slides del carousel
slide(createItems(), 200, 300)