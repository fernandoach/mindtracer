import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'
import { registerSchema } from '@/schemas/registerSchema'
import mongoose from 'mongoose'
import { hash } from 'bcrypt'

export async function POST (request) {
  try {
    const body = await request.json()
    const { fullName, gender, age, grade, email, password, repassword, code } = body
    await registerSchema.validateAsync({ fullName, gender, age, grade, email, password, repassword, code })
    const hashedPassword = await hash(password, 10)
    await connectToDb()
    const newRegister = new UserModel({ fullName, gender, age, grade, email, password: hashedPassword })
    await newRegister.save()
    return Response.json({ newRegister })
  } catch (error) {
    if (error.message.includes('ECONNREFUSED')) {
      return Response.json({ error: 'No se pudo conectar con la base de datos.' }, { status: 500 })
    }
    if (error.code === 11000) {
      return Response.json({ error: 'Ya existe un usuario con ese correo electrónico.' }, { status: 400 })
    }
    if (error.isJoi) {
      return Response.json({ error: error.details[0].message }, { status: 400 })
    }
    return Response.json({ error: error.message }, { status: 400 })
  } finally {
    if (mongoose.connection.readyState === 1) {
      await disconnectFromDb()
    }
  }
}
