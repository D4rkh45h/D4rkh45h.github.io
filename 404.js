// app.js (Configuración de tsParticles)

(function() { // Usamos una IIFE (Immediately Invoked Function Expression) para encapsular el código
    const particleConfiguration = { // Renombrado de 'particles' a 'particleConfiguration'
        fpsLimit: 65, // Ligeramente diferente
        particles: {
            number: {
                value: 170, // Ligeramente diferente
                density: {
                    enable: true,
                    area: 850 // Ligeramente diferente
                }
            },
            color: {
                value: "#f0f0f0" // Ligeramente diferente (tono de blanco y capitalización)
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.9, // Ligeramente diferente
                random: {
                    enable: true,
                    minimumValue: 0.15 // Ligeramente diferente
                },
                animation: {
                    enable: true,
                    speed: 1.1, // Ligeramente diferente
                    minimumValue: 0.05, // Ligeramente diferente
                    sync: false
                }
            },
            size: {
                value: 3.2, // Ligeramente diferente
                random: {
                    enable: true,
                    minimumValue: 1.1 // Ligeramente diferente
                }
            },
            move: {
                enable: true,
                speed: 0.2, // Ligeramente diferente
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out"
                },
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                resize: false
            }
        },
        detectRetina: true
    };

    // Asegurarse de que tsParticles esté cargado antes de intentar usarlo
    if (typeof tsParticles !== 'undefined') {
        // Cargar tsParticles en el elemento con el ID 'particulas-js'
        // Este ID debe coincidir con el que usamos en index.html
        tsParticles.load("particulas-js", particleConfiguration)
            .then(container => {
                // console.log("tsParticles loaded successfully");
            })
            .catch(error => {
                console.error("Error loading tsParticles:", error);
            });
    } else {
        console.error("tsParticles library not loaded. Cannot initialize particles.");
    }

})(); // Fin de la IIFE