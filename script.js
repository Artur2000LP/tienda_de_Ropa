
// Función para agregar el producto al carrito (ejemplo)
function agregarAlCarrito(item) {
  // Aquí puedes implementar la lógica para agregar el producto al carrito
  console.log('Producto agregado al carrito:', item);
}

// script.js

// Obtener referencias a los botones de "Agregar al carrito"
var addToCartButtons = document.querySelectorAll('.producto button');

// Agregar eventos de clic a los botones
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Crear el elemento iframe
    var iframe = document.createElement('iframe');
    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSeh3VaiNBh4mMZynrc9ASHHuR5c-T_rMgARHfCPAIHLJgNKpQ/viewform?embedded=true";
    iframe.width = "640";
    iframe.height = "987";
    iframe.frameborder = "0";
    iframe.marginheight = "0";
    iframe.marginwidth = "0";

    // Reemplazar el contenido de la sección con el iframe
    var seccion = this.parentNode.parentNode;
    seccion.innerHTML = '';
    seccion.appendChild(iframe);
  });
});

function redireccionar() {
  window.location.href = "formulario.html";
}
// encabesado 
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-130px"; /* Ajusta el valor para ocultar completamente el encabezado */
  }

  prevScrollPos = currentScrollPos;
}


const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Realizar validación del usuario y contraseña aquí
  // ...

  // Ocultar el contenedor de inicio de sesión
  loginContainer.style.visibility = 'hidden';
});

/*carusel de todos los productos */

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentPosition = 0;

// Función para cambiar el slide según la dirección (1: adelante, -1: atrás)
function changeSlide(direction) {
  const slideWidth = carousel.offsetWidth / 3; // Ancho de cada slide (producto)
  const maxPosition = 0;
  const minPosition = -(carousel.scrollWidth - carousel.offsetWidth);

  // Calculamos la nueva posición sumando el desplazamiento
  let newPosition = currentPosition + direction * slideWidth;

  // Limitamos la posición para que no se salga del rango
  newPosition = Math.max(newPosition, minPosition);
  newPosition = Math.min(newPosition, maxPosition);

  currentPosition = newPosition;
  carousel.style.transform = `translateX(${currentPosition}px)`;

  // Desactivar botones de navegación al llegar al principio o final del carrusel
  prevButton.disabled = currentPosition === maxPosition;
  nextButton.disabled = currentPosition === minPosition;
}

// Asignar evento de clic a los botones de navegación
prevButton.addEventListener('click', () => changeSlide(slideWidth));
nextButton.addEventListener('click', () => changeSlide(-slideWidth));

