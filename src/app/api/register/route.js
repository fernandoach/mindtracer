import { registerSchema } from '@/schemas/registerSchema'

export async function POST (request) {
  try {
    const body = await request.json()
    const { fullName, gender, age, grade, email, password, repassword, code } = body
    await registerSchema.validateAsync({ fullName, gender, age, grade, email, password, repassword, code })
    return Response.json({ data: { fullName, gender, age, grade, email, password, repassword, code } })
  } catch (error) {
    return Response.json({ error: error.details[0].message }, { status: 400 })
  }
}
