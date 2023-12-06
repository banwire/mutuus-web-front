import { Grid } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"
import { Link as RouLink} from "react-router-dom"

export const PasswordPage = () => {
  return (
    <MenuLayout title="Cambio de contraseña">
        <form>
          <Grid container > 
            <Grid container spacing={ 2 } justifyContent='center' alignItems='center'>
            <Grid item xs={ 12 } md={7} lg={10} > 
            <label htmlFor="">Password</label>
            <CssTextField 
              type="email" 
              placeholder='Ingresa tu contraseña aquí'
              name='email'
              sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
            </Grid>
            
            <Grid container spacing={ 2 } justifyContent='center' alignItems='center'>
            <Grid item xs={ 12 } md={7} lg={10} sx={{ mt: 2 }}>
          <label htmlFor="">Confirmar Password</label>
          <CssTextField 
              type="password" 
              placeholder='Ingresa tu contraseña aquí' 
              name='password'
              sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 2, mt: 3}} justifyContent='center'>
            <Grid  item xs={ 12 } sm={ 5 } textAlign='center'>
            <SecundaryButton variant='contained' component={RouLink} to='/login'>
                 Cancelar
                </SecundaryButton>
            </Grid>
              <Grid item xs={ 12 } sm={ 5 } textAlign='center'>
                <PrimaryButton variant='contained' component={RouLink} to='/register'>
                 Continuar
                </PrimaryButton>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}