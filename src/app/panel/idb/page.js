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

function Page () {
  const quest = 1
  const { handleLogout, profile, loading } = useAuth()
  const content = 'Un joven ve una guitarra.'
  const options = [
    { text: 'A', value: 'a' },
    { text: 'B', value: 'b' }
  ]
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
          Responda a la pregunta seleccionando una opción, de manera que la
          respuesta sea como te sientas.
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
                {content}
              </span>
              <RadioGroup label="Selecciona una opción">
                {options.map((option) => (
                  <Radio key={option.value} value={option.value}>
                    {option.text}
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
