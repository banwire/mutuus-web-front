import * as yup from 'yup';

const rfcRegex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
export const informationValidationSchema = yup.object().shape({
    day: yup
    .string()
    .required('Día requerido'),
month: yup
    .string()
    .required('Mes requerido'),
year: yup
    .string()
    .required('Año requerido'),
    rfc: yup
        .string()
        .min(12, ({ min }) => `El RFC debe contener ${min} characteres minimo`)
        .matches(rfcRegex, 'Por favor ingresa un RFC valido')
        .required('RFC es requerido'),
        wigth_id: yup
        .string()
        .required('Peso requerido'),    
        height_id: yup
        .string()
        .required('Estatura requerida'),
    gender: yup
        .string()
        .required('Genero requerido'),
})