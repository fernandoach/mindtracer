import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'

export async function POST (request) {
  const authCookie = cookies().get('Auth-Cookie')

  if (!authCookie) {
    return Response.json('')
  }

  const secretJwtKey = process.env.AUTH_SECRET

  try {
    const { email, role, fullName } = jwt.verify(authCookie.value, String(secretJwtKey))

    if (!email || !role || !fullName) throw new Error('Usted no esta autenticado.')

    // validation email exists
    await connectToDb()
    const tat = await UserModel.findOne({ email }).select('tat')
    await disconnectFromDb()
    if (!tat) throw new Error('Usted no esta autenticado.')

    return Response.json(tat.tat.length)
  } catch (error) {
    return Response.json(
      {
        message: error.message
      },
      { status: 401 }
    )
  }
}
