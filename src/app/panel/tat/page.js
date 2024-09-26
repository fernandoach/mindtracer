'use client'
import { useAuth } from '@/components/auth/authContext'
import SendButton from '@/components/buttons/sendButton'
import UserNavbar from '@/components/navbar/userNavbar'
import TatTitle from '@/components/titles/tatTitle'
import { tatQuestions } from '@/static/tat'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaCircleLeft, FaClipboardQuestion } from 'react-icons/fa6'

function Page () {
  const { handleLogout, profile } = useAuth()
  const [tatLength, setTatLength] = useState(null)
  const [question, setQuestion] = useState('')
  const [imageSrc, setImageSrc] = useState([])
  const [loading, setLoading] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [history, setHistory] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const responseTat = await fetch('/api/panel/tat_length', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!responseTat.ok) {
          throw new Error(`HTTP error! Status: ${responseTat.status}`)
        }

        const dataTat = await responseTat.json()
        setTatLength(dataTat)
      } catch (error) {}
    }
    fetchTests()
  }, [])

  useEffect(() => {
    if (tatLength !== null && tatQuestions[tatLength]) {
      setQuestion(tatQuestions[tatLength].theme)
      setImageSrc(tatQuestions[tatLength].image)
    }
    setLoading(false)
  }, [tatLength])

  return (
    <main className="dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden">
      <UserNavbar
        profile={profile}
        handleLogout={handleLogout}
        loading={loading}
      />
      <section className="flex flex-col w-8/12 mt-16 items-center justify-center">
      <TatTitle />
        <span className="text-base font-semibold text-center">
          Cree una historia a partir de la imagen que observe, puede dejar llevar su imaginación. Recuerde que el limite es de 500 letras.
        </span>
        <Card className="max-w-auto w-full mt-8">
        <CardHeader className="flex flex-row items-center justify-center gap-4 text-success">
            <FaClipboardQuestion className="text-2xl" />
            <span className="text-base font-semibold text-center">
              Pregunta {tatLength + 1 }
            </span>
          </CardHeader>
          <Divider />
          <CardBody className='flex flex-col items-center justify-center w-full'>
            <form className='flex flex-col items-center justify-center w-full gap-4'>
              <span className="text-base font-semibold text-center">
                {question}
              </span>
              <Image src={imageSrc} alt="image" width='auto' />
              <Textarea
                className="w-full"
                placeholder="Escribe aquí tu respuesta"
                name='respuesta'
                required
                validationBehavior='native'
                maxLength={500}
              />
              <div className="flex flex-row items-center justify-center gap-4">
                <Button isDisabled={tatLength < 1} color="warning" variant="ghost">
                  <FaCircleLeft className="text-xl pointer-events-none" />
                  <span>Atras</span>
                </Button>
                <SendButton />
              </div>
            </form>
          </CardBody>
          <Divider />
          <CardFooter className='flex flex-col justify-center items-center text-success'>
              <span className="text-sm font-semibold text-center">
                { tatLength + '/20'}
              </span>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default Page
