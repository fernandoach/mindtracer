'use client'
import { useAuth } from '@/components/auth/authContext'
import SendButton from '@/components/buttons/sendButton'
import ErrorChip from '@/components/chips/errorChip'
import EmailInput from '@/components/inputs/emailInput'
import PasswordInput from '@/components/inputs/passwordInput'
import RegisterLink from '@/components/links/registerLink'
import GuestNavbar from '@/components/navbar/guestNavbar'
import LoginTitle from '@/components/titles/loginTitle'
import { loginSchema } from '@/schemas/loginSchema'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Page () {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const [errors, setErrors] = useState(null)
  const { handleLogin } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)
      const { email, password } = formData
      await loginSchema.validateAsync({ email, password })
      const userData = await handleLogin(email, password)
      if (userData) {
        router.push('/panel')
      } else {
        setErrors('Usuario y/o contraseña incorrectos.')
        setIsSubmitting(false)
      }
    } catch (error) {
      setErrors('Usuario y/o contraseña incorrectos.')
      setIsSubmitting(false)
    }
  }

  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden h-screen'>
      <GuestNavbar />
      <section className='flex flex-col w-8/12'>
        <LoginTitle />
        <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
          {errors && <ErrorChip error={errors} />}
          <EmailInput handleChange={handleChange} email={formData.email} />
          <PasswordInput handleChange={handleChange} password={formData.password} />
          <SendButton isSubmitting={isSubmitting} />
        </form>
        <RegisterLink />
      </section>
    </main>
  )
}

export default Page
