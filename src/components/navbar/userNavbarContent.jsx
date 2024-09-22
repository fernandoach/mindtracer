import { NavbarContent, NavbarItem, Link } from '@nextui-org/react'

function UserNavbarContent ({ activeItem, setActiveItem }) {
  const userMenuItems = [
    {
      title: 'Panel',
      id: 'panel'
    },
    {
      title: 'Resultados',
      id: 'panel/resultados'
    },
    {
      title: 'Pruebas',
      id: 'panel/pruebas'
    }
  ]

  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {userMenuItems.map((item, index) => {
        return (
          <NavbarItem key={index} isActive={activeItem === item.id}>
            <Link
              color="foreground"
              onPress={() => setActiveItem(item.id)}
              href={`/${item.id}`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        )
      })}
    </NavbarContent>
  )
}

export default UserNavbarContent
