import { useState, useEffect  } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Grid } from "@mui/material"
import Autocomplete from '@mui/material/Autocomplete';
import { PolizasLayout } from "../../layout/PolizasLayout"
import { Link as RouLink, useNavigate} from "react-router-dom"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import {ProgressCircular} from "../../components/ProgressCircular"
import {ToastComponent} from "../../components/ToastComponent"
import { MyTextInput, TextFieldDate,MyTextInputInfo } from '../../components';
import {  informationValidationSchema} from '../../validations/informationsValidations';

const InformationsForm = {
    height_id:'',
    wigth_id:'',
    day: '',
    month:'',
    year:'',
    rfc:'',
    gender:''
  }
 
export const InformationPage = () => {
  const history = useNavigate();
  const {registrationInfo, information, altura, peso} = useAuthStore();
  let orderby = [];
  let orderbyPeso = [];
  // useEffect(() => {
  //   altura.altura.forEach(item =>{
  //     orderby.push(item.value.toString())
  //   })
  //   peso.pesos.forEach(item =>{
  //     orderbyPeso.push(item.value.toString())
  //   })
  // }, []);

  const defaultProps = {
    options: alturas,
    getOptionLabel: (option) => option,
  };

  const defaultPropsPeso = {
    options: pesos,
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
        registrationInfo(dataResult).then(succ=>{
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
    <PolizasLayout title="Por favor ingresa la siguiente información">
         <ProgressCircular open={loading} />
      <ToastComponent {...toastInfo} handleClose={handleCloseToast} />
      <Grid container className='information-user' justifyContent='center'>
        <Formik
          initialValues={InformationsForm}
          onSubmit={handleSubmit}
          validationSchema={informationValidationSchema}
        >
        { ({ values,handleSubmit, handleChange, handleBlur, errors, touched }) => (
        <Form onSubmit={handleSubmit} autocomplete="off">
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={ 10 } md={10} lg={6}>
              
        <label htmlFor="peso" >Peso Kg</label>
          
          <Autocomplete
           {...defaultPropsPeso}
           size="small"
            value={values.wigth_id}
            sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
            onChange={(e, value) => handleChange('wigth_id')(value)}
            onBlur={handleBlur('wigth_id')}
            renderInput={(params) => (
              <MyTextInputInfo
                {...params}
                placeholder="Ingresa tu peso"
                sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
                name="wigth_id"
                error={Boolean(errors.wigth_id && touched.wigth_id)}
               
              />
            )}
          />
           
          </Grid> 
          <Grid item xs={ 10 } md={10} lg={6}>
          <label htmlFor="Altura" >Estatura Cm</label>
          <Autocomplete
              {...defaultProps}
              size="small"
            value={values.height_id}
            sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10}, alignItems: 'center'}}
            onChange={(e, value) => handleChange('height_id')(value)}
            onBlur={handleBlur('height_id')}
            renderInput={(params) => (
              <MyTextInputInfo
                {...params}
                placeholder="Ingresa tu estatura"
                sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10}}}
                name="height_id"
                error={Boolean(errors.height_id && touched.height_id)}
                
              />
            )}
          />
      
       
          </Grid> 
        </Grid>
        <Grid container spacing={2} justifyContent='center' sx={{paddingTop:2}}>
        <Grid item xs={ 10 } md={10} lg={12}>
        <MyTextInputInfo 
        label='RFC'
                name="rfc"
                type="text"
                placeholder="Ingresa tu RFC"
              />
         
          </Grid>
       
        </Grid>
        <Grid container justifyContent='center' spacing={2}  sx={{paddingTop:2}}>
        <Grid item xs={ 10 } md={10} lg={12}>
          <label htmlFor="Genero" >Género</label>
          <Autocomplete
           size="small"
            options={['Hombre', 'Mujer']}
            getOptionLabel={(option) => option}
            value={values.gender}
            sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
            onChange={(e, value) => handleChange('gender')(value)}
            onBlur={handleBlur('gender')}
            renderInput={(params) => (
              <MyTextInputInfo
                {...params}
                placeholder="Ingresa tu género"
                sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
                name="gender"
                error={Boolean(errors.gender && touched.gender)}
               
              />
            )}
          />
          </Grid>
        </Grid>
        <Grid container justifyContent='center' spacing={2} sx={{paddingTop:2}}>
          <Grid item xs={ 10 } md={10} lg={12}>
          <label htmlFor="Fecha" >Fecha de nacimiento</label>
          <Grid className='form-fecha'>
              <TextFieldDate 
                placeholder='Día'
                name="day"
                type="text"
              />
               <TextFieldDate 
                placeholder='Mes'
                name="month"
                type="text"
              /> 
              <TextFieldDate 
                placeholder='Año'
                name="year"
                type="text"
              />
            </Grid>
          </Grid>
        </Grid>
        

        <Grid container textAlign='center' sx={{mb: 1, padding:5}}  >
              <Grid item xs={12} sm={ 12 } md={12} lg={12}  >
                <SecundaryButton  type='submit' variant='contained' >
                  Continuar
                </SecundaryButton>
              </Grid>
            </Grid>
        </Form>
      )}
    </Formik>
   
    </Grid>
    </PolizasLayout>
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
