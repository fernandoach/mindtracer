'use client'
import { useAuth } from '@/components/auth/authContext'
import UserNavbar from '@/components/navbar/userNavbar'
import FooterSection from '@/components/sections/footerSection'
import BodySkeleton from '@/components/skeletons/bodySkeleton'
import ResultsTitle from '@/components/titles/resultTitle'
import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaBookOpen } from 'react-icons/fa6'

function Page () {
  const { handleLogout, profile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [tatLength, setTatLength] = useState(null)
  const [idbLength, setIdbLength] = useState(null)
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const responseTat = await fetch('/api/panel/tat_length', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const dataTat = await responseTat.json()
        setTatLength(dataTat)
        const responseIdb = await fetch('/api/panel/idb_length', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const dataIdb = await responseIdb.json()
        setIdbLength(dataIdb)
      } catch (error) {}
    }
    fetchTests()
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <main className="dark h-screen text-foreground bg-background flex flex-col items-center justify-center">
        <UserNavbar
          profile={profile}
          handleLogout={handleLogout}
          loading={loading}
        />
        <BodySkeleton />
      </main>
    )
  }

  return (
    <main className="dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden">
      <UserNavbar
        profile={profile}
        handleLogout={handleLogout}
        loading={loading}
      />
      <section className="flex flex-col w-8/12 mt-16 items-center justify-center">
        <ResultsTitle />
        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row mb-16'>
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3 items-center justify-center">
              <FaBookOpen className='text-2xl' />
              <div className="flex flex-col">
                <p className="text-md">TAT</p>
                <p className="text-small text-default-500">Test de apercepción temática</p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <p className='text-center'>El Test de Apercepción Temática (TAT) es una prueba psicológica donde se muestran imágenes ambiguas y se le pide al evaluado que cuente una historia. Se utiliza para explorar la personalidad y los conflictos internos a través de sus narraciones.</p>
            </CardBody>
            <Divider/>
            <CardFooter className='flex justify-center items-center'>
              <Link
                showAnchorIcon
                href={
                  tatLength >= 19 ? '/panel/resultados/tat' : '/panel/tat'
                }
                color='success'
              >
                Ver resultados
              </Link>
            </CardFooter>
        </Card>

        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3 items-center justify-center">
              <FaBookOpen className='text-2xl' />
              <div className="flex flex-col">
                <p className="text-md">IDB-II</p>
                <p className="text-small text-default-500">Inventario de Depresión de Beck</p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <p className='text-center'>El Inventario de Depresión de Beck (BDI-II) es un cuestionario de 21 ítems que mide la gravedad de la depresión en adultos y adolescentes. Evalúa síntomas emocionales, pensamientos y comportamientos, y su puntaje total indica el nivel de depresión.</p>
            </CardBody>
            <Divider/>
            <CardFooter className='flex justify-center items-center'>
              <Link
                showAnchorIcon
                href={
                  idbLength >= 20 ? '/panel/resultados/idb' : '/panel/idb'
                }
                color='success'
              >
                Ver resultados
              </Link>
            </CardFooter>
        </Card>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}

export default Page
