import { Button, Link } from '@nextui-org/react'

function HomeButton ({ icon }) {
  const content = 'Comenzar'
  const href = '/login'
  return (
    <div className='flex gap-4 items-center justify-center p-3'>
      <Button
        as={Link}
        href={href}
        startContent={icon}
        color='success'
        size='md'
        className='hover:bg-green-300 transition-all duration-500'
      >
        {content}
      </Button>
    </div>
  )
}

export default HomeButton
