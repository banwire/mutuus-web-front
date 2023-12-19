import * as yup from 'yup';

export const creditValidationSchema = yup.object().shape({
    number: yup
        .string()
        .required('El número requerido'),
    name: yup
        .string()
        .required('Nombre requerido'),
    month: yup
        .string()
        .required('Mes requerido'),
    year: yup
        .string()
        .required('Año requerido'),
    cvv: yup
        .string()
        .required('CVV requerido')
})