import CharacteristicsChip from '../chips/characteristicsChip'

function CharacteristicsSection ({ sectionIcon, chipIcon }) {
  const chipContents = [
    'Identificación de patrones',
    'Alertas a profesionales de salud',
    'Informes detallados'
  ]
  const title = 'Características'
  const content =
    'Mind Tracer cuenta con características que te ayudan a identificar patrones de enfermedades y a tomar decisiones más precisas en tus enfermedades.'
  const id = 'caracteristicas'

  return (
    <section className='flex flex-col w-8/12 pt-16' id={id}>
      <div className='flex flex-col items-center justify-center text-center'>
        {sectionIcon}
        <h2 className='text-success text-xl p-3'>{title}</h2>

        <p className='text-sm'>{content}</p>

        <div className='flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center pb-4'>
          {chipContents.map((content, index) => {
            return (
              <CharacteristicsChip
                icon={chipIcon}
                content={content}
                key={`${content} - ${index}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CharacteristicsSection
