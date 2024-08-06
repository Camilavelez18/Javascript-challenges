// Genera un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Variable para almacenar la suposición del jugador
let suposicionJugador;

// Número máximo de intentos
const maxIntentos = 3;

// Bucle para permitir al jugador tener 3 intentos
for (let intentos = 1; intentos <= maxIntentos; intentos++) {
  // En un programa real, obtendrías la entrada del usuario aquí. Usaremos un valor fijo para la demostración.
  suposicionJugador = parseInt(prompt(`Intento ${intentos}: Adivina el número (entre 1 y 10)`));

  // Comprueba si la suposición del jugador es correcta
  if (suposicionJugador === numeroAleatorio) {
    console.log("¡Felicidades! Adivinaste el número.");
    break; // Sale del bucle si el jugador adivina correctamente
  } else if (suposicionJugador > numeroAleatorio) {
    console.log("La suposición es demasiado alta.");
  } else if (suposicionJugador < numeroAleatorio) {
    console.log("La suposición es demasiado baja.");
  }

  // Si el jugador no adivina en el último intento, informa que ha perdido
  if (intentos === maxIntentos) {
    console.log(`Lo siento, has perdido. El número era ${numeroAleatorio}.`);
  }
}