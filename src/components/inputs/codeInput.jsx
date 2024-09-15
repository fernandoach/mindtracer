import { Input } from '@nextui-org/react'
import { FaKey } from 'react-icons/fa6'

function CodeInput ({ handleChange, code }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Input
        startContent={
          <FaKey className="text-xl text-default-400 pointer-events-none" />
        }
        validationBehavior="native"
        required
        type="text"
        className="w-64 md:w-96"
        name="code"
        variant="bordered"
        label="Código de invitación"
        placeholder="Ingrese su código de invitación"
        value={code}
        onChange={handleChange}
      />
    </div>
  )
}

export default CodeInput
