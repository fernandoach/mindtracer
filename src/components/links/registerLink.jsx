import { Link } from '@nextui-org/react'

function RegisterLink () {
  return (
    <div className="flex text-center items-center justify-center gap-2 mt-5">
      <span className='text-sm'>¿No tienes una cuenta?</span>
      <Link href="/register" className="text-sm text-center text-success hover:text-primary underline">
      Regístrate aquí
      </Link>
    </div>
  )
}

export default RegisterLink
