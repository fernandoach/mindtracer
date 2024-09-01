import { Button } from '@nextui-org/react'

function ComenzarButton ({ icon }) {
  const content = 'Comenzar'
  return (
    <div className="flex gap-4 items-center justify-center p-3">
      <Button
        as="a"
        href="/login"
        startContent={icon}
        color="success"
        size="md"
        className="hover:bg-green-300 transition-all duration-500"
      >
        { content }
      </Button>
    </div>
  )
}

export default ComenzarButton
