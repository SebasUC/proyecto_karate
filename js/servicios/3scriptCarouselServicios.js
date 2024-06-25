const carousel = document.querySelector('.carousel')
const carouselInner = carousel.querySelector('.carousel-inner')
const carouselPagination = carousel.querySelector('.carousel-pagination')
const items = []

var currentIndex = 1

const createItems = () => {
    for (let i = 0; i < 3; i++) {
        const item = document.createElement('article')
        item.classList.add('carousel-item')
        item.innerText = '#' + i
    
        const img = document.createElement('img')
        img.src = services[i].img
    
        item.appendChild(img)
        carouselInner.appendChild(item)
        items.push(item)
        item.addEventListener('click', () => swap(i))
    }
}

const render = (innerIndex, imageUrl) => {
    const element = items[innerIndex]
    const img = element.querySelector('img')
    img.src = imageUrl
}

const swap = (newIndex) => {
    if (currentIndex !== newIndex) {
        currentIndex = newIndex
        updateView(currentIndex)

        if (newIndex === 0) {
            const lastChild = items[2]
            carouselInner.removeChild(lastChild)
            carouselInner.insertBefore(lastChild, items[0])
        }
    }
}

const updateView = () => {
    const itemWidth = items[0].clientWidth

    const x = -(itemWidth * (currentIndex))

    carouselInner.style.transition = `transform 0.5s ease`
    carouselInner.style.transform = `translateX(${x}px)`

    items[currentIndex].classList.add('active')
}

createItems()