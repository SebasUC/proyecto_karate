const carousel = document.querySelector('.carousel')
const carouselInner = carousel.querySelector('.carousel-inner')    
const prev = document.getElementById('prev')
const next = document.getElementById('next')

const itemContent = document.querySelector('.content-wrapper')
const itemTitle = document.getElementById('content-title')
const itemText = document.getElementById('content-text')

function createItems() {
    const items = []
    for (let i = 0; i < services.length; i++) {
        const service = services[i]
        const item = document.createElement('article')
        item.classList.add('carousel-item')

        const p = document.createElement('p')
        p.innerText = i
    
        const img = document.createElement('img')
        img.src = service.img
    
        item.appendChild(p)
        item.appendChild(img)
        carouselInner.appendChild(item)
        items.push(item)
    }

    return items
}

function slide(items) {
    var {
        visibleSlides, 
        firstSlidePosition, 
        lastSlidePosition,
        slideSize,
        slideLength
    } = calculateSizes()

    var first = items[0], 
        last = items[slideLength - 1],
        firstClone = first.cloneNode(true),
        lastClone = last.cloneNode(true),
        index = 0,
        allowShifting = true
    
    firstClone.classList.add('clone')
    lastClone.classList.add('clone')
    
    // Agregar el clón del último como primero
    carouselInner.insertBefore(lastClone, first)

    // Agregar el clón del primero como último elemento
    carouselInner.appendChild(firstClone)

    prev.addEventListener('click', () => shiftSlide(-1))
    next.addEventListener('click', () => shiftSlide(1))

    window.addEventListener('resize', calculateSizes)
    carouselInner.addEventListener('transitionend', checkIndex)

    // Actualizar texto
    updateText(index)

    function calculateSizes() {
        let visibleSlides, 
            firstSlidePosition, 
            lastSlidePosition,
            slideSize = 250, // 250px de ancho
            slideLength = items.length

        if (window.matchMedia('(max-width: 800px)').matches) {
            // Móvil
            visibleSlides = 1
            carouselInner.style.left = `-${slideSize}px`

            firstSlidePosition = -1 * slideSize
            lastSlidePosition = -1 * slideSize * slideLength
        } else {
            // Tablet y PC
            visibleSlides = 3
            carouselInner.style.left = '0px'
            
            firstSlidePosition = 0
            // El útlimo slide se encuentra en la penúltima posición (la última muestra la copia del primer elemento)
            lastSlidePosition = -1 * slideSize * (slideLength - 1)
        }

        carousel.style.width = `${visibleSlides * slideSize}px`

        return { visibleSlides, firstSlidePosition, lastSlidePosition, slideSize, slideLength }
    }

    function shiftSlide(direction) {
        carouselInner.classList.add('shifting')

        if (allowShifting) {

            const currentValue = carouselInner.offsetLeft

            // Siguiente slide
            if (direction == 1) {
                carouselInner.style.left = (currentValue - slideSize) + 'px'
                index++
            } else if (direction == -1) {
                carouselInner.style.left = (currentValue + slideSize) + 'px'
                index--
            }
        }

        allowShifting = false
    }

    function checkIndex() {
        carouselInner.classList.remove('shifting')

        // Si se mueve hacia atrás del inicio
        if (index == -1) {
            // Colocar en el último slide
            // carouselInner.style.left = -(slideSize * slideLength) + 'px'
            carouselInner.style.left =  lastSlidePosition + 'px'
            index = slideLength - 1
        } else if (index == slideLength) {
            // carouselInner.style.left = -(slideSize) + 'px'
            carouselInner.style.left = firstSlidePosition + 'px'
            index = 0
        }

        animateContentWrapper(index)

        allowShifting = true
    }

    function animateContentWrapper(index) {
        // itemContent.scrollIntoView({ behavior: 'smooth' })
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
}

// Slides
slide(createItems())