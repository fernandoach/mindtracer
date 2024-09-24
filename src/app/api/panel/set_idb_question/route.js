import { connectToDb, disconnectFromDb } from '@/db/connectToDb'
import { UserModel } from '@/db/userModel'
import mongoose from 'mongoose'

export async function POST (request) {
  try {
    const body = await request.json()
    const { res, email } = body

    await connectToDb()

    const user = await UserModel.findOneAndUpdate(
      { email },
      { $push: { idb: res } },
      { new: true, upsert: true }
    )

    if (!user) {
      return new Response(JSON.stringify({ error: 'No se encontró el usuario' }), { status: 404 })
    }

    return new Response(JSON.stringify(user), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Error actualizando el usuario' }), { status: 500 })
  } finally {
    if (mongoose.connection.readyState === 1) {
      await disconnectFromDb()
    }
  }
}
