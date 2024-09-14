'use client'
import CancelButton from '@/components/buttons/cancelButton'
import SendButton from '@/components/buttons/sendButton'
import AgeInput from '@/components/inputs/ageInput'
import CodeInput from '@/components/inputs/codeInput'
import EmailInput from '@/components/inputs/emailInput'
import FullnameInput from '@/components/inputs/fullnameInput'
import GenderInput from '@/components/inputs/genderInput'
import GradeInput from '@/components/inputs/gradeInput'
import PasswordInput from '@/components/inputs/passwordInput'
import RepasswordInput from '@/components/inputs/repasswordInput'
import GuestNavbar from '@/components/navbar/guestNavbar'
import FooterSection from '@/components/sections/footerSection'
import RegisterTitle from '@/components/titles/registerTitle'
import { Divider } from '@nextui-org/react'

function Page () {
  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden'>
      <GuestNavbar />
      <section className='flex flex-col w-8/12 mt-16'>
        <RegisterTitle />
        <form className="flex flex-col items-center justify-center gap-4">
          <FullnameInput />
          <GenderInput />
          <AgeInput />
          <GradeInput />
          <EmailInput />
          <PasswordInput />
          <RepasswordInput />
          <CodeInput />
          <div className='flex items-center justify-center gap-4 mt-3'>
            <SendButton />
            <CancelButton />
          </div>
        </form>
      </section>
      <Divider className=' mt-10' />
      <FooterSection />
    </main>
  )
}

export default Page
