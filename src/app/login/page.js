'use client'
import SendButton from '@/components/buttons/SendButton'
import EmailInput from '@/components/inputs/emailInput'
import PasswordInput from '@/components/inputs/passwordInput'
import GuestNavbar from '@/components/navbar/guestNavbar'
import { FaArrowRightToBracket } from 'react-icons/fa6'

function Page () {
  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden h-screen'>
      <GuestNavbar />
      <section className='flex flex-col w-8/12'>
      <div className="flex items-center justify-center w-full mb-4">
          <h2 className="text-success text-center text-xl p-3 flex flex-col items-center justify-center">
          <FaArrowRightToBracket
            className="flex justify-center text-success items-center h-full mx-2"
            size={30}
          />
          <span>Iniciar sesión  </span>
          </h2>
        </div>
        <form className="flex flex-col items-center justify-center gap-4">
          <EmailInput />
          <PasswordInput />
          <SendButton />
        </form>
      </section>
    </main>
  )
}

export default Page
