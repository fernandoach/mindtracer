'use client'
import { useAuth } from '@/components/auth/authContext'
import UserNavbar from '@/components/navbar/userNavbar'
import CardProgress from '@/components/progress/cardProgress'
import FooterSection from '@/components/sections/footerSection'
import BodySkeleton from '@/components/skeletons/bodySkeleton'
import PanelTitle from '@/components/titles/panelTitle'
import { Divider } from '@nextui-org/react'
import { useEffect, useState } from 'react'

function Page () {
  const titleIDB = 'Inventario de la depresión de Beck'
  const hrefIDB = '/panel/idb'

  const titleTAT = 'Test de apercepción temática'
  const hrefTAT = '/panel/tat'

  const { handleLogout, profile, loading } = useAuth()
  const [idb, setIdb] = useState(null)
  const [tat, setTat] = useState(null)

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const responseIdb = await fetch('/api/panel/idb_length', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!responseIdb.ok) {
          throw new Error(`HTTP error! Status: ${responseIdb.status}`)
        }

        const dataIdb = await responseIdb.json()
        setIdb(dataIdb)
      } catch (error) {}
    }
    fetchTests()
  }, [])

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const responseTat = await fetch('/api/panel/tat_length', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!responseTat.ok) {
          throw new Error(`HTTP error! Status: ${responseTat.status}`)
        }

        const dataTat = await responseTat.json()
        setTat(dataTat)
      } catch (error) {}
    }
    fetchTests()
  }, [])
  console.log(tat)
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
    <>
      <main className="dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden">
        <UserNavbar
          profile={profile}
          handleLogout={handleLogout}
          loading={loading}
        />
        <section className="flex flex-col w-8/12 mt-16">
          <PanelTitle />
          <div className="flex flex-col items-center justify-center w-full gap-4 pt-4 pb-8">
            <span className="text-base font-semibold text-center">
              MindTracer funciona mediante el uso de dos pruebas psicológicas,
              el Inventario de la depresión de Beck (IDB) y el Test de
              apercepción temática (TAT). A continuación, se presentan las
              pruebas que se utilizan en el proyecto, por favor comienza con la
              prueba que tú prefieras pero debes tener en cuenta que ambas
              pruebas son obligatorias.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mb-16">
            <CardProgress progress={idb} title={titleIDB} href={hrefIDB} />
            <CardProgress progress={tat} title={titleTAT} href={hrefTAT} />
          </div>
        </section>
        <Divider />
        <FooterSection />
      </main>
    </>
  )
}

export default Page
