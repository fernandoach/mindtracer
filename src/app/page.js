import GuestNavbar from '@/components/navbar/guestNavbar'
import CharacteristicsSection from '@/components/sections/characteristicsSection'
import HomeSection from '@/components/sections/homeSection'
import { Chip, Divider } from '@nextui-org/react'
import {
  FaArrowRightFromBracket,
  FaKitMedical,
  FaBuffer,
  FaHeartCirclePlus,
  FaCheck,
  FaPhone,
  FaMailchimp,
  FaMessage
} from 'react-icons/fa6'

export default function Home () {
  const homeButtonIcon = <FaArrowRightFromBracket />
  const characteristicsSectionIcon = <FaBuffer size={50} className="text-success" />
  const characteristicsChipIcon = <FaKitMedical size={20} className="text-success" />

  return (
    <main className="dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden">
      { /* TODO: Arreglar el navbar y componentizar */}
      <GuestNavbar />
      <HomeSection btnIcon={ homeButtonIcon } />
      <CharacteristicsSection sectionIcon={characteristicsSectionIcon} chipIcon={characteristicsChipIcon} />
      { /* TODO: Arreglar los componentes de la sección de beneficios */ }
      <section className="flex flex-col w-8/12 pt-16" id="beneficios">
        <div
          className={'flex flex-col items-center justify-center text-center'}
        >
          <FaHeartCirclePlus size={50} className="text-success" />
          <h2 className="text-success text-xl p-3">Beneficios</h2>
          <p className="text-sm">
            El sistema Mind Tracer, al utilizar inteligencia artificial para
            identificar patrones de depresión en estudiantes, podría ofrecer
            varios beneficios significativos para las instituciones educativas y
            los estudiantes mismos:
          </p>
          <div className="flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center pb-4">
            <div className="pt-4 md:pt-4">
              <Chip
                startContent={<FaCheck size={20} className="text-success" />}
                className="w-max px-5"
              >
                Detección temprana de depresión.
              </Chip>
            </div>

            <div className="pt-0 md:pt-2">
              <Chip
                startContent={<FaCheck size={20} className="text-success" />}
                className="w-max px-5"
              >
                Intervención efectiva en caso de depresión.
              </Chip>
            </div>

            <div className="pt-0 md:pt-2">
              <Chip
                startContent={<FaCheck size={20} className="text-success" />}
                className="w-max px-5"
              >
                Apoyo a educadores y administradores.
              </Chip>
            </div>

            <div className="pt-0 md:pt-2">
              <Chip
                startContent={<FaCheck size={20} className="text-success" />}
                className="w-max px-5"
              >
                Mejora el entorno escolar.
              </Chip>
            </div>

            <div className="pt-0 md:pt-2">
              <Chip
                startContent={<FaCheck size={20} className="text-success" />}
                className="w-max px-5"
              >
                Datos y estadisticas detallados.
              </Chip>
            </div>

            <div className="pt-0 md:pt-2">
              <Chip
                startContent={<FaCheck size={20} className="text-success" />}
                className="w-max px-5"
              >
                Confidencialidad y privacidad.
              </Chip>
            </div>

            <div className="pt-0 md:pt-2">
              <Chip
                startContent={<FaCheck size={20} className="text-success" />}
                className="w-max px-5"
              >
                Capacitación y sensibilización.
              </Chip>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col w-8/12 pt-16 items-center justify-center"
        id="contacto"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <FaMailchimp size={50} className="text-success" />
          <h2 className="text-success text-xl p-3">Contacto</h2>
        </div>
        <div className="flex items-center justify-center text-center gap-8">
          <div>
            <FaPhone size={30} className="text-success" />
          </div>
          <div>
            <p>+51 985 741 852</p>
          </div>
        </div>

        <div className="flex items-center justify-center text-center gap-8 mt-4">
          <div>
            <FaMessage size={30} className="text-success" />
          </div>
          <div>
            <p>contacto@mindtracer.com</p>
          </div>
        </div>
      </section>
      <Divider className=' mt-10'/>
      <footer className="w-8/12 py-10 text-center">
            <p className="text-sm text-foreground">© 2024 Mind Tracer - Todos los derechos reservados</p>
            <p className="text-xs text-success">Powered by Fernando A.</p>
        </footer>
    </main>
  )
}
