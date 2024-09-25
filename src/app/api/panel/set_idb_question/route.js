import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

dotenv.config()

export async function POST (request) {
  const authCookie = cookies().get('Auth-Cookie')

  if (!authCookie) {
    return Response.json('')
  }

  try {
    const secretJwtKey = process.env.AUTH_SECRET

    const { email } = jwt.verify(authCookie.value, String(secretJwtKey))

    if (!email) throw new Error('Usted no esta autenticado.')
    const body = await request.json()
    const { answer } = body

    await connectToDb()

    const user = await UserModel.findOneAndUpdate(
      { email },
      { $push: { idb: answer } },
      { new: true, upsert: true }
    )

    if (!user) {
      return new Response(JSON.stringify({ error: 'Usted no esta autenticado.' }), { status: 404 })
    }

    return new Response(JSON.stringify({ message: 'Respuesta guardada correctamente' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Error actualizando el usuario' }), { status: 500 })
  } finally {
    if (mongoose.connection.readyState === 1) {
      await disconnectFromDb()
    }
  }
}
