import { Select, SelectItem } from '@nextui-org/react'
import { FaTransgender } from 'react-icons/fa6'

function GenderInput ({ handleChange, gender }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Select
        startContent={
          <FaTransgender className="text-xl text-default-400 pointer-events-none" />
        }
        aria-label="Género"
        label="Género"
        required
        variant="bordered"
        className="w-64 md:w-96"
        placeholder="Ingrese su género"
        name="gender"
        onChange={handleChange}
        value={gender}
      >
        <SelectItem key={'M'} value="M">
          Masculino
        </SelectItem>
        <SelectItem key={'F'} value="F">
          Femenino
        </SelectItem>
      </Select>
    </div>
  )
}

export default GenderInput
