import { Input } from '@nextui-org/react'
import { FaCircleUser } from 'react-icons/fa6'

function FullnameInput ({ handleChange, fullName, error }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full justify-center">
        <Input
          startContent= {<FaCircleUser className="text-xl text-default-400 pointer-events-none" />}
          validationBehavior="native"
          required
          type="text"
          className="w-64 md:w-96"
          name="fullName"
          variant="bordered"
          label="Nombres completos"
          placeholder="Ingrese su nombre completo"
          value={fullName}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  )
}

export default FullnameInput
