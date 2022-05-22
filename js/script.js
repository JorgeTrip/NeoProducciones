/*Sacado de Formspree para limpiar el formulario enviar los datos*/
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }