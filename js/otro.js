function validarForm(){
  var nombre = document.getElementById('nombre');
  var email = document.getElementById('email');
  var error = document.getElementById('error');
  error.style.color = 'red';
  // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (nombre.value === null || nombre.value === ''){
    mensajesError.push('Ingresa tu nombre <br>');
  }

  if (email.value === null || email.value === '' ){
    mensajesError.push('Ingresa tu email <br>');
  }
  
  if (telefono.value === null || telefono.value === ''){
    mensajesError.push('Ingresa tu teléfono <br>');
  }

  error.innerHTML = mensajesError.join('');

  return false;

  
}
