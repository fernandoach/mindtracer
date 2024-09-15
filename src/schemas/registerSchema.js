import joi from 'joi'

const registerSchema = joi.object({
  fullName: joi.string()
    .min(3)
    .max(100)
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      'string.empty': 'El nombre completo es obligatorio.',
      'string.pattern.base': 'El nombre completo solo puede contener letras y espacios.',
      'string.min': 'El nombre completo debe tener al menos 3 caracteres.',
      'string.max': 'El nombre completo no puede tener más de 100 caracteres.',
      'any.required': 'El nombre completo es obligatorio.'
    }),
  gender: joi.string()
    .valid('M', 'F')
    .required()
    .messages({
      'any.only': 'El género debe ser M o F.',
      'any.empty': 'El género es obligatorio.',
      'any.required': 'El género es obligatorio.'
    }),
  age: joi.number()
    .min(10)
    .max(30)
    .integer()
    .strict()
    .required()
    .messages({
      'number.min': 'La edad debe ser mayor o igual a 10.',
      'number.max': 'La edad debe ser menor o igual a 30.',
      'number.base': 'La edad debe ser un número.',
      'number.integer': 'La edad debe ser un número entero.',
      'number.empty': 'La edad es obligatoria.',
      'any.required': 'La edad es obligatoria.'
    }),
  grade: joi.number()
    .min(1)
    .max(5)
    .required()
    .integer()
    .strict()
    .messages({
      'number.min': 'El grado debe ser mayor o igual a 1.',
      'number.max': 'El grado debe ser menor o igual a 5.',
      'number.base': 'El grado debe ser un número.',
      'number.integer': 'El grado debe ser un número entero.',
      'number.empty': 'El grado es obligatorio.',
      'any.required': 'El grado es obligatorio.'
    }),
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
    }),
  repassword: joi.string()
    .required()
    .valid(joi.ref('password'))
    .messages({
      'string.empty': 'La confirmación de contraseña es obligatoria.',
      'any.required': 'La confirmación de contraseña es obligatoria.',
      'any.only': 'La contraseñas no coinciden.'
    }),
  code: joi.string()
    .min(6)
    .max(50)
    .pattern(/^[a-zA-Z0-9]+$/)
    .required()
    .messages({
      'string.empty': 'El código de invitación es obligatorio.',
      'string.min': 'El código de invitación debe tener al menos 6 caracteres.',
      'string.max': 'El código de invitación no puede tener más de 50 caracteres.',
      'any.required': 'El código de invitación es obligatorio.',
      'string.pattern.base': 'El código de invitación debe contener sólo caracteres alfanuméricos.'
    })
})

export { registerSchema }
