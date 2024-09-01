'use client'
import { Button, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'

function GuestNavbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')
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
    <Navbar onMenuOpenChange={setIsMenuOpen} className='w-screen fixed'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label= { isMenuOpen ? 'Cerrar menu' : 'Abrir menu' }
          className='sm:hidden'
        />
        <NavbarBrand className='flex items-center justify-center sm:justify-start  '>
          <Link href='/' className='gap-4 text-foreground'>
            <Image src='logo.svg' alt='Logo' width={25} height={25}/>
            <p className='font-bold text-inherit'>MIND TRACER</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {
          guestMenuItems.map(
            (item, index) => {
              return (
                <NavbarItem key={index} isActive={activeItem === item.id}>
                  <Link color='foreground' onClick={() => setActiveItem(item.id)} href={`#${item.id}`}>
                    {item.title}
                  </Link>
                </NavbarItem>
              )
            }
          )
        }
        <NavbarItem>
          <Link as={Button} className='text-success border-success' variant='ghost' href='/login'>
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>
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
      </NavbarMenu>
    </Navbar>
  )
}

export default GuestNavbar
