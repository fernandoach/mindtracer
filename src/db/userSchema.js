import mongoose, { model, Schema } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const userSchema = new Schema({
  userId: { type: String, default: uuidv4, unique: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: Number, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  idb: [{ type: Number, default: [] }],
  tat: [{ type: String, default: [] }]
}, {
  timestamps: true
})

userSchema.index({ email: 1 }, { unique: true })

const userModel = mongoose.models.User || model('User', userSchema)

export { userModel }
