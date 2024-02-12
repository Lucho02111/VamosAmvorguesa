document.addEventListener('DOMContentLoaded', function () {
    const claroButton = document.getElementById('btnYes');
    claroButton.addEventListener('click', function () {
      showMessage('Graciaaaas, nos vemos para unas amvorguesas :3');
    });
  
    // Agrega un evento al modal que se dispara cuando se cierra
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal._element.addEventListener('hidden.bs.modal', function () {
      resetButton('btnYes'); // Restablecer el botón "Claro Uwu" al cerrar el modal
    });
  });
  
  let noButtonClickCount = 0;
  
  function showNoMessage() {
    const noMessage = document.getElementById('noMessage');
    const messages = [
      'Segura???',
      'No te arrepentirás?',
      'Piénsalo bien',
      'Por qué no???',
      'Di que siiiiiii!! :c',
      'No seas malaaaa :c',
      'Enaneeeee :c vamooos :C ',
      // Agrega más mensajes según sea necesario
    ];
  
    noMessage.style.fontSize = '18px'; /* Cambia el tamaño de las letras */
    noMessage.style.fontFamily = 'Arial, sans-serif'; /* Cambia la fuente de las letras */
    noMessage.style.fontWeight = 'bold'; /* Cambia la negrita según sea necesario */
    noMessage.style.color = '#000000'; /* Cambia el color de las letras a rojo (#FF0000) o cualquier otro color que desees */
    noMessage.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'; /* Ajusta los valores según tus preferencias para agregar sombra */
  
    noMessage.innerHTML = messages[noButtonClickCount % messages.length];
    noButtonClickCount++;
  
    enlargeButton('btnYes', noButtonClickCount);
  }
  
  function enlargeButton(buttonId, clickCount) {
    const button = document.getElementById(buttonId);
    button.style.fontSize = `${16 + clickCount * 2}px`; // Ajusta según tus necesidades
  }
  
  function resetButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.fontSize = '16px'; // Tamaño inicial del botón
    noButtonClickCount = 0; // Reiniciar el contador
  }
  
  function showMessage(message) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.textContent = message;
  
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  }
  
