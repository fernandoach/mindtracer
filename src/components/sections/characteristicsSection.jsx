import CharacteristicsChip from '../chips/characteristicsChip'

function CharacteristicsSection ({ sectionIcon, chipIcon }) {
  const chipContents = ['Identificación de patrones', 'Alertas a profesionales de salud', 'Informes detallados']
  const title = 'Características'
  const resume = 'Mind Tracer cuenta con características que te ayudan a identificar patrones de enfermedades y a tomar decisiones más precisas en tus enfermedades.'
  return (
    <section className="flex flex-col w-8/12 pt-16" id="caracteristicas">
        <div className="flex flex-col items-center justify-center text-center">
          { sectionIcon }
          <h2 className="text-success text-xl p-3">{ title }</h2>

          <p className="text-sm">
            { resume }
          </p>

          <div className="flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center pb-4">
            {
              chipContents.map(
                (content, index) => {
                  return <CharacteristicsChip icon={chipIcon} content={content} key={index} />
                }
              )
            }
          </div>
        </div>
      </section>
  )
}

export default CharacteristicsSection
