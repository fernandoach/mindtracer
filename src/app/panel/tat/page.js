'use client'
import { useAuth } from '@/components/auth/authContext'
import SendButton from '@/components/buttons/sendButton'
import UserNavbar from '@/components/navbar/userNavbar'
import BodySkeleton from '@/components/skeletons/bodySkeleton'
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
      switch (tatLength) {
        case 0:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 1:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 2:
          if (profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].bm.theme)
            setImageSrc(tatQuestions[tatLength].bm.image)
            break
          } else {
            setQuestion(tatQuestions[tatLength].gf.theme)
            setImageSrc(tatQuestions[tatLength].gf.image)
          }
          break
        case 3:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 4:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 5:
          if (profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].bm.theme)
            setImageSrc(tatQuestions[tatLength].bm.image)
            break
          } else {
            setQuestion(tatQuestions[tatLength].gf.theme)
            setImageSrc(tatQuestions[tatLength].gf.image)
          }
          break
        case 6:
          if (profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].bm.theme)
            setImageSrc(tatQuestions[tatLength].bm.image)
            break
          } else {
            setQuestion(tatQuestions[tatLength].gf.theme)
            setImageSrc(tatQuestions[tatLength].gf.image)
          }
          break
        case 7:
          if (profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].bm.theme)
            setImageSrc(tatQuestions[tatLength].bm.image)
          } else {
            setQuestion(tatQuestions[tatLength].gf.theme)
            setImageSrc(tatQuestions[tatLength].gf.image)
          }
          break
        case 8:
          if (profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].bm.theme)
            setImageSrc(tatQuestions[tatLength].bm.image)
            break
          } else {
            setQuestion(tatQuestions[tatLength].gf.theme)
            setImageSrc(tatQuestions[tatLength].gf.image)
          }
          break
        case 9:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 10:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 11:
          if (profile.age > 14 && profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].m.theme)
            setImageSrc(tatQuestions[tatLength].m.image)
          }
          if (profile.age > 14 && profile.gender === 'F') {
            setQuestion(tatQuestions[tatLength].f.theme)
            setImageSrc(tatQuestions[tatLength].f.image)
          } else {
            setQuestion(tatQuestions[tatLength].bg.theme)
            setImageSrc(tatQuestions[tatLength].bg.image)
          }
          break
        case 12:
          if (profile.age <= 14 && profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].b.theme)
            setImageSrc(tatQuestions[tatLength].b.image)
          }
          if (profile.age <= 14 && profile.gender === 'F') {
            setQuestion(tatQuestions[tatLength].g.theme)
            setImageSrc(tatQuestions[tatLength].g.image)
          } else {
            setQuestion(tatQuestions[tatLength].mf.theme)
            setImageSrc(tatQuestions[tatLength].mf.image)
          }
          break
        case 13:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 14:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 15:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 16:
          if (profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].bm.theme)
            setImageSrc(tatQuestions[tatLength].bm.image)
          } else {
            setQuestion(tatQuestions[tatLength].gf.theme)
            setImageSrc(tatQuestions[tatLength].gf.image)
          }
          break
        case 17:
          if (profile.gender === 'M') {
            setQuestion(tatQuestions[tatLength].bm.theme)
            setImageSrc(tatQuestions[tatLength].bm.image)
          } else {
            setQuestion(tatQuestions[tatLength].gf.theme)
            setImageSrc(tatQuestions[tatLength].gf.image)
          }
          break
        case 18:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
        case 19:
          setQuestion(tatQuestions[tatLength].theme)
          setImageSrc(tatQuestions[tatLength].image)
          break
      }
    }
    setLoading(false)
  }, [tatLength])

  // TODO: onSubmit
  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      setIsSubmitted(true)
      const response = await fetch('/api/panel/set_tat_question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          history
        })
      })

      if (response.ok && tatLength < 19) {
        window.location.reload()
      }

      if (response.ok && tatLength === 19) {
        router.push('/panel')
      }

      setIsSubmitted(false)
    } catch (error) {}
  }

  const onChange = (e) => {
    e.preventDefault()
    setHistory(e.target.value)
    console.log(history)
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
            <form className='flex flex-col items-center justify-center w-full gap-4' onSubmit={onSubmit}>
              <span className="text-base font-semibold text-center">
                {question}
              </span>
              <Image src={imageSrc} alt="image" width='auto' />
              <Textarea
                onChange={onChange}
                className="w-full"
                placeholder="Escribe aquí tu respuesta"
                name='respuesta'
                required
                validationBehavior='native'
                maxLength={500}
              />
              <div className="flex flex-row items-center justify-center gap-4">
                <Button isDisabled={tatLength < 1 || isSubmitted} color="warning" variant="ghost">
                  <FaCircleLeft className="text-xl pointer-events-none" />
                  <span>Atras</span>
                </Button>
                <SendButton isSubmitting={isSubmitted} />
              </div>
            </form>
          </CardBody>
          <Divider />
          <CardFooter className='flex flex-col justify-center items-center text-success'>
              <span className="text-sm font-semibold text-center">
                { tatLength + 1 + '/20'}
              </span>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default Page
