document.addEventListener('DOMContentLoaded', function() {
    const faqs = [
        { 
            question: '¿Qué es el karate?', 
            answer: 'El karate es un arte marcial japonés que combina técnicas de golpes, patadas, y defensas para mejorar la autodefensa y la disciplina personal.' 
        },
        { 
            question: '¿A partir de qué edad pueden los niños empezar a practicar karate?', 
            answer: 'Los niños pueden empezar a practicar karate desde los 4 años, ya que las clases están adaptadas para su desarrollo físico y mental.' 
        },
        { 
            question: '¿El karate es seguro para los niños?', 
            answer: 'Sí, el karate es seguro para los niños. Nuestros instructores están capacitados para enseñar de manera segura y divertida, fomentando el respeto y la disciplina.' 
        },
        { 
            question: '¿Necesito experiencia previa para unirme a las clases de karate?', 
            answer: 'No, no necesitas experiencia previa. Ofrecemos clases para principiantes, donde aprenderás las bases del karate desde cero.' 
        },
        { 
            question: '¿Qué beneficios tiene practicar karate?', 
            answer: 'El karate mejora la condición física, la coordinación, la concentración, y la confianza en uno mismo, además de enseñar habilidades de autodefensa.' 
        },
        { 
            question: '¿Qué debo llevar a mi primera clase de karate?', 
            answer: 'Para tu primera clase de karate, solo necesitas ropa cómoda. Más adelante, te indicaremos cómo adquirir el uniforme adecuado (karategi).' 
        },
        { 
            question: '¿Con qué frecuencia debo asistir a las clases?', 
            answer: 'Recomendamos asistir a las clases al menos dos veces por semana para progresar adecuadamente y aprovechar todos los beneficios del entrenamiento.' 
        },
        { 
            question: '¿El karate ayuda a mejorar la disciplina?', 
            answer: 'Sí, el karate fomenta la disciplina a través de la práctica constante, el respeto hacia los demás, y la superación de desafíos personales.' 
        },
        { 
            question: '¿Cuánto tiempo se tarda en obtener un cinturón negro?', 
            answer: 'El tiempo para obtener un cinturón negro varía según la dedicación y el progreso del estudiante, pero generalmente lleva entre 3 y 5 años de entrenamiento constante.' 
        },
        { 
            question: '¿Ofrecen clases para adultos?', 
            answer: 'Sí, ofrecemos clases para adultos de todas las edades y niveles de habilidad, desde principiantes hasta avanzados.' 
        },
        { 
            question: '¿El karate puede ayudar a perder peso?', 
            answer: 'Sí, el karate es un excelente ejercicio cardiovascular que ayuda a quemar calorías, mejorar la resistencia y contribuir a la pérdida de peso.' 
        },
        { 
            question: '¿Puedo hacer karate si tengo una condición médica?', 
            answer: 'En muchos casos, sí. Te recomendamos consultar a tu médico antes de comenzar y comunicar cualquier condición médica a nuestros instructores.' 
        },
        { 
            question: '¿Hay competencias en karate?', 
            answer: 'Sí, organizamos competencias internas y también participamos en torneos locales y nacionales para aquellos interesados en competir.' 
        },
        { 
            question: '¿Qué diferencia al karate de otros artes marciales?', 
            answer: 'El karate se enfoca en técnicas de golpes, patadas y bloqueos con un fuerte énfasis en la disciplina y el respeto, diferenciándose de otras artes marciales por su estilo y filosofía únicos.' 
        },
        { 
            question: '¿Cómo puedo inscribirme en las clases de karate?', 
            answer: 'Puedes inscribirte en nuestras clases de karate visitando nuestra escuela, llamándonos por teléfono, o a través de nuestro sitio web, donde encontrarás toda la información necesaria.' 
        }
    ];
    
    const openIcon = '<i class="fa-solid fa-arrow-up"></i>'
    const closedIcon = '<i class="fa-solid fa-arrow-down"></i>'
    
    const faqList = document.querySelector('.faqList')
    const searchInput = document.querySelector('.search-input')
    
    function renderFAQs(filter = '') {
        faqList.innerHTML = '<hr>'
        const filteredFAQs = faqs.filter(faq => 
            faq.question.toLowerCase().includes(filter) ||  faq.answer.toLowerCase().includes(filter)
        )
    
        if (filteredFAQs.length == 0) {
            // Vacío, mostrar feedback
            faqList.innerHTML = '<strong>¡No pudimos encontrar lo que buscabas!</strong>'
        } else {

            filteredFAQs.forEach(faq => {
                const faqItem = document.createElement('div')
                faqItem.classList.add('faq-item')
                faqItem.innerHTML = `
                        <button class="faq-question">
                            ${faq.question}
                            <span class="faq-icon">${closedIcon}</span>
                        </button>
                        <div class="faq-answer"><p>${faq.answer}</p></div>
                        <hr>
                    `
                faqList.appendChild(faqItem);
        
                faqItem.querySelector('.faq-question').addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector('.faq-icon')
        
                    if (answer.classList.contains('is-active')) {
                        answer.classList.remove('is-active')
                        icon.innerHTML = closedIcon
                    } else {
                        answer.classList.add('is-active')
                        icon.innerHTML = openIcon
                    }
                })
            })
        }
    }
    
    searchInput.addEventListener('input', function() {
        renderFAQs(searchInput.value.toLowerCase())
    })
    
    renderFAQs()
})