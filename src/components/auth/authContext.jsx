'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
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
  const [user, setUser] = useState(null)
  const [loading, setLoading] = React.useState(true)

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
      setUser(userData) // Actualizar el estado del usuario en el contexto
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
        setUser(null)
        router.push('/login')
      }
    } catch (error) {
      router.push('/login')
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch('/api/auth/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error fetching user data')
      }

      const data = await response.json()
      setUser(data)
      return data
    } catch (err) {
      return null
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Cargar datos del usuario al montar el componente
    fetchData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, handleLogout, loading, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
