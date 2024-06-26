const carousel = document.querySelector('.carousel')
const carouselInner = carousel.querySelector('.carousel-inner')    
const prev = document.getElementById('prev')
const next = document.getElementById('next')

function slide(items, slideSize, slideHeight, allowMultipleImagesOnBiggerScreens = true) {
    var {
        firstSlidePosition, 
        lastSlidePosition,
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

    /*
    Actualizar texto
    Si encuentra la función, la llama (en otro archivo JS)
    */
    if (updateText) {
        updateText(index)
    }

    function calculateSizes() {
        let visibleSlides, 
            firstSlidePosition, 
            lastSlidePosition,
            slideLength = items.length

        if (!allowMultipleImagesOnBiggerScreens || window.matchMedia('(max-width: 800px)').matches) {
            // Móvil
            visibleSlides = 1

            firstSlidePosition = -1 * slideSize
            
            // El último slide se encuentra en la última posición
            lastSlidePosition = -1 * slideSize * slideLength
        } else {
            // Tablet y PC
            visibleSlides = 3
            carouselInner.style.left = '0px'
            
            firstSlidePosition = 0
            
            // El útlimo slide se encuentra en la penúltima posición (la última muestra la copia del primer elemento)
            // Esto se hace porque al haber 3 slides visibles se debe colocar en el centro el actual
            lastSlidePosition = -1 * slideSize * (slideLength - 1)
        }

        // Asignar tamaños al carousel para evitar mostrar más de una carta a la vez
        carousel.style.width = `${visibleSlides * slideSize}px`
        carousel.style.height = `${slideHeight}px`
        
        // Se coloca en el primer slide
        carouselInner.style.left = `${firstSlidePosition}px`
        carouselInner.style.height = `${slideHeight}px`

        items.forEach(element => {
            element.style.width = `${slideSize}px`
            element.style.height = `${slideHeight}px`
        });

        return { firstSlidePosition, lastSlidePosition, slideSize, slideLength }
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
            carouselInner.style.left =  lastSlidePosition + 'px'
            index = slideLength - 1
        } else if (index == slideLength) {
            // Colocar en el primer slide cuando se dirija después del último
            carouselInner.style.left = firstSlidePosition + 'px'
            index = 0
        }

        // Si encuentra la función, la llama (en otro archivo JS)
        if (onCarouselSwap) {
            onCarouselSwap(index)
        }

        allowShifting = true
    }
}