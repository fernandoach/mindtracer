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

function Page () {
  const quest = 1
  const { handleLogout, profile } = useAuth()
  const [idbLength, setIdbLength] = useState(null)
  const [answer, setAnswer] = useState('')
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(true)
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
      setAnswer(idbQuestions[idbLength].question)
      setOptions(idbQuestions[idbLength].answers)
    }
    setLoading(false)
  }, [idbLength])

  const [res, setRes] = useState(null)

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
              Pregunta {quest}
            </span>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col items-center justify-center w-full">
            <form className="flex flex-col items-center justify-center w-full gap-4">
              <span className="text-base font-semibold text-center">
                {answer}
              </span>
              <RadioGroup label="Selecciona una opción" className='text-center' isRequired validationBehavior='native' name='respuesta'>
                {options.map((option) => (
                  <Radio key={option.option} value={option.value} color='success' onClick={() => setRes(option.value)}>
                    {option.option}
                  </Radio>
                ))}
              </RadioGroup>
              <div className="flex flex-row items-center justify-center gap-4">
                <Button isDisabled={quest <= 1} color="warning" variant="ghost">
                  <FaCircleLeft className="text-xl pointer-events-none" />
                  <span>Atras</span>
                </Button>
                <SendButton />
              </div>
            </form>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-col justify-center items-center text-success">
            <span className="text-sm font-semibold text-center">
              {quest + '/20'}
            </span>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default Page
