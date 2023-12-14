import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import { Grid } from '@mui/material';

import {ProgressCircular} from "../../components/ProgressCircular"
import {ToastComponent} from "../../components/ToastComponent"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import { MenuLayout } from "../../layout/MenuLayout"
import { useAuthStore } from '../../hooks';
import { registerValidationSchema } from '../../validations/registerValidations';
import { MyTextInput, MyTextInputPassword } from '../../components';


const RegisterForm = {
  first_name:'',
  last_name:'',
  middle_name: '',
  email:'',
  password: '',
  phone_number:''
}

export const RegisterPage = () => {
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Permite solo caracteres numéricos
  };
  const handleInputChange  = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, ''); // Permite solo letras
  };
  const history = useNavigate();
  const {startRegister, status, errorMessage} = useAuthStore();

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


  return (
    <MenuLayout title="Ingresa tus datos">
       <ProgressCircular open={loading} />
      <ToastComponent {...toastInfo} handleClose={handleCloseToast} />
        <Formik
          initialValues={RegisterForm}
          onSubmit={ (values) => {
            const durations = 4000;
            setLoading(true);
            let rasult = {
              'customer':values
            }
            startRegister(rasult).then(succ=>{
              setTimeout(() => {
                setLoading(false);
                if(succ.ok === 'exito'){
                  history('/code');
                } else {
                  setToastInfo({
                    open: true,
                    message: succ.message,
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
          }}
          validationSchema={registerValidationSchema}
        >
      { ({ handleReset }) => (
      <Form className='register-acceso'>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 10 } md={9} lg={4}>
          <MyTextInput 
                label="Nombre"
                name="first_name"
                type="text"
                placeholder="Ingresa tus nombres aquí"
                onInput={handleInputChange}
              />
          </Grid> 
          <Grid item xs={ 10 } md={9} lg={4}>
          <MyTextInput 
                label="Apellido Paterno"
                name="last_name"
                type="text"
                placeholder="Ingresa tus apellidos aquí"
                onInput={handleInputChange}
              />
          </Grid> 
          <Grid item xs={ 10 } md={9} lg={4}>
          <MyTextInput 
                label="Apellido Materno"
                name="middle_name"
                type="text"
                placeholder="Ingresa tus apellidos aquí"
                onInput={handleInputChange}
              />
          </Grid> 
          <Grid item xs={ 10 } md={9} lg={12}>
          <MyTextInput 
                label="Email"
                name="email"
                type="email"
                placeholder="Ingresa tu correo electrónico aquí"
              />
          </Grid>
          <Grid item xs={ 10 } md={9} lg={12}>
          <MyTextInput 
                label="Teléfono o celular"
                name="phone_number"
                type="text"
                placeholder="Ingresa tu número de celular o teléfono"
                onInput={handleInput}
                inputProps={{ maxLength: 10, inputMode: 'numeric' }}
              />
          </Grid>
          <Grid item xs={ 10 } md={9} lg={12}>
          <MyTextInputPassword 
                label="Contraseña"
                name="password"
                placeholder="Ingresa una contraseña aquí"
              />
          </Grid>
          {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
        </Grid>
        <Grid container spacing={1} sx={{mb: 1, mt: 4}}>
              <Grid item xs={12} sm={ 6 } md={6} lg={6}  textAlign='left'>
                <SecundaryButton type='submit' variant='contained'>
                  Crear Cuenta
                </SecundaryButton>
              </Grid>
              <Grid item xs={12} sm={ 6 } md={6} lg={6}  textAlign='end'>
                <PrimaryButton  variant='contained' component={Link} to='/login'>
                Cancelar
                </PrimaryButton>
              </Grid>
            </Grid>
        </Form>
      )}
    </Formik>
    
    </MenuLayout>
  )
}