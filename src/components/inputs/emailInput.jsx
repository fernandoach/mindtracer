import { Input } from '@nextui-org/react'
import { FaAddressCard } from 'react-icons/fa6'

function EmailInput ({ handleChange, email, error }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <Input
          startContent={
            <FaAddressCard className="text-xl text-default-400 pointer-events-none" />
          }
          validationBehavior="native"
          required
          type="email"
          name="email"
          className="w-64 md:w-96"
          variant="bordered"
          label="Correo electrónico"
          placeholder="Ingrese su correo electrónico"
          value={email}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  )
}

export default EmailInput
