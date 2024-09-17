import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { cookies } from 'next/headers'
import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'

dotenv.config()

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
    const user = await UserModel.findOne({ email })
    await disconnectFromDb()
    if (!user) throw new Error('Usted no esta autenticado.')

    return Response.json({ email, role, fullName })
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
