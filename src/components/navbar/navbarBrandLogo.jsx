import { Image, Link, NavbarBrand } from '@nextui-org/react'

function NavbarBrandLogo () {
  return (
    <NavbarBrand className="flex items-center justify-center sm:justify-start  ">
      <Link href="/" className="gap-4 text-foreground flex">
        <Image src="logo.svg" alt="Logo" width={25} height={25} />
        <p className="font-bold text-inherit">MIND TRACER</p>
      </Link>
    </NavbarBrand>
  )
}

export default NavbarBrandLogo
