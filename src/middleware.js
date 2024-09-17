import { NextResponse } from 'next/server'

export async function middleware (request) {
  const token = request.cookies.get('Auth-Cookie')

  if (token) {
    try {
      await fetch(`${request.nextUrl.origin}/api/auth/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
    } catch (error) {
      console.log(error)
      if (request.nextUrl.pathname.startsWith('/panel') ||
      request.nextUrl.pathname.startsWith('/admin') || request.nextUrl.pathname.startsWith('/api/panel') || request.nextUrl.pathname.startsWith('/api/admin')) {
        return NextResponse.redirect(new URL('/login', request.url))
      }
      return NextResponse.next()
    }
  }

  if (
    !token?.value &&
    (request.nextUrl.pathname.startsWith('/panel') ||
      request.nextUrl.pathname.startsWith('/admin') || request.nextUrl.pathname.startsWith('/api/panel') || request.nextUrl.pathname.startsWith('/api/admin'))
  ) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (!token?.value && request.nextUrl.pathname === '/login') {
    return NextResponse.next()
  }

  if (token?.value && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/panel', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)']
}
