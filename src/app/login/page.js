'use client'
import SendButton from '@/components/buttons/sendButton'
import EmailInput from '@/components/inputs/emailInput'
import PasswordInput from '@/components/inputs/passwordInput'
import RegisterLink from '@/components/links/registerLink'
import GuestNavbar from '@/components/navbar/guestNavbar'
import LoginTitle from '@/components/titles/loginTitle'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const { email, password } = formData
    console.log(email, password)
    setIsSubmitting(false)
  }

  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden h-screen'>
      <GuestNavbar />
      <section className='flex flex-col w-8/12'>
        <LoginTitle />
        <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
          <EmailInput handleChange={handleChange} email={formData.email} />
          <PasswordInput handleChange={handleChange} password={formData.password} />
          <SendButton isSubmitting={isSubmitting}/>
        </form>
        <RegisterLink />
      </section>
    </main>
  )
}

export default Page
