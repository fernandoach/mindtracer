import { Button, Link } from '@nextui-org/react'
import { FaCircleXmark } from 'react-icons/fa6'

function CancelButton () {
  return (
    <Button as={Link} href="/" color="danger" variant="ghost">
      <FaCircleXmark className="text-xl pointer-events-none" />
      <span>Cancelar</span>
    </Button>
  )
}

export default CancelButton
