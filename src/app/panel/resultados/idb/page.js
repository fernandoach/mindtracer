import { useAuth } from '@/components/auth/authContext'
import UserNavbar from '@/components/navbar/userNavbar'
import { useState } from 'react'

function App () {
  const { handleLogout, profile } = useAuth()
  const [loading, setLoading] = useState(true)
  const items = []
  return (
    <main className="dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden">
      <UserNavbar
        profile={profile}
        handleLogout={handleLogout}
        loading={loading}
      />
      <section className="flex flex-col w-8/12 mt-16 items-center justify-center">
        <div>
          <div>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
