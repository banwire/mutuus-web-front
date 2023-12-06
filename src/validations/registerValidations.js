import * as yup from 'yup';
const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required('El correo es requerido.')
        .email('Por favor ingresa un correo valido.')
        .matches(emailRegex, 'Por favor ingresa un correo valido.'),
    password: yup
        .string()
        .required("La contraseña es requerida.")
        .min(8, ({ min }) => `La contraseña debe contener ${min} characteres.`)
        .matches(/[0-9]/, 'Tu contraseña debe tener al menos 1 carácter numerico.')
        .matches(/[a-z]/, 'Tu contraseña debe tener al menos 1 carácter minúscula.')
        .matches(/[A-Z]/, 'Tu contraseña debe tener al menos 1 carácter mayúscula.'),
})

export const codeValidationSchema = yup.object().shape({
    code1: yup
        .string()
        .trim()
        .required('El código es requerido.'),
    code2: yup
        .string()
        .trim()
        .required('El código es requerido.'),
       
})

export const registerValidationSchema = yup.object().shape({
    first_name: yup
        .string()
        .required('El nombre es requerido.'),
    last_name: yup
        .string()
        .required('El apellido es requerido.'),
    middle_name: yup
        .string()
        .required('El apellido es requerido.'),
    email: yup
        .string()
        .trim()
        .required('El correo es requerido.')
        .email('Por favor ingresa un correo valido.')
        .matches(emailRegex, 'Por favor ingresa un correo valido.'),
    phone_number: yup
        .string()
        .matches(/^[0-9]+$/, 'Solo se permiten números.')
        .required('El teléfono es requerido.'),
    password: yup
        .string()
        .required("La contraseña es requerida.")
        .min(8, ({ min }) => `La contraseña debe contener ${min} characteres.`)
        .matches(/[0-9]/, 'Tu contraseña debe tener al menos 1 carácter numerico.')
        .matches(/[a-z]/, 'Tu contraseña debe tener al menos 1 carácter minúscula.')
        .matches(/[A-Z]/, 'Tu contraseña debe tener al menos 1 carácter mayúscula.'),
})