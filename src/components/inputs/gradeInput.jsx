import { Input } from '@nextui-org/react'
import { FaGraduationCap } from 'react-icons/fa6'

function GradeInput ({ handleChange, grade }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Input
        startContent={
          <FaGraduationCap className="text-xl text-default-400 pointer-events-none" />
        }
        validationBehavior="native"
        required
        type="number"
        name="grade"
        min={1}
        max={5}
        step={1}
        label="Grado"
        className="w-64 md:w-96"
        variant="bordered"
        placeholder="Ingrese su grado"
        value={grade}
        onChange={handleChange}
      />
    </div>
  )
}

export default GradeInput
