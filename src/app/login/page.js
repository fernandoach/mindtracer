'use client'
import EmailInput from '@/components/inputs/emailInput'
import PasswordInput from '@/components/inputs/passwordInput'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaArrowRightToBracket } from 'react-icons/fa6'

function Page () {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setIsSubmitting(true)

    try {
      // Aquí puedes agregar tu lógica de validación o envío de datos
      console.log('Enviado')

      // Simulando un envío exitoso, puedes reemplazarlo con tu lógica real
      const userData = {
        // Crea un objeto de datos de usuario simulado
        email: formData.email,
        password: formData.password
      }

      // Verifica si el usuario y la contraseña son válidos
      if (userData.email === 'example@example.com' && userData.password === 'password') {
        // Redirige al usuario si el inicio de sesión es exitoso
        router.replace('/panel')
      } else {
        // Establece un mensaje de error si las credenciales son inválidas
        setErrors({ email: 'Email y/o contraseña inválidos' })
      }
    } catch (error) {
      // Manejo de errores
      setErrors({ email: 'Ocurrió un error al iniciar sesión' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <section className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-md py-10 mx-auto">
        <div className="flex items-center justify-center w-full mb-4">
          <FaArrowRightToBracket
            className="flex justify-center text-success items-center h-full mx-2"
            size={30}
          />
          <h2 className="text-success text-center text-xl p-3">Regístrate</h2>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <EmailInput
            error={errors.email}
            handleChange={handleChange}
            email={formData.email}
          />
          <PasswordInput
            error={errors.password}
            handleChange={handleChange}
            password={formData.password}
          />

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-3">
          <Button
            type="submit"
            variant="bordered"
            className="hover:bg-slate-700"
            color="success"
            isDisabled={isSubmitting}
          >
            Login
          </Button>
          </div>
        </form>
      </div>
    </section>
    </main>
  )
}

export default Page
