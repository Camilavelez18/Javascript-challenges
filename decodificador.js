// Mensaje codificado
let mensajeCodificado = "El gato rojo tiene hambre";

// Diccionario de palabras codificadas y sus equivalentes descodificadas
const diccionario = {
  "gato": "agente",
  "rojo": "secreto",
  "hambre": "misión"
};

// Función para descodificar el mensaje
function descodificarMensaje(mensaje, diccionario) {
  // Divide el mensaje en palabras
  let palabras = mensaje.split(" ");

  // Reemplaza las palabras codificadas por sus equivalentes descodificadas
  for (let i = 0; i < palabras.length; i++) {
    if (diccionario[palabras[i]]) {
      palabras[i] = diccionario[palabras[i]];
    }
  }

  // Une las palabras de nuevo en una cadena
  return palabras.join(" ");
}

// Descodificar el mensaje
let mensajeDescodificado = descodificarMensaje(mensajeCodificado, diccionario);

// Imprimir el mensaje descodificado
console.log(mensajeDescodificado); // "El agente secreto tiene misión"