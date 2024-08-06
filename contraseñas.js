// Función para generar una contraseña aleatoria
function generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    let caracteres = minusculas;
    
    if (incluirMayusculas) {
      caracteres += mayusculas;
    }
    
    if (incluirNumeros) {
      caracteres += numeros;
    }
    
    if (incluirSimbolos) {
      caracteres += simbolos;
    }
  
    let contraseña = '';
    
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres[indiceAleatorio];
    }
    
    return contraseña;
  }
  
  // Solicitar parámetros al usuario
  let longitud = parseInt(prompt("Introduce la longitud de la contraseña (entre 8 y 16):"));
  while (isNaN(longitud) || longitud < 8 || longitud > 16) {
    longitud = parseInt(prompt("Por favor, introduce un número válido entre 8 y 16:"));
  }
  
  let incluirMayusculas = confirm("¿Quieres incluir letras mayúsculas?");
  let incluirNumeros = confirm("¿Quieres incluir números?");
  let incluirSimbolos = confirm("¿Quieres incluir símbolos?");
  
  // Generar la contraseña
  let contraseñaGenerada = generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos);
  
  // Mostrar la contraseña generada
  console.log(`Contraseña generada: ${contraseñaGenerada}`);