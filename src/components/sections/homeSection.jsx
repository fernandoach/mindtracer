import { Image } from '@nextui-org/react'
import ComenzarButton from '../buttons/comenzarButton'

function HomeSection ({ btnIcon }) {
  const title = 'Mind Tracer'
  const resume = 'Mind tracer es una sistema web que hace uso de la inteligencia artificial para ayudar a las instituciones educativas a identificar patrones de depresion para que puedan ser tratados por el profesional de la salud mental correspondiente, garantizando que el tratamiento sea efectivo y a tiempo.'
  return (
    <section className="flex flex-col w-8/12 mt-16">
        <h1 className="text-3xl text-success p-2 text-center">{ title }</h1>

        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="images/home_01.jpg"
            alt="mind tracer"
            width={300}
            height={'auto'}
            className='mb-4'
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm">
            { resume }
          </p>
        </div>
        <ComenzarButton icon={ btnIcon } />
      </section>
  )
}

export default HomeSection
