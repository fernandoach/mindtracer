import { NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react'
import LoginButton from '../buttons/loginButton'

function UserNavbarMenu ({ activeItem, setActiveItem }) {
  const userMenuItems = [
    {
      title: 'Panel',
      id: 'panel'
    },
    {
      title: 'Resultados',
      id: 'resultados'
    },
    {
      title: 'Pruebas',
      id: 'pruebas'
    }
  ]

  return (
    <NavbarMenu className='pt-5 gap-4 bg-primary-secondary'>
      {
          userMenuItems.map(
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

export default UserNavbarMenu
