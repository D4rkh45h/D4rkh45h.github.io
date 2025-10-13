/* Archivo: app.js */

// Objeto de configuración de partículas (mantengo el tuyo sin cambios)
const particleConfig = {
    "particles": {
        "number": {
            "value": 175,
            "density": {
                "enable": true,
                "value_area": 4200
            }
        },
        "color": {
            "value": "#FF3333"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#FF3333"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.9,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.6,
                "opacity_min": 0.05,
                "sync": false
            }
        },
        "size": {
            "value": 4.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 2,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#FFFFFF",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

// 🌟 CORRECCIÓN CLAVE: Usamos 'particlesJS' para inicializar.
// Si esta función existe, la librería particles.js ya está cargada.
if (typeof particlesJS !== 'undefined') {
    // Inicializa la librería en el elemento con el ID 'particulas-js'
    // que definiste en tu HTML.
    particlesJS('particulas-js', particleConfig); 

} else if (typeof SistemaParticulas !== 'undefined') {
    // Esto es una precaución si la librería traducida se está usando.
    // Aunque es menos probable ahora, sirve como respaldo.
    SistemaParticulas('particulas-js', particleConfig);

} else {
    // Si la función no existe, el error de carga es inevitable.
    console.error("particles.js library not loaded. Cannot initialize particles.");
}
