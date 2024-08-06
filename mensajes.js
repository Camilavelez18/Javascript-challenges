// Función para analizar el mensaje
function analizarMensaje(mensaje) {
    // Contar la cantidad de caracteres, incluyendo espacios y signos de puntuación
    let cantidadCaracteres = mensaje.length;
  
    // Contar la cantidad de palabras en el mensaje
    let palabras = mensaje.trim().split(/\s+/); // Utiliza expresión regular para dividir por uno o más espacios
    let cantidadPalabras = palabras.length;
  
    // Contar la cantidad de oraciones en el mensaje
    let oraciones = mensaje.split(/[.!?]+/).filter(oracion => oracion.trim().length > 0); // Filtra para eliminar oraciones vacías
    let cantidadOraciones = oraciones.length;
  
    return {
      caracteres: cantidadCaracteres,
      palabras: cantidadPalabras,
      oraciones: cantidadOraciones
    };
  }
  
  // Solicitar al usuario introducir un mensaje de texto
  let mensajeUsuario = prompt("Introduce un mensaje de texto:");
  
  // Analizar el mensaje
  let resultado = analizarMensaje(mensajeUsuario);
  
  // Mostrar el análisis del mensaje
  console.log(`Cantidad de caracteres: ${resultado.caracteres}`);
  console.log(`Cantidad de palabras: ${resultado.palabras}`);
  console.log(`Cantidad de oraciones: ${resultado.oraciones}`);