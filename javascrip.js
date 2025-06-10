// Mostrar contenido relacionado al botón pulsado
document.querySelectorAll('.paw-button').forEach(button => {
  button.addEventListener('click', () => {
    const infoContent = document.querySelector('.info-content');
    const info = button.getAttribute('data-info');
    infoContent.innerHTML = `<p>${info}</p>`;
  });
});

// Opcional: Manejar envío del formulario (solo para ejemplo)
document.getElementById('feedback-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias por tu retroalimentación!');
  e.target.reset();
});
