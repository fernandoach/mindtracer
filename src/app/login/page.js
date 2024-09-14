'use client'
import SendButton from '@/components/buttons/sendButton'
import EmailInput from '@/components/inputs/emailInput'
import PasswordInput from '@/components/inputs/passwordInput'
import GuestNavbar from '@/components/navbar/guestNavbar'
import LoginTitle from '@/components/titles/loginTitle'
import { useState } from 'react'

function Page () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden h-screen'>
      <GuestNavbar />
      <section className='flex flex-col w-8/12'>
        <LoginTitle />
        <form className="flex flex-col items-center justify-center gap-4">
          <EmailInput handleChange={handleChange} email={formData.email} />
          <PasswordInput handleChange={handleChange} password={formData.password} />
          <SendButton />
        </form>
      </section>
    </main>
  )
}

export default Page
