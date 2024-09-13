'use client'
import EmailInput from '@/components/inputs/emailInput'
import PasswordInput from '@/components/inputs/passwordInput'
import GuestNavbar from '@/components/navbar/guestNavbar'
import { Button } from '@nextui-org/react'

function Page () {
  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden'>
      <GuestNavbar />
      <section className='flex flex-col w-8/12 mt-16'>
        <h1>Login</h1>
        <form>
          <EmailInput />
          <PasswordInput />
          <Button type='submit' color='success' variant='bordered' size='lg'>
            Login
          </Button>
        </form>
      </section>
    </main>
  )
}

export default Page
