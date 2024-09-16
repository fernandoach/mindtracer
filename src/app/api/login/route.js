import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'
import { loginSchema } from '@/schemas/loginSchema'
import mongoose from 'mongoose'
import { compare } from 'bcrypt'

export async function POST (request) {
  try {
    const body = await request.json()
    const { email, password } = body
    await loginSchema.validateAsync({ email, password })
    await connectToDb()
    const truPassword = await UserModel.findOne({ email }).select('password').exec()
    const isPasswordCorrect = await compare(password, truPassword.password)
    if (isPasswordCorrect) {
      return Response.json({ data: 'ok' })
    }
    throw new Error('Usuario y/o contraseña incorrectos.')
  } catch (error) {
    if (error.message.includes('ECONNREFUSED')) {
      return Response.json({ error: 'No se pudo conectar con la base de datos.' }, { status: 500 })
    } else {
      return Response.json({ error: 'Usuario y/o contraseña incorrectos.' }, { status: 400 })
    }
  } finally {
    if (mongoose.connection.readyState === 1) {
      await disconnectFromDb()
    }
  }
}
