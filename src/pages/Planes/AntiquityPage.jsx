import { useState, useEffect  } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import { useSelector } from "react-redux"
import { Grid } from "@mui/material"
import { PlanesLayout } from "../../layout/PlanesLayout"
import { Link as RouLink, useNavigate} from "react-router-dom"
import { SecundaryButton} from "../../components/ButtonContent"
import { useAuthStore } from '../../hooks';
import Swal from 'sweetalert2';
import {ProgressCircular} from "../../components/ProgressCircular"
import {ToastComponent} from "../../components/ToastComponent"
import { CustomTextField, SelectField } from '../../components';
import {  personValidationSchema} from '../../validations/personValidations';
import Filters from '../../helpers/filter'

const InformationsForm = {
    first_name:'',
    last_name:'',
    middle_name: '',
    day:'',
    rfc:'',
    phone_number:'',
    email:'',
    gender:'',
    ocupacion:'',
    estadoc:'',
    nacionalidad:'',
    cp:'',
    estado:'',
    muni:'',
    colonia:'',
    calle:''
  }
 
export const AntiquityPage = () => {
  const history = useNavigate();
  const {registrationInfo} = useAuthStore();
  const { altura, peso, information} = useSelector((state) => state.counter);

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Permite solo caracteres numéricos
  };
  const handleInputChange  = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, ''); // Permite solo letras
  };
  let orderby = [];
  let orderbyPeso = [];
  useEffect(() => {
    altura.altura.forEach(item =>{
      orderby.push(item.value.toString())
    })
    peso.pesos.forEach(item =>{
      orderbyPeso.push(item.value.toString())
    })
    console.log(information);
  }, []);

  const defaultProps = {
    options: orderby,
    getOptionLabel: (option) => option,
  };

  const defaultPropsPeso = {
    options: orderbyPeso,
    getOptionLabel: (option) => option,
  };
  const [loading, setLoading] = useState(false);
  const [toastInfo, setToastInfo] = useState({
    open: false,
    message: '',
    severity: '',
    duration: 3000,
  });
  const handleCloseToast = () => {
    setToastInfo({
      ...toastInfo,
      open: false,
    });
  };
  const handleSubmit = (values) => {
    console.log(values);
    const durations = 4000;
    
    let consulPeso = peso.pesos.find(item => item.value === Number(values.wigth_id) )
    let consulAltura = altura.altura.find(item => item.value === Number(values.height_id) )
    let dataResult = {
      height_id:consulAltura.id,
      wigth_id:consulPeso.id,
      birth_date: `${values.year}/${values.month}/${values.day}`,
      rfc:values.rfc,
    }
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El peso no es modificable pasando el registro.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        registrationInfo(dataResult, information.information.id).then(succ=>{
          setTimeout(() => {
            setLoading(false);
            if(succ.ok === 'exito'){
              history('/membershi');
            } else {
              setToastInfo({
                open: true,
                message: succ.respuesta,
                severity: 'error',
                duration: durations,
              });
          
              setTimeout(() => {
                setToastInfo({
                  ...toastInfo,
                  open: false,
                });
              }, durations);
            }
          }, durations);
   
  })
      }
    })
 
}
  return (
    <PlanesLayout title="Por favor ingresa la siguiente información">
      <ProgressCircular open={loading} />
      <ToastComponent {...toastInfo} handleClose={handleCloseToast} />
        <Formik
          initialValues={InformationsForm}
          onSubmit={handleSubmit}
          validationSchema={personValidationSchema}
        >
        { ({ values,handleSubmit, handleChange, handleBlur, errors, touched }) => (
            <Form onSubmit={handleSubmit} autocomplete="off">
                <Grid container justifyContent='center' textAlign='center'>
                    <p>RECONOCIMIENTO DE ANTIGÜEDAD</p>
                </Grid>
                <Grid container spacing={1} className='information-user' sx={{padding:5}}>
                    <Grid item xs={ 10 } md={10} lg={8}>
                        <label>Ha tenido cobertura medica durante los últimos 30 dias</label>
                        <FormControl>
                        <Radio
                     
                   
                       sx={{
                      color: '#4F4F4F1A',
                      '&.Mui-checked': {
                        color: '#999999',
                      },
                    }}/>
                        <CustomTextField 
                            name="first_name"
                            value={values.first_name}
                            type="text"
                            onInput={Filters.handleInputLetra}
                            />
                        </FormControl>
                      
                             <CustomTextField 
                            name="first_name"
                            value={values.first_name}
                            type="text"
                            onInput={Filters.handleInputLetra}
                            />
                    </Grid> 

                    <Grid container spacing={1} direction='row' justifyContent='space-evenly'>
                    <CustomTextField 
                            name="first_name"
                            value={values.first_name}
                            type="text"
                            onInput={Filters.handleInputLetra}
                            />
                             <CustomTextField 
                            name="first_name"
                            value={values.first_name}
                            type="text"
                            onInput={Filters.handleInputLetra}
                            />
                             <CustomTextField 
                            name="first_name"
                            value={values.first_name}
                            type="text"
                            onInput={Filters.handleInputLetra}
                            />
                    </Grid>

                    <Grid item xs={ 10 } md={10} lg={8}>
                        <label>¿Desde cuándo ha tenido la cobertura en forma ininterrumpida? (DD/MM/AAAA)</label>
                        <CustomTextField 
                            name="first_name"
                            value={values.first_name}
                            type="text"
                            onInput={Filters.handleInputLetra}
                            />
                             <CustomTextField 
                            name="first_name"
                            value={values.first_name}
                            type="text"
                            onInput={Filters.handleInputLetra}
                            />
                    </Grid> 
                    <Grid container textAlign='center' sx={{mb: 1, padding:5}}  >
                        <Grid item xs={12} sm={ 12 } md={12} lg={12}  >
                            <SecundaryButton  type='submit' variant='contained' >
                                Continuar
                            </SecundaryButton>
                        </Grid>
                    </Grid>
            </Grid>
        </Form>
      )}
    </Formik>
   
 
    </PlanesLayout>
  )
  
}
const top100Films = [
  { label: 'Masculino' },
  { label: 'Femenino' }
];

const alturas = [ '14.25','15.36'
];

const pesos = [ '14.25','15.36'
];
