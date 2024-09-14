import { Button } from '@nextui-org/react'
import { FaCircleRight } from 'react-icons/fa6'

function SendButton () {
  return (
    <Button type='submit' color="success" variant="ghost">
      <FaCircleRight className='text-xl pointer-events-none' />
      <span>Enviar</span>
    </Button>
  )
}

export default SendButton
