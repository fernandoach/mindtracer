const idbQuestions = [
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Te has sentido triste?',
    answers: [
      {
        option: 'No me siento triste.',
        value: '0'
      },
      {
        option: 'Me siento triste gran parte del tiempo.',
        value: '1'
      },
      {
        option: 'Me siento triste todo el tiempo.',
        value: '2'
      },
      {
        option: 'Me siento tan triste que no puedo soportarlo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has sentido pesimismo?',
    answers: [
      {
        option: 'No estoy desalentado respecto del mi futuro.',
        value: '0'
      },
      {
        option: 'Me siento más desalentado respecto de mi futuro que lo que solía estarlo.',
        value: '1'
      },
      {
        option: 'No espero que las cosas funcionen para mi.',
        value: '2'
      },
      {
        option: 'Siento que no hay esperanza para mi futuro y que sólo puede empeorar.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has sentido fracaso?',
    answers: [
      {
        option: 'No me siento como un fracasado.',
        value: '0'
      },
      {
        option: 'He fracasado más de lo que hubiera debido.',
        value: '1'
      },
      {
        option: 'Cuando miro hacia atrás, veo muchos fracasos.',
        value: '2'
      },
      {
        option: 'Siento que como persona soy un fracaso total.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado pérdida del placer?',
    answers: [
      {
        option: 'Obtengo tanto placer como siempre por las cosas de las que disfruto.',
        value: '0'
      },
      {
        option: 'No disfruto tanto de las cosas como solía hacerlo.',
        value: '1'
      },
      {
        option: 'Obtengo muy poco placer de las cosas que solía disfrutar.',
        value: '2'
      },
      {
        option: 'No puedo obtener ningún placer de las cosas de las que solía disfrutar.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado sentimientos de Culpa?',
    answers: [
      {
        option: 'No me siento particularmente culpable.',
        value: '0'
      },
      {
        option: 'Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.',
        value: '1'
      },
      {
        option: 'Me siento bastante culpable la mayor parte del tiempo.',
        value: '2'
      },
      {
        option: 'Me siento culpable todo el tiempo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado sentimientos de Castigo?',
    answers: [
      {
        option: 'No siento que este siendo castigado.',
        value: '0'
      },
      {
        option: 'Siento que tal vez pueda ser castigado.',
        value: '1'
      },
      {
        option: 'Espero ser castigado.',
        value: '2'
      },
      {
        option: 'Siento que estoy siendo castigado.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Te has sentido disconforme contigo mismo?',
    answers: [
      {
        option: 'Siento acerca de mi lo mismo que siempre.',
        value: '0'
      },
      {
        option: 'He perdido la confianza en mí mismo.',
        value: '1'
      },
      {
        option: 'Estoy decepcionado conmigo mismo.',
        value: '2'
      },
      {
        option: 'No me gusto a mí mismo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has sido autocrítico?',
    answers: [
      {
        option: 'No me critico ni me culpo más de lo habitual.',
        value: '0'
      },
      {
        option: 'Estoy más crítico conmigo mismo de lo que solía estarlo.',
        value: '1'
      },
      {
        option: 'Me critico a mí mismo por todos mis errores.',
        value: '2'
      },
      {
        option: 'Me culpo a mí mismo por todo lo malo que sucede.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado pensamientos o deseos suicidas?',
    answers: [
      {
        option: 'No tengo ningún pensamiento de matarme.',
        value: '0'
      },
      {
        option: 'He tenido pensamientos de matarme, pero no lo haría.',
        value: '1'
      },
      {
        option: 'Querría matarme.',
        value: '2'
      },
      {
        option: 'Me mataría si tuviera la oportunidad de hacerlo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has llorado?',
    answers: [
      {
        option: 'No lloro más de lo que solía hacerlo.',
        value: '0'
      },
      {
        option: 'Lloro más de lo que solía hacerlo.',
        value: '1'
      },
      {
        option: 'Lloro por cualquier pequeñez.',
        value: '2'
      },
      {
        option: 'Siento ganas de llorar pero no puedo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Te has sentido agitado?',
    answers: [
      {
        option: 'No estoy más inquieto o tenso que lo habitual.',
        value: '0'
      },
      {
        option: 'Me siento más inquieto o tenso que lo habitual.',
        value: '1'
      },
      {
        option: 'Estoy tan inquieto o agitado que me es difícil quedarme quieto',
        value: '2'
      },
      {
        option: 'Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has perdido el interés en las personas o cosas?',
    answers: [
      {
        option: 'No he perdido el interés en otras actividades o personas.',
        value: '0'
      },
      {
        option: 'Estoy menos interesado que antes en otras personas o cosas.',
        value: '1'
      },
      {
        option: 'He perdido casi todo el interés en otras personas o cosas.',
        value: '2'
      },
      {
        option: 'Me es difícil interesarme por algo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Te sientes indeciso?',
    answers: [
      {
        option: 'Tomo mis propias decisiones tan bien como siempre.',
        value: '0'
      },
      {
        option: 'Me resulta más difícil que de costumbre tomar decisiones.',
        value: '1'
      },
      {
        option: 'Encuentro mucha más dificultad que antes para tomar decisiones.',
        value: '2'
      },
      {
        option: 'Tengo problemas para tomar cualquier decisión.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has sentido desvalorizado?',
    answers: [
      {
        option: 'No siento que yo no sea valioso.',
        value: '0'
      },
      {
        option: 'No me considero a mi mismo tan valioso y útil como solía considerarme.',
        value: '1'
      },
      {
        option: 'Me siento menos valioso cuando me comparo con otros.',
        value: '2'
      },
      {
        option: 'Siento que no valgo nada.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado perdida de energía?',
    answers: [
      {
        option: 'Tengo tanta energía como siempre.',
        value: '0'
      },
      {
        option: 'Tengo menos energía que la que solía tener.',
        value: '1'
      },
      {
        option: 'No tengo suficiente energía para hacer demasiado.',
        value: '2'
      },
      {
        option: 'No tengo energía suficiente para hacer nada.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado cambios en tus hábitos de sueño?',
    answers: [
      {
        option: 'No he experimentado ningún cambio en mis hábitos de sueño.',
        value: '0'
      },
      {
        option: 'Duermo un poco más que lo habitual.',
        value: '1a'
      },
      {
        option: 'Duermo un poco menos que lo habitual.',
        value: '1b'
      },
      {
        option: 'Duermo mucho más que lo habitual.',
        value: '2a'
      },
      {
        option: 'Duermo mucho menos que lo habitual.',
        value: '2b'
      },
      {
        option: 'Duermo la mayor parte del día.',
        value: '3a'
      },
      {
        option: 'Me despierto 1-2 horas más temprano y no puedo volver a dormirme.',
        value: '3b'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has sentido irritable?',
    answers: [
      {
        option: 'No estoy tan irritable que lo habitual.',
        value: '0'
      },
      {
        option: 'Estoy más irritable que lo habitual.',
        value: '1'
      },
      {
        option: 'Estoy mucho más irritable que lo habitual.',
        value: '2'
      },
      {
        option: 'Estoy irritable todo el tiempo.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado cambios en tu apetito?',
    answers: [
      {
        option: 'No he experimentado ningún cambio en mi apetito.',
        value: '0'
      },
      {
        option: 'Mi apetito es un poco menor que lo habitual.',
        value: '1a'
      },
      {
        option: 'Mi apetito es un poco mayor que lo habitual.',
        value: '1b'
      },
      {
        option: 'Mi apetito es mucho menor que antes.',
        value: '2a'
      },
      {
        option: 'Mi apetito es mucho mayor que lo habitual.',
        value: '2b'
      },
      {
        option: 'No tengo apetito en absoluto.',
        value: '3a'
      },
      {
        option: 'Quiero comer todo el día.',
        value: '3b'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has tenido dificultades para concentrarte?',
    answers: [
      {
        option: 'Puedo concentrarme tan bien como siempre.',
        value: '0'
      },
      {
        option: 'No puedo concentrarme tan bien como habitualmente.',
        value: '1'
      },
      {
        option: 'Me es difícil mantener la mente en algo por mucho tiempo.',
        value: '2'
      },
      {
        option: 'Encuentro que no puedo concentrarme en nada.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado cansancio o fatiga?',
    answers: [
      {
        option: 'No estoy más cansado o fatigado que lo habitual.',
        value: '0'
      },
      {
        option: 'Me fatigo o me canso más fácilmente que lo habitual.',
        value: '1'
      },
      {
        option: 'Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.',
        value: '2'
      },
      {
        option: 'Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer.',
        value: '3'
      }
    ]
  },
  {
    question: 'En las últimas 2 semanas, incluyendo el día de hoy ¿Has experimentado pérdida de interés en el sexo?',
    answers: [
      {
        option: 'No he notado ningún cambio reciente en mi interés por el sexo.',
        value: '0'
      },
      {
        option: 'Estoy menos interesado en el sexo de lo que solía estarlo.',
        value: '1'
      },
      {
        option: 'Estoy mucho menos interesado en el sexo.',
        value: '2'
      },
      {
        option: 'He perdido completamente el interés en el sexo.',
        value: '3'
      }
    ]
  }
]

export { idbQuestions }
