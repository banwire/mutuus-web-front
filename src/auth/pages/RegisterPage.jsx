import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    <AuthLayout title="Contratación en línea">
      <form>
          <Grid container>
            <Grid  item xs={ 6 } md={6}>
            <label htmlFor="Nombre">Nombre completo *</label>
            </Grid>
           
            <Grid item xs={ 12 } md={6} lg={12} sx={{ mt: 2 }}>
              <TextField 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button variant='contained' fullWidth>
                  Continuar
                </Button>
              </Grid>
            </Grid>
          </Grid>


        </form>

    </AuthLayout>
  )
}