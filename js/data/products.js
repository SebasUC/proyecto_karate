const products = [
    {
        id: 1,
        title: 'Casco de Karate para hombre y mujer',
        description: 'Casco de karate de alta calidad para máxima protección y comodidad, apto para niños y adultos.',
        price: 22500,
        age: 'Niños y adultos',
        size: 'Medio',
        additionalInfo: '-',
        pictures: [
            './assets/productos/1/1.jpg',
            './assets/productos/1/2.jpg',
            './assets/productos/1/3.jpg'
        ],
        info: [
            'El casco de karate está diseñado para ofrecer una protección integral durante las sesiones de entrenamiento y competencias. Su estructura está hecha de materiales resistentes que aseguran la durabilidad y la protección contra impactos severos.',
            'Con un diseño ergonómico, este casco es adecuado tanto para hombres como para mujeres de todas las edades. El ajuste cómodo y seguro permite una libertad de movimiento sin comprometer la seguridad del usuario.',
            'Además, el casco cuenta con un sistema de ventilación que ayuda a mantener la cabeza fresca y seca, lo que es esencial durante los entrenamientos intensivos. Ideal para practicantes de todos los niveles, desde principiantes hasta avanzados.'
        ],
        about: [
            {
                text: 'Este casco de karate está diseñado para proporcionar la máxima protección durante los entrenamientos y competencias. Fabricado con materiales de alta calidad, ofrece durabilidad y resistencia ante impactos.'
            },
            {
                text: 'El casco es adecuado para hombres, mujeres, niños y adultos. Su diseño ergonómico garantiza un ajuste cómodo y seguro, permitiendo libertad de movimiento y una excelente visibilidad.'
            },
            {
                text: 'Disponible en talla mediana, el casco cuenta con un sistema de ventilación que ayuda a mantener la cabeza fresca y seca. Ideal para cualquier nivel de práctica, desde principiantes hasta avanzados.'
            }
        ]
    },
    {
        id: 2,
        title: 'Kategui para Kumite',
        description: 'Kategui ligero y resistente para kumite, diseñado para máxima movilidad y confort.',
        price: 34000,
        age: 'Adultos',
        size: 'Mediano',
        brand: 'Adidas',
        additionalInfo: 'Diseñado para alta movilidad.',
        pictures: [
            './assets/productos/5/1.jpg',
            './assets/productos/5/2.jpg'
        ],
        info: [
            'El kategui para kumite está diseñado para ofrecer la máxima movilidad y confort durante los combates. Fabricado con materiales ligeros y resistentes, permite una gran libertad de movimiento y ventilación.',
            'Es ideal para adultos que participan en competiciones y entrenamientos intensivos, proporcionando un ajuste seguro y cómodo. La tela ligera asegura que el usuario se mantenga fresco y seco durante la práctica.',
            'Este kategui combina durabilidad y funcionalidad, siendo la opción perfecta para los practicantes de kumite que buscan rendimiento y comodidad en cada entrenamiento o competencia.'
        ],
        about: [
            {
                text: 'El kategui para kumite está diseñado para ofrecer la máxima movilidad y confort durante los combates. Fabricado con materiales ligeros y resistentes, permite una gran libertad de movimiento y ventilación.'
            },
            {
                text: 'Es ideal para adultos que participan en competiciones y entrenamientos intensivos, proporcionando un ajuste seguro y cómodo.'
            },
            {
                text: 'El diseño permite una excelente transpirabilidad, manteniendo al practicante fresco y seco durante la práctica.'
            }
        ]
    },
    {
        id: 3,
        title: 'Espinilleras para Karate',
        description: 'Espinilleras resistentes y acolchadas para protección durante el entrenamiento, aptas para todas las edades.',
        price: 15000,
        age: 'Niños y adultos',
        size: 'Medio',
        additionalInfo: 'Material resistente y acolchado.',
        pictures: [
            './assets/productos/3/1.webp',
            './assets/productos/3/2.webp',
            './assets/productos/3/3.webp',
            './assets/productos/3/4.webp',
            './assets/productos/3/5.webp',
            './assets/productos/3/6.webp',
            './assets/productos/3/7.webp',
            './assets/productos/3/8.webp',
            './assets/productos/3/9.webp'
        ],
        info: [
            'Las espinilleras para karate están diseñadas para brindar protección y comodidad durante los entrenamientos y competencias. Están fabricadas con materiales resistentes que absorben los impactos y protegen las espinillas de posibles lesiones.',
            'Son adecuadas tanto para niños como para adultos, ofreciendo un ajuste ergonómico que se adapta a la forma de la pierna. Esto garantiza una protección completa sin sacrificar la movilidad del usuario.',
            'El acolchado adicional proporciona una mayor comodidad y seguridad, haciendo de estas espinilleras la elección perfecta para practicantes de todos los niveles, desde principiantes hasta avanzados.'
        ],
        about: [
            {
                text: 'Las espinilleras para karate están diseñadas para proporcionar protección y confort durante el entrenamiento y las competencias. Están hechas de material resistente que absorbe los golpes y protege las espinillas de lesiones.'
            },
            {
                text: 'Adecuadas para niños y adultos, estas espinilleras ofrecen un ajuste ergonómico que se adapta a la forma de la pierna, garantizando una protección completa sin sacrificar la movilidad.'
            },
            {
                text: 'El acolchado adicional proporciona una mayor comodidad y seguridad, ideal para practicantes de todos los niveles.'
            }
        ]
    },
    {
        id: 4,
        title: 'Bucal para Karate',
        description: 'Bucal de grado médico para protección dental, adecuado para niños y adultos.',
        price: 5000,
        age: 'Niños y adultos',
        size: 'Única',
        additionalInfo: 'Incluye estuche protector.',
        pictures: [
            './assets/productos/2/1.png',
            './assets/productos/2/2.jpg'
        ],
        info: [
            'El bucal para karate está diseñado para proteger los dientes y la mandíbula de los practicantes durante las sesiones de combate. Su fabricación con material de grado médico garantiza una excelente absorción de impactos y comodidad durante su uso.',
            'Es adecuado para niños y adultos, adaptándose fácilmente a la forma de la boca para asegurar un ajuste cómodo y seguro. Este bucal es indispensable para prevenir lesiones dentales durante los entrenamientos y competiciones.',
            'Además, incluye un estuche protector que permite almacenar el bucal de manera higiénica y segura cuando no está en uso, garantizando su durabilidad y limpieza.'
        ],
        about: [
            {
                text: 'El bucal para karate está diseñado para proteger los dientes y la mandíbula durante los combates. Fabricado con material de grado médico, ofrece una excelente absorción de impactos.'
            },
            {
                text: 'Es adecuado para niños y adultos, y se adapta fácilmente a la forma de la boca para un ajuste cómodo y seguro.'
            },
            {
                text: 'El bucal viene con un estuche protector que permite guardarlo de manera higiénica y segura cuando no está en uso.'
            }
        ]
    },
    {
        id: 5,
        title: 'Kategui para Kata',
        description: 'Kategui de alta calidad para kata, ideal para competiciones y entrenamientos formales.',
        price: 37000,
        age: 'Adultos',
        size: 'Mediano',
        brand: 'Adidas',
        additionalInfo: 'Tela de alta calidad.',
        pictures: [
            './assets/productos/4/1.jpg',
            './assets/productos/4/2.jpg',
            './assets/productos/4/3.jpg',
            './assets/productos/4/4.jpg',
            './assets/productos/4/5.jpg',
            './assets/productos/4/6.jpg',
            './assets/productos/4/7.jpg'
        ],
        info: [
            'El kategui para kata está especialmente diseñado para la práctica y competición de kata en karate. Su tela de alta calidad ofrece la resistencia y flexibilidad necesarias para realizar movimientos precisos y fluidos.',
            'Con un diseño tradicional, este kategui proporciona un ajuste cómodo y permite una gran libertad de movimiento, lo cual es esencial para la ejecución de técnicas avanzadas. Está disponible en talla mediana y es ideal para adultos.',
            'La atención al detalle en la confección del kategui lo hace perfecto para competiciones y entrenamientos formales, asegurando que el practicante se vea y se sienta profesional durante su uso.'
        ],
        about: [
            {
                text: 'El kategui para kata está diseñado específicamente para la práctica de kata en karate. Hecho de tela de alta calidad, proporciona la resistencia y flexibilidad necesarias para realizar movimientos precisos y fluidos.'
            },
            {
                text: 'El diseño tradicional y la atención al detalle hacen que este kategui sea ideal para competiciones y entrenamientos formales.'
            },
            {
                text: 'Disponible en talla mediana, su ajuste es cómodo y permite una gran libertad de movimiento, esencial para la ejecución de técnicas avanzadas.'
            }
        ]
    },
    {
        id: 6,
        title: 'Peto para Karate',
        description: 'Peto de karate para protección avanzada del torso, apto para niños y adultos.',
        price: 28000,
        age: 'Niños y adultos',
        size: 'Mediano',
        additionalInfo: 'Protección avanzada.',
        pictures: [
            './assets/productos/6/1.webp',
            './assets/productos/6/2.webp'
        ],
        info: [
            'El peto para karate ofrece una protección avanzada para el torso durante los entrenamientos y competiciones. Está diseñado para absorber los impactos y reducir el riesgo de lesiones, proporcionando seguridad y confianza al practicante.',
            'Adecuado para niños y adultos, este peto asegura un ajuste cómodo y seguro, permitiendo al usuario moverse con libertad. La talla mediana está diseñada para adaptarse a la mayoría de los practicantes.',
            'Fabricado con materiales de alta calidad, el peto es duradero y resistente, garantizando una larga vida útil incluso con uso intensivo. Es una pieza esencial del equipamiento de karate para cualquier nivel de práctica.'
        ],
        about: [
            {
                text: 'El peto para karate ofrece una protección avanzada para el torso durante los entrenamientos y competiciones. Está diseñado para absorber los impactos y reducir el riesgo de lesiones.'
            },
            {
                text: 'Adecuado para niños y adultos, el peto proporciona un ajuste cómodo y seguro, permitiendo al practicante moverse con libertad.'
            },
            {
                text: 'Fabricado con materiales de alta calidad, el peto es duradero y resistente, garantizando una larga vida útil incluso con uso intensivo.'
            }
        ]
    }
]
