'use client'
import { useAuth } from '@/components/auth/authContext'
import SendButton from '@/components/buttons/sendButton'
import UserNavbar from '@/components/navbar/userNavbar'
import IdbTitle from '@/components/titles/idbTitle'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Radio,
  RadioGroup
} from '@nextui-org/react'
import { FaCircleLeft, FaClipboardQuestion } from 'react-icons/fa6'
import { idbQuestions } from '@/static/idb'
import { useEffect, useState } from 'react'
import BodySkeleton from '@/components/skeletons/bodySkeleton'
import { useRouter } from 'next/navigation'

function Page () {
  const { handleLogout, profile } = useAuth()
  const [idbLength, setIdbLength] = useState(null)
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [select, setSelect] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const responseIdb = await fetch('/api/panel/idb_length', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!responseIdb.ok) {
          throw new Error(`HTTP error! Status: ${responseIdb.status}`)
        }

        const dataIdb = await responseIdb.json()
        setIdbLength(dataIdb)
      } catch (error) {}
    }
    fetchTests()
  }, [])

  useEffect(() => {
    if (idbLength !== null && idbQuestions[idbLength]) {
      setQuestion(idbQuestions[idbLength].question)
      setOptions(idbQuestions[idbLength].answers)
    }
    setLoading(false)
  }, [idbLength])

  const [answer, setAnswer] = useState(null)

  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      setIsSubmitted(true)
      const response = await fetch('/api/panel/set_idb_question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          answer
        })
      })

      if (response.ok && idbLength < 20) {
        window.location.reload()
      }

      if (response.ok && idbLength === 20) {
        router.push('/panel')
      }

      setIsSubmitted(false)
    } catch (error) {}
  }

  const onSelect = (e) => {
    e.preventDefault()

    switch (e.target.value) {
      case '0':
        setAnswer(0)
        break
      case '1':
        setAnswer(1)
        break
      case '2':
        setAnswer(2)
        break
      case '3':
        setAnswer(3)
        break
      case '1a':
        setAnswer(1)
        break
      case '1b':
        setAnswer(1)
        break
      case '2a':
        setAnswer(2)
        break
      case '2b':
        setAnswer(2)
        break
      case '3a':
        setAnswer(3)
        break
      case '3b':
        setAnswer(3)
        break
    }
    setSelect(e.target.value)
  }

  if (loading) {
    return (
      <main className="dark h-screen text-foreground bg-background flex flex-col items-center justify-center">
        <UserNavbar
          profile={profile}
          handleLogout={handleLogout}
          loading={loading}
        />
        <BodySkeleton />
      </main>
    )
  }
  return (
    <main className="dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden">
      <UserNavbar
        profile={profile}
        handleLogout={handleLogout}
        loading={loading}
      />
      <section className="flex flex-col w-8/12 mt-16 items-center justify-center">
        <IdbTitle />
        <span className="text-base font-semibold text-center">
          Responda a la pregunta seleccionando una opción.
        </span>
        <Card className="max-w-auto w-full mt-8">
          <CardHeader className="flex flex-row items-center justify-center gap-4 text-success">
            <FaClipboardQuestion className="text-2xl" />
            <span className="text-base font-semibold text-center">
              Pregunta {idbLength + 1}
            </span>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col items-center justify-center w-full">
            <form className="flex flex-col items-center justify-center w-full gap-4" onSubmit={onSubmit}>
              <span className="text-base font-semibold text-center">
                {question}
              </span>
              <RadioGroup label="Selecciona una opción" className='text-center' isRequired validationBehavior='native' name='respuesta' value={select} onChange={onSelect}>
                {options.map((option) => (
                  <Radio key={option.option} className='text-left' value={option.value} color='success'>
                    {option.option}
                  </Radio>
                ))}
              </RadioGroup>
              <div className="flex flex-row items-center justify-center gap-4">
                <Button isDisabled={idbLength < 1 || isSubmitted} color="warning" variant="ghost">
                  <FaCircleLeft className="text-xl pointer-events-none" />
                  <span>Atras</span>
                </Button>
                <SendButton isSubmitting={isSubmitted} />
              </div>
            </form>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-col justify-center items-center text-success">
            <span className="text-sm font-semibold text-center">
              {idbLength + 1} de 21 preguntas
            </span>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default Page
