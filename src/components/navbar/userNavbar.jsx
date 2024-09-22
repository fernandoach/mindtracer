'use client'
import { Navbar, NavbarContent, NavbarMenuToggle, Skeleton } from '@nextui-org/react'
import { useState } from 'react'
import NavbarBrandLogo from './navbarBrandLogo'
import UserNavbarMenu from './userNavbarMenu'
import UserNavbarContent from './userNavbarContent'
import UserAvatar from './userAvatar'

function UserNavbar ({ profile, handleLogout, loading }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  if (loading) {
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className='w-screen fixed'>
        <Skeleton className="w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </Navbar>
    )
  }
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
      { profile && <UserAvatar email={ profile.email } fullname={ profile.fullName } handleLogout={ handleLogout }/> }
    </Navbar>
  )
}

export default UserNavbar
