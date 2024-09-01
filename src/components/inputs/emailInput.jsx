import { Input } from '@nextui-org/react'
import { FaAddressCard } from 'react-icons/fa6'

function EmailInput ({ error, handleChange, email }) {
  const label = 'Correo electrónico'
  const placeholder = 'Ingrese su correo electrónico'
  const name = 'email'
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <FaAddressCard
          className="flex justify-center items-center h-full mx-2"
          size={30}
        />
        <Input
          validationBehavior="native"
          required
          type="email"
          name={ name }
          className="w-64 md:w-96"
          variant="bordered"
          label={ label }
          placeholder={ placeholder }
          value={email}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  )
}

export default EmailInput
