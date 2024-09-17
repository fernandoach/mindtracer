import { Roboto } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from '@/components/auth/authContext'

const roboto = Roboto({ subsets: ['latin'], weight: '400', display: 'swap' })

export const metadata = {
  title: 'Mind Tracer',
  description: ''
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <NextUIProvider>
          <AuthProvider>{children}</AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
