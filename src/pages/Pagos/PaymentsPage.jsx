import { useState, useEffect  } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Grid } from "@mui/material"
import * as React from 'react';
import { useSelector, useDispatch } from "react-redux"
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { PolizasLayout } from "../../layout/PolizasLayout"
import { Link as RouLink, useNavigate} from "react-router-dom"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import { usePaymentStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import {ProgressCircular} from "../../components/ProgressCircular"
import {ToastComponent} from "../../components/ToastComponent"
import { MyTextInput, TextFieldDate,MyTextInputInfo, PaymentSteps } from '../../components';
import {  creditValidationSchema} from '../../validations/creditValidations';
import { infoPay } from "../../store/auth/payments";
import Filters from '../../helpers/filter'


import imgCard from '../../assets/img/mutuus-1/card.png';
import imgMaster from '../../assets/img/mutuus-1/master.png';

const membershiForm = {
  number:'',
  cvv:'',
  name: '',
  month:'',
  year:'',
}

let result = ''
export const PaymentsPage = () => {
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Permite solo caracteres numéricos
  };
  const handleInputChange  = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ''); // Permite solo letras
  };
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.police);
  const {information} = useSelector(state => state.counter);
  const history = useNavigate();
  
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
    setLoading(true);
    console.log(values);
    // dispatch(infoPay(values))
    setTimeout(() => {
      setLoading(false);
      history('/payments-oxxo');
    }, 4000);
 
}
  return (
    <PolizasLayout title="Ingresa los datos de tu tarjeta de crédito o débito"  stepv={3}>
       <ProgressCircular open={loading} />
        <Formik
          initialValues={membershiForm}
          onSubmit={handleSubmit}
          validationSchema={creditValidationSchema}
        >
        { ({ values,handleSubmit, handleChange, handleBlur, errors, touched }) => (
        <Form onSubmit={handleSubmit} autocomplete="off">
          <Grid container className='payments-credit' alignItems="center">
            <Grid container spacing={2} textAlign='center' sx={{padding:6}}>
              <Grid xs={ 12 } md={12} lg={12} className='title-componente'> 
                <p>METODO DE PAGO</p>
              </Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={ 10 } md={10} lg={6} className='img-card'>
              <img src={imgMaster} alt="Credit" className='master-card'/>
              <img src={imgCard} alt="Credit"/>
              <Grid >
                <p>{values.name}</p>
              </Grid>
              <Grid >
                <p>{values.number.match(/.{1,4}/g)?.join(' ')}</p>
              </Grid>
              <Grid >
                <p>{values.year}/{values.month}</p>
              </Grid>
              </Grid> 
              
            </Grid>
           
            <Grid container justifyContent='center' alignItems='center' sx={{paddingTop:5}}>
              <Grid item xs={ 10 } md={10} lg={6}>
                <MyTextInputInfo 
                  placeholder='Número de tarjeta'
                  name="number"
                  type="text"
                  onInput={handleChange('number')}
                  value={values.number}
                 
                inputProps={{ maxLength: 16, inputMode: 'numeric' }}
                />
              </Grid> 
            </Grid>
            <Grid container justifyContent='center' alignItems='center' sx={{paddingTop:2}}>
              <Grid item xs={ 10 } md={10} lg={6}>
                <MyTextInputInfo 
                  placeholder='Nombre de la tarjeta'
                  name="name"
                  type="text"
                  value={values.name}
    
                  onInput={handleInputChange}
                />
             </Grid> 
           </Grid>
           <Grid container justifyContent='center' sx={{paddingTop:2}}>
              <Grid container 
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={ 3 } md={2} lg={2}>
                    <TextFieldDate 
                      placeholder='Mes'
                      name="month"
                      type="text"
                      value={values.month}
                    
                      onInput={handleInput}
                inputProps={{ maxLength: 2, inputMode: 'numeric' }}
                    />
                </Grid>
                <Grid item xs={ 3 } md={2} lg={2}>
                <TextFieldDate 
                  placeholder='Año'
                  name="year"
                  type="text"
                  value={values.year}
             
                  onInput={handleInput}
                inputProps={{ maxLength: 2, inputMode: 'numeric' }}
                /> 
                </Grid>
                <Grid item xs={ 3 } md={2} lg={2}>
                  <TextFieldDate 
                      placeholder='CVV'
                      name="cvv"
                      type="text"
                      value={values.cvv}
                      onInput={handleInput}
                inputProps={{ maxLength: 3, inputMode: 'numeric' }}
                    />
                </Grid>
              </Grid>
            </Grid>
           
            <Grid container textAlign='center' sx={{mb: 1, padding:5}}  >
              <Grid item xs={12} sm={ 12 } md={12} lg={12}>
                <SecundaryButton  type='submit' variant='contained' >
                 Continuar
                </SecundaryButton>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>          
    </PolizasLayout>
  )
}