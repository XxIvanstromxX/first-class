export function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  // Verificar si hay mensajes guardados en localStorage al cargar la página
  initStoredMessages();
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    
    // Obtener datos del formulario
    const formData = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value,
      date: new Date().toISOString(),
    };
    
    // Guardar datos en localStorage
    saveFormData(formData);
    
    // Mostrar mensaje de éxito
    showFormStatus('Mensaje enviado con exito! Gracias por contactarme.', 'Completado');
    
    // Restablecer el formulario
    contactForm.reset();
  });
  
  /**
   * Guarda los datos del formulario en localStorage
   * @param {Object} formData - La información del formulario
   */
  function saveFormData(formData) {
    // Get existing messages from localStorage
    let storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    
    // Add new message
    storedMessages.push(formData);
    
    // Guardar los mensajes actualizados en localStorage
    localStorage.setItem('contactMessages', JSON.stringify(storedMessages));
    
    // Log para depuración
    console.log('Stored messages:', storedMessages);
  }
  
  /**
   * Muestra un mensaje en el elemento form-status
   * @param {string} message - El mensaje a mostrar
   * @param {string} type - 'Completado' o 'Error'
   */
  function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status';
    formStatus.classList.add(type);
    
    //Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
    
    formStatus.style.display = 'block';
  }
  
  /**
   * inicializa los mensajes almacenados en localStorage
   */
  function initStoredMessages() {
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    if (storedMessages.length > 0) {
      console.log('Cargando mensajes almacenados:', storedMessages);
    }
  }
}