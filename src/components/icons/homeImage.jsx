import { Image } from '@nextui-org/react'

function HomeImage () {
  const src = 'images/home_01.jpg'
  const alt = 'home image'
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <Image src={src} alt={alt} width={300} height='auto' className='mb-4' />
    </div>
  )
}

export default HomeImage
