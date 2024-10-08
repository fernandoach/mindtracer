'use client'
import { useAuth } from '@/components/auth/authContext'
import UserNavbar from '@/components/navbar/userNavbar'
import FooterSection from '@/components/sections/footerSection'
import BodySkeleton from '@/components/skeletons/bodySkeleton'
import IdbTitle from '@/components/titles/idbTitle'
import { Chip, Divider } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaBriefcaseMedical } from 'react-icons/fa6'

function Page () {
  const { handleLogout, profile } = useAuth()
  const [loading, setLoading] = useState(true)
  const items = ['Tristeza', 'Pesimismo', 'Fracaso', 'Pérdida de placer', 'Sentimientos de culpa', 'Sentimientos de castigo', 'Disconformidad con uno mismo', 'Autocrítica', 'Pensamientos o Deseos Suicidas', 'Llanto', 'Agitación', 'Pérdida de interés', 'Indecisión', 'Desvalorización', 'Pérdida de Energía', 'Cambios en los Hábitos de Sueño', 'Irritabilidad', 'Cambios en el Apetito', 'Dificultad de Concentración', 'Cansancio o Fatiga', 'Pérdida de Interés en el Sexo']
  const [idb, setIdb] = useState(null)
  useEffect(() => {
    const fetchIdb = async () => {
      try {
        const response = await fetch('/api/panel/get_idb', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const dataTat = await response.json()
        setIdb(dataTat)
      } catch (error) {}
    }
    fetchIdb()
    setLoading(false)
  }, [])

  let suma = 0
  if (idb) {
    idb.map((item) => {
      suma += item
      return null
    })
  }

  const clasificacion = suma <= 12
    ? 'Depresión minima'
    : suma <= 19
      ? 'Depresión leve'
      : suma <= 28
        ? 'Depresión moderada'
        : 'Depresión grave'

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
      <section className="flex flex-col w-8/12 mt-16 items-center justify-center mb-16">
        <IdbTitle />
        <div className='flex flex-col items-center justify-center gap-4'>
          {
            idb && items.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-center gap-2">
                  <FaBriefcaseMedical className="text-2xl font-bold text-success"/>
                  <div className="text-sm">{item} : {idb[index]}</div>
                </div>
              )
            })
          }
        </div>
        <div className='text-success text-center text-xl mt-6'>
          <Chip
            startContent={<FaBriefcaseMedical size={18} />}
            variant="faded"
            color="success"
            className='p-4'
          >
            {clasificacion}
          </Chip>
        </div>
      </section>
      <Divider />
      <FooterSection/>
    </main>
  )
}

export default Page
