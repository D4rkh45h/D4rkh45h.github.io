// app.js (o el archivo donde inicializas tus partículas)

// Objeto de configuración de partículas ligeramente modificado
const particleConfig = {
  "particles": {
    "number": {
      "value": 175, // Ligeramente diferente
      "density": {
        "enable": true,
        "value_area": 4200 // Ligeramente diferente
      }
    },
    "color": {
      "value": "#FF3333" // Ligeramente diferente (hex mayúsculas)
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
      "value": 0.9, // Ligeramente diferente
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.6, // Ligeramente diferente
        "opacity_min": 0.05, // Ligeramente diferente
        "sync": false
      }
    },
    "size": {
      "value": 4.5, // Ligeramente diferente
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
      "speed": 1.1, // Ligeramente diferente
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

// Inicializar particles.js con el nuevo ID y la configuración
// Asegúrate de que particles.js (la librería) ya esté cargada antes de llamar a esta función.
// 'particulasJS' sería el nombre de la función global que crea las partículas.
// Si tu archivo particles.js no exporta una función global con un nombre que puedas cambiar,
// esta parte de la refactorización será limitada a cambiar el ID del elemento y la configuración JSON.
// Asumo que `particlesJS` es una función global proporcionada por el script `particles.js`.
if (typeof particlesJS !== 'undefined') {
  particlesJS('particulas-js', particleConfig); // Usando el nuevo ID y el objeto de configuración
} else {
  console.error("particles.js library not loaded. Cannot initialize particles.");
}