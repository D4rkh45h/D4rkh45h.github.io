/**
 * Gestiona la visibilidad y animaciones de un contenedor específico.
 * @param {string} selector - El selector jQuery del contenedor (ej. "#projects_container").
 * @param {string} classIn - Clase de animación de entrada (ej. "slideInDown").
 * @param {string} classOut - Clase de animación de salida (ej. "slideOutUp").
 * @param {number} duration - Duración de la animación en milisegundos.
 */
const toggleContainer = (selector, classIn, classOut, duration = 800) => {
  const $container = $(selector);

  return {
    show: () => {
      $container.css("display", "inherit").addClass(`animated ${classIn}`);
      setTimeout(() => {
        $container.removeClass(`animated ${classIn}`);
      }, duration);
    },
    close: () => {
      $container.addClass(`animated ${classOut}`);
      setTimeout(() => {
        $container.removeClass(`animated ${classOut}`).css("display", "none");
      }, duration);
    }
  };
};

// --- Instancias de los gestores de contenedores ---
const projects = toggleContainer("#projects_container", "slideInDown", "slideOutUp");
const about = toggleContainer("#about_container", "slideInLeft", "slideOutLeft");
const work = toggleContainer("#work_container", "slideInRight", "slideOutRight");
const contact = toggleContainer("#contact_container", "slideInUp", "slideOutDown");

// --- Funciones de control de UI (pueden ser llamadas desde eventos de clic) ---
function showProjects() { projects.show(); }
function closeProjects() { projects.close(); }

function showAbout() { about.show(); }
function closeAbout() { about.close(); }

function showWork() { work.show(); }
function closeWork() { work.close(); }

function showContact() { contact.show(); }
function closeContact() { contact.close(); }

// --- Lógica de carga inicial ---
$(window).on('load', () => { // Mejor usar $(window).on('load') para asegurar que todo el contenido se haya cargado
    setTimeout(() => {
        $("#loading").addClass("animated fadeOut");
        setTimeout(() => {
            $("#loading").removeClass("animated fadeOut").css("display", "none");
            $("#box").css("display", "none"); // Asumo que #box también es parte del overlay de carga
            
            // Eliminar clases de animación "fadeIn" de los elementos principales si las tienen.
            // Si estos elementos deben aparecer con un fadeIn, esta lógica debería ser diferente
            // y las clases "animated fadeIn" deberían ser aplicadas *después* de que #loading desaparezca,
            // no eliminadas. Aquí asumo que quieres que no tengan animaciones después de la carga inicial.
            $("#projects, #about, #contact, #work").removeClass("animated fadeIn");
        }, 1000); // Duración de la animación fadeOut de #loading
    }, 1500); // Retraso inicial antes de que #loading empiece a desaparecer
});