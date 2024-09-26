import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'
import { loginSchema } from '@/schemas/loginSchema'
import mongoose from 'mongoose'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export async function POST (request) {
  try {
    const body = await request.json()
    const { email, password } = body
    await loginSchema.validateAsync({ email, password })
    await connectToDb()
    const user = await UserModel.findOne({ email }).exec()
    const isPasswordCorrect = await compare(password, user.password)
    if (!isPasswordCorrect) {
      throw new Error('Usuario y/o contraseña incorrectos.')
    }
    const secretJwtKey = process.env.AUTH_SECRET
    const token = jwt.sign(
      {
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        fullName: user.fullName,
        email: user.email,
        age: user.age,
        gender: user.gender
      },
      String(secretJwtKey)
    )

    const serializedToken = serialize('Auth-Cookie', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 30
    })
    const response = Response.json({ email: user.email, role: user.role, fullName: user.fullName })
    response.headers.append('Set-Cookie', serializedToken)
    return response
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
