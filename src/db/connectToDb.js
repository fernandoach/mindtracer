import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { UserModel } from './userModel'

dotenv.config()

const MONGO_URI = `${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}`

let connection = false

const initializeDb = async () => {
  try {
    if (!mongoose.modelNames().includes('User')) {
      await UserModel.init()
      await UserModel.createIndexes()
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

const connectToDb = async () => {
  if (connection) {
    throw new Error('Ya esta conectado a MongoDB.')
  }
  try {
    await initializeDb()
    await mongoose.connect(MONGO_URI)
    connection = true
  } catch (error) {
    throw new Error(error.message)
  }
}

const disconnectFromDb = async () => {
  if (!connection) {
    throw new Error('No esta conectado a MongoDB.')
  }
  try {
    await mongoose.connection.close()
    connection = false
  } catch (error) {
    throw new Error(error.message)
  }
}

export { connectToDb, disconnectFromDb }
