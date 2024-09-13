import { Button, Link } from '@nextui-org/react'

function LoginButton () {
  return (
    <Button as={Link} href="/login" color="success" variant="ghost">
      Login
    </Button>
  )
}

export default LoginButton
