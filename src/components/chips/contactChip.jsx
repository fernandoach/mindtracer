import { Chip } from '@nextui-org/react'

function ContactChip ({ icon, content }) {
  return (
    <div className='pt-4 md:pt-4'>
      <Chip startContent={icon} endContent={icon} className='w-max px-5'>
        {content}
      </Chip>
    </div>
  )
}

export default ContactChip
