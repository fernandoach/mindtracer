import joi from 'joi'

const loginSchema = joi.object({
  email: joi.string()
    .min(5)
    .max(100)
    .pattern(/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|outlook\.es)$/)
    .required()
    .messages({
      'string.empty': 'El correo electrónico es obligatorio.',
      'string.pattern.base': 'Ingrese un correo electrónico válido.',
      'string.min': 'El correo electrónico debe tener al menos 5 caracteres.',
      'string.max': 'El correo electrónico no puede tener más de 100 caracteres.',
      'any.required': 'El correo electrónico es obligatorio.'
    }),
  password: joi.string()
    .min(6)
    .max(50)
    .required()
    .pattern(/^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@_!]+$/)
    .messages({
      'string.empty': 'La contraseña es obligatoria.',
      'string.pattern.base': 'La contraseña debe contener una letra mayúscula, al menos dos números y opcionalmente caracteres especiales.',
      'string.min': 'La contraseña debe tener al menos 6 caracteres.',
      'string.max': 'La contraseña no puede tener más de 50 caracteres.',
      'any.required': 'La contraseña es obligatoria.'
    })
})

export { loginSchema }
