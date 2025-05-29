
export function setupScrollEffects() {
  const scrollTopBtn = document.getElementById('scroll-top');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Mostrar o ocultar el botón de volver arriba
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
    
    // Resaltar el enlace de navegación para la sección actual
    updateActiveNavLink();
  });
  
  // Scroll hacia arriba al hacer clic en el botón
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Actualizar el enlace de navegación para la sección actual
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Añadir estilos al enlace de navegación para resaltar la sección actual
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active::after {
      width: 100%;
    }
  `;
  document.head.appendChild(style);
  
  // Añadir animación de entrada a las secciones
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // añadir estilos de animación a las secciones
  const animationStyle = document.createElement('style');
  animationStyle.textContent = `
    section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(animationStyle);
}