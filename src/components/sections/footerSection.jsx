function FooterSection () {
  const content = '© 2024 Mind Tracer - Todos los derechos reservados'
  const author = 'Powered by Fernando A.'
  return (
    <footer className='w-8/12 py-10 text-center'>
      <p className='text-sm text-foreground'>{content}</p>
      <p className='text-xs text-success'>{author}</p>
    </footer>
  )
}

export default FooterSection
