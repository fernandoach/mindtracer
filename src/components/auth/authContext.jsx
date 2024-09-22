'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Crear el contexto
const AuthContext = createContext({
  user: null,
  handleLogout: async () => {},
  loading: true,
  handleLogin: async (email, password) => null
})

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext)

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState({ email: '', role: '', fullName: '' })
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const handleLogin = async (email, password) => {
    const loginResponse = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (loginResponse.ok) {
      const userData = await loginResponse.json()
      setProfile(userData) // Actualizar el estado del usuario en el contexto
      return userData
    }

    throw new Error('Error de inicio de sesión')
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setProfile(null)
        router.push('/login')
      }
    } catch (error) {
      router.push('/login')
    }
  }

  useEffect(() => {
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
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return (
    <AuthContext.Provider value={{ profile, handleLogout, loading, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
