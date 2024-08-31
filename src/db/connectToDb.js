import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { userModel } from './userSchema'

dotenv.config()

const MONGO_URI = `${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}`

let connection = false

const initializeDb = async () => {
  try {
    if (!mongoose.modelNames().includes('User')) {
      await userModel.init()
    }
  } catch (error) {
    console.log(error)
  }
}

const connectToDb = async () => {
  if (connection) {
    console.log('Already connected to MongoDB')
    return
  }

  try {
    await initializeDb()
    await mongoose.connect(MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: false
    })
    connection = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

const disconnectFromDb = async () => {
  if (!connection) {
    console.log('Not connected to MongoDB')
    return
  }

  try {
    await mongoose.connection.close()
    console.log('Disconnected from MongoDB')
    connection = false
  } catch (error) {
    console.log(error)
  }
}

export { connectToDb, disconnectFromDb }
