import { Input } from '@nextui-org/react'
import { useState } from 'react'
import { FaEye, FaEyeLowVision, FaLock } from 'react-icons/fa6'

function RepasswordInput ({ handleChange, repassword, error }) {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <Input
          startContent={<FaLock className="text-xl text-default-400 pointer-events-none" />}
          validationBehavior="native"
          required
          type={isVisible ? 'text' : 'password'}
          name="rePassword"
          className="w-64 md:w-96"
          variant="bordered"
          label="Re-contraseña"
          placeholder="Repita su contraseña"
          value={repassword}
          onChange={handleChange}
          endContent={
            <button className="h-full focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              {isVisible
                ? (
                <FaEyeLowVision className="text-2xl h-max text-default-400 pointer-events-none" />
                  )
                : (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
            </button>
          }
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  )
}

export default RepasswordInput
