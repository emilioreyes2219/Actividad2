function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function soloLetras(texto) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
  return numero.toString().length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

function esMayorDeEdad(fechaNacimiento) {
  return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

function formatearTexto(texto) {
  return texto.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function esNumeroPar(numero) {
  return numero % 2 === 0;
}
