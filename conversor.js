// Variables para almacenar las temperaturas
let temperaturaCelsius;
let temperaturaFahrenheit;

// Función para convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Ejemplo de uso:
// Asignar un valor a la temperatura en Celsius
temperaturaCelsius = 25;

// Calcular y almacenar la conversión a Fahrenheit
temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);

// Imprimir la temperatura convertida en Fahrenheit
console.log(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit}°F`);

// Asignar un valor a la temperatura en Fahrenheit
temperaturaFahrenheit = 77;

// Calcular y almacenar la conversión a Celsius
temperaturaCelsius = fahrenheitACelsius(temperaturaFahrenheit);

// Imprimir la temperatura convertida en Celsius
console.log(`La temperatura en Celsius es: ${temperaturaCelsius}°C`);