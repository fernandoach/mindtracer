'use client'
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { useState } from 'react'
import NavbarBrandLogo from './navbarBrandLogo'
import GuestNavbarContent from './guestNavbarContent'
import GuestNavbarMenu from './guestNavbarMenu'

function GuestNavbar () {
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
      <GuestNavbarContent activeItem={activeItem} setActiveItem={setActiveItem} />
      <GuestNavbarMenu activeItem={activeItem} setActiveItem={setActiveItem} />
    </Navbar>
  )
}

export default GuestNavbar
