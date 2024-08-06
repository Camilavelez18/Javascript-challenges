// Función para contar vocales y consonantes en una cadena de texto
function contarVocalesYConsonantes(cadena) {
    // Convertir la cadena a minúsculas
    cadena = cadena.toLowerCase();
    
    // Definir las vocales
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    // Inicializar contadores
    let contadorVocales = 0;
    let contadorConsonantes = 0;
    
    // Recorrer cada carácter de la cadena
    for (let char of cadena) {
      // Comprobar si el carácter es una letra
      if (char >= 'a' && char <= 'z') {
        // Comprobar si el carácter es una vocal
        if (vocales.includes(char)) {
          contadorVocales++;
        } else {
          contadorConsonantes++;
        }
      }
    }
    
    return { vocales: contadorVocales, consonantes: contadorConsonantes };
  }
  
  // Solicitar al usuario introducir una cadena de texto
  let cadenaUsuario = prompt("Introduce una cadena de texto:");
  
  // Contar vocales y consonantes
  let resultado = contarVocalesYConsonantes(cadenaUsuario);
  
  // Mostrar el resultado
  console.log(`Número de vocales: ${resultado.vocales}`);
  console.log(`Número de consonantes: ${resultado.consonantes}`);