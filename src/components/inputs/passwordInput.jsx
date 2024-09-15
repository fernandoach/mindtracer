'use client'
import { Input } from '@nextui-org/input'
import { useState } from 'react'
import { FaEye, FaEyeLowVision, FaLock } from 'react-icons/fa6'

function PasswordInput ({ handleChange, password }) {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Input
        startContent={
          <FaLock className="text-xl text-default-400 pointer-events-none" />
        }
        validationBehavior="native"
        required
        type={isVisible ? 'text' : 'password'}
        name="password"
        className="w-64 md:w-96"
        variant="bordered"
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        endContent={
          <button
            className="h-full focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible
              ? (
              <FaEyeLowVision className="text-2xl h-max text-default-400 pointer-events-none" />
                )
              : (
              <FaEye className="text-2xl text-default-400 pointer-events-none" />
                )}
          </button>
        }
        value={password}
        onChange={handleChange}
      />
    </div>
  )
}

export default PasswordInput
