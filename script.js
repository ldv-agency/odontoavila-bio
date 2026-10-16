/**
 * ODONTO ÁVILA — LÓGICA DE INTERACCIÓN BIO LINKTREE
 * Manejo de acordeones fluidos, scroll automático y eventos de tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.accordion-card');
  const ratingHeaderLink = document.getElementById('ratingHeaderLink');

  // Función para abrir un acordeón específico
  function openAccordion(card) {
    const content = card.querySelector('.accordion-content');
    const trigger = card.querySelector('.accordion-trigger');
    
    card.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  // Función para cerrar un acordeón específico
  function closeAccordion(card) {
    const content = card.querySelector('.accordion-content');
    const trigger = card.querySelector('.accordion-trigger');
    
    card.classList.remove('active');
    trigger.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = '0px';
  }

  // Configuración de eventos de clic en los disparadores
  cards.forEach(card => {
    const trigger = card.querySelector('.accordion-trigger');
    const content = card.querySelector('.accordion-content');

    trigger.addEventListener('click', () => {
      const isOpen = card.classList.contains('active');

      if (isOpen) {
        closeAccordion(card);
      } else {
        openAccordion(card);
      }
    });

    // Ajuste dinámico si el contenido cambia de tamaño
    window.addEventListener('resize', () => {
      if (card.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Enlace directo en el Header "Ver reseñas"
  if (ratingHeaderLink) {
    ratingHeaderLink.addEventListener('click', (e) => {
      e.preventDefault();
      const resenasCard = document.getElementById('acc-resenas');
      
      if (resenasCard) {
        openAccordion(resenasCard);
        
        setTimeout(() => {
          resenasCard.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    });
  }

  // Opcional: si la URL viene con hash (ej: #acc-resenas o #evaluacion)
  const hash = window.location.hash;
  if (hash) {
    const targetCard = document.querySelector(hash);
    if (targetCard && targetCard.classList.contains('accordion-card')) {
      setTimeout(() => {
        openAccordion(targetCard);
        targetCard.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }
});
