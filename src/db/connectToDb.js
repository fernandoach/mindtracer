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
  } catch (error) { }
}

const connectToDb = async () => {
  if (connection) {
    return
  }
  try {
    await initializeDb()
    await mongoose.connect(MONGO_URI)
    connection = true
  } catch (error) { }
}

const disconnectFromDb = async () => {
  if (!connection) {
    return
  }
  try {
    await mongoose.connection.close()
    connection = false
  } catch (error) { }
}

export { connectToDb, disconnectFromDb }
