import { Input } from '@nextui-org/react'
import { FaCalendarDay } from 'react-icons/fa6'

function AgeInput ({ handleChange, age, error }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <Input
          startContent= {<FaCalendarDay
            className="text-xl text-default-400 pointer-events-none"
          />}
          validationBehavior="native"
          required
          type="number"
          name="age"
          min={10}
          className="w-64 md:w-96"
          max={30}
          step={1}
          label="Edad"
          placeholder="Ingrese su edad"
          value={age}
          onChange={handleChange}
          variant="bordered"
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  )
}

export default AgeInput
