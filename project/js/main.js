// Importar Modulos
import { setupThemeToggle } from './themeToggle.js';
import { setupContactForm } from './contactForm.js';
import { setupProjects } from './projects.js';
import { setupScrollEffects } from './scrollEffects.js';

// Inicializar todos los modulos cuando el DOM se renderice
document.addEventListener('DOMContentLoaded', () => {
  // Colocar el año en el footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Configurar el tema
  setupThemeToggle();
  
  // Configurar el formulario
  setupContactForm();
  
  // Configurar los proyectos
  setupProjects();
  
  // Configurar efectos de desplazamiento
  setupScrollEffects();
  
  // Configutat los botones de navegación
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Cerrar el menú al hacer clic en un enlace de navegación
  const navLinksAll = document.querySelectorAll('.nav-link');
  navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});