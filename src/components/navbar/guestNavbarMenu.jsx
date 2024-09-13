import { NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react'
import LoginButton from '../buttons/loginButton'

function GuestNavbarMenu ({ activeItem, setActiveItem }) {
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
    <NavbarMenu className='pt-5 gap-4 bg-primary-secondary'>
      {
          guestMenuItems.map(
            (item, index) => {
              return (
                <NavbarMenuItem key={index} isActive={activeItem === item.id}>
                  <Link
                  color='foreground'
                  onPress={() => setActiveItem(item.id)}
                  className='w-full'
                  href={`#${item.id}`}
                  size='lg'>
                    {item.title}
                  </Link>
                </NavbarMenuItem>
              )
            }
          )
        }
        <NavbarMenuItem>
          <LoginButton />
        </NavbarMenuItem>
      </NavbarMenu>
  )
}

export default GuestNavbarMenu
