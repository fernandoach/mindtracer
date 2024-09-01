import { Roboto } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'

const roboto = Roboto({ subsets: ['latin'], weight: '400', display: 'swap' })

export const metadata = {
  title: 'Mind Tracer',
  description: ''
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
