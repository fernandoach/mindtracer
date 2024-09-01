import BenefitsChip from '../chips/benefitsChip'

function BenefitsSection ({ icon, chipIcon }) {
  const title = 'Benefícios'
  const content =
    'El sistema Mind Tracer, al utilizar inteligencia artificial para identificar patrones de depresión en estudiantes, ofrece varios beneficios significativos para las instituciones educativas y los estudiantes mismos.'

  const benefitsChips = [
    'Detección temprana de depresión.',
    'Intervención efectiva en caso de depresión.',
    'Apoyo a educadores y administradores.',
    'Mejora el entorno escolar.',
    'Datos y estadisticas detallados.',
    'Confidencialidad y privacidad.',
    'Capacitación y sensibilización.'
  ]
  const id = 'beneficios'
  return (
    <section className='flex flex-col w-8/12 pt-16' id={id}>
      <div className='flex flex-col items-center justify-center text-center'>
        {icon}
        <h2 className='text-success text-xl p-3'>{title}</h2>
        <p className='text-sm'>{content}</p>
        <div className='flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center pb-4'>
          {benefitsChips.map((chip, index) => {
            return (
              <BenefitsChip
                chipIcon={chipIcon}
                chip={chip}
                key={`${chip} - ${index}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
