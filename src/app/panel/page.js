'use client'
import CardProgress from '@/components/progress/cardProgress'
import PanelTitle from '@/components/titles/panelTitle'
import React from 'react'

function Page () {
  const [profile, setProfile] = React.useState({ email: '', role: '', fullName: '' })
  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/auth/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchProfile()
  }, [])

  const titleIDB = 'Inventario de la depresión de Beck'
  const hrefIDB = '/panel/idb'

  const titleTAT = 'Test de apercepción temática'
  const hrefTAT = '/panel/tat'

  return (
    <>
      <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden'>
        <PanelTitle />
        <div className='flex flex-col items-center justify-center w-full gap-4 px-8'>
          <span className='text-xl font-semibold text-center'>MindTracer funciona mediante el uso de dos pruebas psicológicas, el Inventario de la depresión de Beck (IDB) y el Test de apercepción temática (TAT). A continuación, se presentan las pruebas que se utilizan en el proyecto, por favor comienza con la prueba que tú prefieras pero debes tener en cuenta que ambas pruebas son obligatorias.</span>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center w-full gap-4'>
          <CardProgress progress={100} title={titleIDB} href={hrefIDB} />
          <CardProgress progress={70} title={titleTAT} href={hrefTAT} />
        </div>
      </main>
    </>
  )
}

export default Page
