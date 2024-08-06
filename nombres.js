// Función para capitalizar la primera letra de una palabra
function capitalizarPrimeraLetra(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }
  
  // Función para crear el nombre de superhéroe
  function crearNombreSuperheroe(nombre, animalFavorito) {
    // Capitaliza la primera letra del animal favorito
    let animalCapitalizado = capitalizarPrimeraLetra(animalFavorito);
    // Combina el animal favorito y el nombre del usuario
    let nombreSuperheroe = `${animalCapitalizado} ${nombre}`;
    return nombreSuperheroe;
  }
  
  // Obtener las entradas del usuario
  let nombreUsuario = prompt("Introduce tu nombre:");
  let animalFavorito = prompt("Introduce tu animal favorito:");
  
  // Crear el nombre de superhéroe
  let nombreSuperheroe = crearNombreSuperheroe(nombreUsuario, animalFavorito);
  
  // Mostrar el nombre de superhéroe
  console.log(`Tu nombre de superhéroe es: ${nombreSuperheroe}`);