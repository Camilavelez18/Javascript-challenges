// Función para realizar preguntas y obtener respuestas del usuario
function hacerPregunta(pregunta, opciones) {
    let respuestaValida = false;
    let respuesta;
  
    while (!respuestaValida) {
      respuesta = parseInt(prompt(`${pregunta}\n${opciones.map((opcion, index) => `${index + 1}. ${opcion}`).join('\n')}\nSelecciona una opción (1-${opciones.length}):`));
  
      if (!isNaN(respuesta) && respuesta >= 1 && respuesta <= opciones.length) {
        respuestaValida = true;
      } else {
        alert('Por favor, selecciona una opción válida.');
      }
    }
  
    return respuesta - 1; // Ajusta para el índice de 0 basado en el array
  }
  
  // Función para asignar la casa de Hogwarts según las respuestas
  function seleccionarCasa(respuestas) {
    const puntos = {
      Gryffindor: 0,
      Slytherin: 0,
      Hufflepuff: 0,
      Ravenclaw: 0
    };
  
    // Define los puntos asignados a cada casa para cada respuesta
    const asignaciones = [
      [ // Pregunta 1
        ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'], // Opción 1
        ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'], // Opción 2
        ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'], // Opción 3
        ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']  // Opción 4
      ],
      [ // Pregunta 2
        ['Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw'],
        ['Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw'],
        ['Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw'],
        ['Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw']
      ],
      [ // Pregunta 3
        ['Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw'],
        ['Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw'],
        ['Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw'],
        ['Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw']
      ],
      [ // Pregunta 4
        ['Ravenclaw', 'Gryffindor', 'Hufflepuff', 'Slytherin'],
        ['Ravenclaw', 'Gryffindor', 'Hufflepuff', 'Slytherin'],
        ['Ravenclaw', 'Gryffindor', 'Hufflepuff', 'Slytherin'],
        ['Ravenclaw', 'Gryffindor', 'Hufflepuff', 'Slytherin']
      ],
      [ // Pregunta 5
        ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'],
        ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'],
        ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'],
        ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']
      ]
    ];
  
    // Asignar puntos basados en las respuestas
    respuestas.forEach((respuesta, index) => {
      const casas = asignaciones[index][respuesta];
      casas.forEach(casa => {
        puntos[casa]++;
      });
    });
  
    // Determinar la casa con más puntos
    let casaSeleccionada = '';
    let maxPuntos = 0;
    
    for (const casa in puntos) {
      if (puntos[casa] > maxPuntos) {
        maxPuntos = puntos[casa];
        casaSeleccionada = casa;
      }
    }
  
    return casaSeleccionada;
  }
  
  // Realizar preguntas y obtener respuestas
  const preguntas = [
    '¿Cómo te enfrentas a un desafío?',
    '¿Qué valoras más en un amigo?',
    '¿Cómo te gustaría ser recordado?',
    '¿Cuál es tu objetivo principal?',
    '¿Qué tipo de actividades prefieres?'
  ];
  
  const opciones = [
    ['Ser valiente y arriesgado', 'Ser astuto y estratégico', 'Ser leal y justo', 'Ser inteligente y curioso'],
    ['Valor y valentía', 'Ambición y astucia', 'Lealtad y trabajo en equipo', 'Sabiduría y conocimiento'],
    ['Heroe legendario', 'Líder influyente', 'Amigo fiel', 'Sabio respetado'],
    ['Lograr grandes hazañas', 'Conseguir poder y éxito', 'Ayudar a los demás', 'Aprender y descubrir'],
    ['Aventuras y desafíos', 'Planes y estrategias', 'Actividades grupales', 'Estudios y exploración']
  ];
  
  let respuestas = [];
  
  // Hacer preguntas al usuario
  for (let i = 0; i < preguntas.length; i++) {
    const respuesta = hacerPregunta(preguntas[i], opciones[i]);
    respuestas.push(respuesta);
  }
  
  // Seleccionar la casa de Hogwarts
  const casaSeleccionada = seleccionarCasa(respuestas);
  
  // Mostrar el resultado
  console.log(`¡Felicidades! Has sido seleccionado para la casa de ${casaSeleccionada}.`);