import { Grid,Link } from '@mui/material';
import { Link as RouLink, useNavigate  } from "react-router-dom"
import { Form, Formik } from 'formik';
import Radio from '@mui/material/Radio';

import { MenuLayout } from "../../layout/MenuLayout"
import {LoginButton, LoginButtonGoogle} from "../../components/ButtonContent"
import { useAuthStore } from '../../hooks';
import { MyTextInput } from '../../components';
import { loginValidationSchema } from '../../validations/registerValidations';


export const LoginPage = () => {
  const history = useNavigate();
  const {startLogin} = useAuthStore();

  return (
    <MenuLayout title="Iniciar Sesión" >
      <br />
      <Formik
          initialValues={{email: '',password: '',}}
          onSubmit={ (values) => {
        
            let loginInfo = {
              username: values.email,
              password: values.password
            }
        
            startLogin(loginInfo).then(succ =>{
           
              if(succ.ok === 'exito'){
                history('information');
              }
            })
          }}
          validationSchema={loginValidationSchema}
        >
      { ({ handleReset }) => (
      <Form className='login-acceso'>
        <Grid container spacing={ 0 } sx={{  mt: 0 }}>
          <Grid item xs={ 12 } md={10} lg={8}>
            <LoginButtonGoogle type='submit' variant='contained' fullWidth >
              Iniciar sesión con google
            </LoginButtonGoogle>
              <br />
              <br />
          </Grid> 
          <br />
          <Grid container>
            <Grid item xs={ 5 } md={5} lg={5}>
              <hr className='line'/>
            </Grid>
            <Grid item xs={ 2 } md={0} lg={2} textAlign='center'>
              <p style={{color:'#E1E1E1'}}>O</p>
            </Grid>
            <Grid item xs={ 5 } md={5} lg={5}>
              <hr className='line'/>
            </Grid>
          </Grid>
          <Grid container className='form-login'>
            <Grid item xs={ 10 } md={10} lg={12} sx={{ mt: 2 }} > 
              <MyTextInput 
                label="Email"
                name="email"
                type="email"
                placeholder="Ingresa tu correo electrónico aquí"
              />
            </Grid>
            <Grid item xs={ 10 } md={10} lg={12} sx={{ mt: 2 }}> 
              <MyTextInput 
                label="Password"
                name="password"
                type="password"
                placeholder="Ingresa tu contraseña aquí"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container  sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={ 12 } sm={ 6 } lg={6} >
            <Radio
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
              sx={{
                color: '#9CD41C' ,
                '&.Mui-checked': {
                  color: '#183B91' ,
                },
              }}
            />
            <label style={{  fontSize:12, color:'#9A9AB0' }}>Recordarme</label> 
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } lg={6} textAlign='end'>
            <Link sx={{ fontSize:12, color:'#9A9AB0' }} component={RouLink} to='/password'>Olvide mi contraseña.</Link>
          </Grid>
        </Grid>
        <Grid container  sx={{ mb: 2, mt: 3 }} alignItems='center'>
          <Grid item xs={ 12 } sm={ 6 } lg={5}>
            <LoginButton type="submit" variant='contained'>
              Ingresar
            </LoginButton>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } lg={7} textAlign='end'>
            <p style={{  fontSize:12, color:'#9A9AB0' }}>No tienes una cuenta? <Link sx={{  fontSize:12, color:'#9CD41C' }} component={RouLink} to='/register'>Crear Cuenta</Link></p>
          </Grid>
        </Grid>
        </Form>
      )}
    </Formik>
  </MenuLayout>
  )
}