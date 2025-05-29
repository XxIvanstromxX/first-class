export function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  // Verificar la preferencia del tema guardado o poner el tema predeterminado (obscuro)
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Configurar el tema inicial
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Activar o desactivar el tema al hacer clic en el botón
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Configura el nuevo tema
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Guardar las preferencias del tema
    localStorage.setItem('theme', newTheme);
    
    // Animar el boton de cambio de tema
    themeToggleBtn.classList.add('rotate');
    setTimeout(() => {
      themeToggleBtn.classList.remove('rotate');
    }, 300);
  });
  
  // Añadir el estilo de animación al DOM
  const style = document.createElement('style');
  style.textContent = `
    .rotate {
      animation: rotate-animation 0.3s ease;
    }
    @keyframes rotate-animation {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}