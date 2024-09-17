'use client'
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
  return (
    <>
      {profile.email}
    </>
  )
}

export default Page
