'use client'
import { useAuth } from '@/components/auth/authContext'
import SendButton from '@/components/buttons/sendButton'
import UserNavbar from '@/components/navbar/userNavbar'
import TatTitle from '@/components/titles/tatTitle'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Textarea } from '@nextui-org/react'
import { FaCircleLeft, FaClipboardQuestion } from 'react-icons/fa6'

function Page () {
  const quest = 1
  const { handleLogout, profile, loading } = useAuth()
  const imageSrc = '/images/home_01.jpg'
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
              Pregunta {quest}
            </span>
          </CardHeader>
          <Divider />
          <CardBody className='flex flex-col items-center justify-center w-full'>
            <form className='flex flex-col items-center justify-center w-full gap-4'>
              <Image src={imageSrc} alt="image" width='auto' />
              <Textarea
                className="w-full"
                placeholder="Escribe aquí tu respuesta"
                name='respuesta'
              />
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
          <CardFooter className='flex flex-col justify-center items-center text-success'>
              <span className="text-sm font-semibold text-center">
                { quest + '/20'}
              </span>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default Page
