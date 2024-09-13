import { Input } from '@nextui-org/react'
import { FaAddressCard } from 'react-icons/fa6'

function EmailInput () {
  return (
    <div className="flex items-center w-full justify-center">
      <Input
        startContent= {<FaAddressCard className="text-xl text-default-400 pointer-events-none" />}
        validationBehavior="native"
        required
        type="email"
        name="email"
        className="w-64 md:w-96"
        variant="bordered"
        label="Correo electrónico"
        placeholder="Ingrese su correo electrónico"
      />
    </div>
  )
}

export default EmailInput
