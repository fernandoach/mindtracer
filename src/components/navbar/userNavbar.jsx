'use client'
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { useState } from 'react'
import NavbarBrandLogo from './navbarBrandLogo'
import UserNavbarMenu from './userNavbarMenu'
import UserNavbarContent from './userNavbarContent'
import UserAvatar from './userAvatar'

function UserNavbar ({ profile, handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='w-screen fixed'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label= { isMenuOpen ? 'Cerrar menu' : 'Abrir menu' }
          className='sm:hidden'
        />
        <NavbarBrandLogo />
      </NavbarContent>
      <UserNavbarContent activeItem={activeItem} setActiveItem={setActiveItem} />
      <UserNavbarMenu activeItem={activeItem} setActiveItem={setActiveItem} />
      <UserAvatar email={ profile.email } fullname={ profile.fullName } handleLogout={ handleLogout }/>
    </Navbar>
  )
}

export default UserNavbar
