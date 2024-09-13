import { NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import LoginButton from '../buttons/loginButton'

function GuestNavbarContent ({ activeItem, setActiveItem }) {
  const guestMenuItems = [
    {
      title: 'Características',
      id: 'caracteristicas'
    },
    {
      title: 'Beneficios',
      id: 'beneficios'
    },
    {
      title: 'Contacto',
      id: 'contacto'
    }
  ]

  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {guestMenuItems.map((item, index) => {
        return (
          <NavbarItem key={index} isActive={activeItem === item.id}>
            <Link
              color="foreground"
              onPress={() => setActiveItem(item.id)}
              href={`#${item.id}`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        )
      })}
      <NavbarItem>
          <LoginButton />
        </NavbarItem>
    </NavbarContent>
  )
}

export default GuestNavbarContent
