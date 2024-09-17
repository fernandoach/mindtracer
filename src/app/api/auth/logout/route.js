import dotenv from 'dotenv'
import { cookies } from 'next/headers'

dotenv.config()

export function POST (request) {
  const authCookie = cookies().get('Auth-Cookie')

  if (!authCookie) {
    return Response.json(
      { statusCode: 401, message: 'Usted no está autenticado.' },
      { status: 401 }
    )
  }

  try {
    cookies().delete('Auth-Cookie')

    return Response.json({ message: 'Éxito al cerrar sesión.' })
  } catch (error) {
    return Response.json(
      {
        statusCode: 401,
        message: error.message
      },
      { status: 401 }
    )
  }
}
