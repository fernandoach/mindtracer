import ContactChip from '../chips/contactChip'

function ContactSection ({ sectionIcon, phoneIcon, mailIcon }) {
  const chipContents = ['+51 985 741 852', 'contacto@mindtracer.com']
  const title = 'Contacto'
  const id = 'contacto'
  const content =
    'Si tiene alguna pregunta o comentario, no dude en contactarnos a través de nuestro correo electrónico o telefono.'
  return (
    <section
      className='flex flex-col w-8/12 pt-16 items-center justify-center'
      id={id}
    >
      <div className='flex flex-col items-center justify-center text-center'>
        {sectionIcon}
        <h2 className='text-success text-xl p-3'>{title}</h2>
        <p className='text-sm'>{content}</p>
        {chipContents.map((content, index) => {
          return (
            <ContactChip
              icon={index === 0 ? phoneIcon : mailIcon}
              content={content}
              key={`${content} - ${index}`}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ContactSection
