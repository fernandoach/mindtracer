'use client'
import CancelButton from '@/components/buttons/cancelButton'
import SendButton from '@/components/buttons/sendButton'
import ErrorChip from '@/components/chips/errorChip'
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
import { registerSchema } from '@/schemas/registerSchema'
import { Divider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Page () {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age: 10,
    grade: 1,
    email: '',
    password: '',
    repassword: '',
    code: ''
  })

  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [errors, setErrors] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await registerSchema.validateAsync({
        ...formData,
        gender: String(formData.gender),
        age: Number(formData.age),
        grade: Number(formData.grade)
      })
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          gender: String(formData.gender),
          age: Number(formData.age),
          grade: Number(formData.grade)
        })
      })

      if (response.ok) {
        setErrors(null)
        router.push('/login')
      }

      if (!response.ok) {
        setIsSubmitting(false)
        const { error } = await response.json()
        setErrors(error)
      }
    } catch (error) {
      setIsSubmitting(false)
      setErrors(error.message)
    }
  }

  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden'>
      <GuestNavbar />
      <section className='flex flex-col w-8/12 mt-16'>
        <RegisterTitle />
        <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
          {errors && <ErrorChip error={errors} />}
          <FullnameInput handleChange={handleChange} fullName={formData.fullName} />
          <GenderInput handleChange={handleChange} gender={formData.gender} />
          <AgeInput handleChange={handleChange} age={formData.age} />
          <GradeInput handleChange={handleChange} grade={formData.grade} />
          <EmailInput handleChange={handleChange} email={formData.email} />
          <PasswordInput handleChange={handleChange} password={formData.password} />
          <RepasswordInput handleChange={handleChange} repassword={formData.repassword} />
          <CodeInput handleChange={handleChange} code={formData.code} />
          <div className='flex items-center justify-center gap-4 mt-3'>
            <SendButton isSubmitting={isSubmitting} />
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
