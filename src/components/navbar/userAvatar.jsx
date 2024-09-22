import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, NavbarContent } from '@nextui-org/react'
import { FaAngleDown } from 'react-icons/fa6'

function UserAvatar ({ email, fullname, handleLogout }) {
  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <div className='flex items-center justify-center gap-4 hover:cursor-pointer'>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name={ fullname }
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <FaAngleDown size={20} className='text-success' />
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem as={ Link } key="profile" className="h-14 gap-2 text-foreground" href='/panel/profile'>
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{ email }</p>
          </DropdownItem>
          <DropdownItem onClick={ handleLogout } key="logout" color="danger">
            Cerrar sesión
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  )
}

export default UserAvatar
