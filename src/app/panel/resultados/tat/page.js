'use client'
import { useAuth } from '@/components/auth/authContext'
import UserNavbar from '@/components/navbar/userNavbar'
import FooterSection from '@/components/sections/footerSection'
import BodySkeleton from '@/components/skeletons/bodySkeleton'
import IdbTitle from '@/components/titles/idbTitle'
import { Divider } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaBriefcaseMedical } from 'react-icons/fa6'

function App () {
  const { handleLogout, profile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [tat, setTat] = useState(null)
  useEffect(() => {
    const fetchTat = async () => {
      try {
        const response = await fetch('/api/panel/get_tat', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const dataTat = await response.json()
        setTat(dataTat)
      } catch (error) {}
    }
    fetchTat()
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
      <section className="flex flex-col w-8/12 mt-16 items-center justify-center mb-16">
        <IdbTitle />
        <div className='flex flex-col items-center justify-center gap-4'>
          {
            tat && tat.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <div className='flex items-center justify-center gap-2'>
                    <FaBriefcaseMedical className="text-2xl font-bold text-success"/>
                    <h4 className='text-xl text-success'>Lamina {index + 1}</h4>
                  </div>
                  <div className="text-sm">{item}</div>
                </div>
              )
            })
          }
        </div>
      </section>
      <Divider />
      <FooterSection/>
    </main>
  )
}

export default App
