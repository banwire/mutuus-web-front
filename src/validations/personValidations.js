import * as yup from 'yup';
const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const rfcRegex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
export const personValidationSchema = yup.object().shape({
    first_name: yup
            .string()
            .required('El nombre es obligatorio.'),
    last_name: yup
            .string()
            .required('El apellido es obligatorio.'),
    middle_name:  yup
            .string()
            .required('El apellido es obligatorio.'),
    day: yup
            .string()
            .required('La fecha es obligatoria.'),
    rfc: yup
            .string()
            .min(12, ({ min }) => `El RFC debe contener ${min} characteres minimo`)
            .matches(rfcRegex, 'Por favor ingresa un RFC valido')
            .required('RFC es requerido'),
    phone_number: yup
            .string()
            .matches(/^[0-9]+$/, 'Solo se permiten números.')
            .required('El teléfono es requerido.'),
    email: yup
            .string()
            .trim()
            .required('El correo es requerido.')
            .email('Por favor ingresa un correo valido.')
            .matches(emailRegex, 'Por favor ingresa un correo valido.'),
    gender: yup
            .string()
            .required('El genéro es obligatorio.'),
    ocupacion: yup
            .string()
            .required('La ocupación es obligatorio.'),
    estadoc: yup
            .string()
            .required('El estado civíl es obligatorio.'),
    nacionalidad: yup
            .string()
            .required('La nacionalidad es obligatorio.'),
    cp: yup
            .string()
            .required('El CP es obligatorio.'),
    estado: yup
            .string()
            .required('El estado es obligatorio.'),
    muni: yup
            .string()
            .required('El municipio es obligatorio.'),
    colonia: yup
            .string()
            .required('La colonia es obligatorio.'),
    calle: yup
            .string()
            .required('La calle es obligatorio.'),
})