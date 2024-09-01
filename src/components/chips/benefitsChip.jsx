import { Chip } from '@nextui-org/react'

function BenefitsChip ({ chipIcon, chip }) {
  return (
    <div className='pt-4 md:pt-4'>
      <Chip startContent={chipIcon} className='w-max px-5'>
        {chip}
      </Chip>
    </div>
  )
}

export default BenefitsChip
