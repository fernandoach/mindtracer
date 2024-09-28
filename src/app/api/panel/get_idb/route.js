import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'

export async function GET (request) {
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
    const idb = await UserModel.findOne({ email }).select('idb')
    await disconnectFromDb()
    if (!idb) throw new Error('Usted no esta autenticado.')

    return Response.json(idb.idb)
  } catch (error) { }
}
