export function setupProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  // Añadir evento de clic a cada botón de filtro
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase 'active' de todos los botones
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Añadir clase 'active' al botón actual
      btn.classList.add('active');
      
      // Obtener valor del atributo 'data-filter'
      const filterValue = btn.getAttribute('data-filter');
      
      // Filtrar proyectos
      filterProjects(filterValue);
    });
  });
  
  /**
   * Proyectos filtrados
   * @param {string} category - La categoria de los proyectos a filtrar
   */

  function filterProjects(category) {
    projectCards.forEach(card => {
      // Obtener la categoria del proyecto
      const cardCategory = card.getAttribute('data-category');
      
      // Mostrar o ocultar el proyecto según la categoria
      if (category === 'all' || category === cardCategory) {
        card.style.display = 'block';
        // Add animation
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Añadir estilos
  const style = document.createElement('style');
  style.textContent = `
    .project-card {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
  `;
  document.head.appendChild(style);
}