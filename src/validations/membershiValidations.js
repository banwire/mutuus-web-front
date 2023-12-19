import * as yup from 'yup';

export const membershiValidationSchema = yup.object().shape({
    claveAgent: yup
    .string()
    .required('Clave requerido'),
    agente: yup
    .string()
    .required('Agente requerido'),
    membershi: yup
    .string()
    .required('Membresía requerido'),
    type_pay: yup
    .string()
    .required('Tipo de pago es requerido'),
       
})