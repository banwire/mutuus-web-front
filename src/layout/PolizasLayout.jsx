import {  Grid } from '@mui/material';
import Logo1 from '../assets/img/mutuus-1/logo-mu.png';
import logoCruz from '../assets/img/mutuus-1/cruz-logo.png'
import { Footer } from '../components';

export const PolizasLayout = ({ children, title   }) => {
  return (
    <Grid
      container
      className='general-informations fondoInformation'
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={ 12 } sm={6} md={6} lg={4} className='contenedor-login'>
        <img src={Logo1} alt="Mutuus"/>
        <br /><br />
        <p> { title }</p>
        <br />
        <img src={logoCruz} alt="MutuusCruz" className='image-cruz'/>
      </Grid>
      <Grid item xs={ 12 }sm={6}  md={6} lg={8} sx={{paddingTop:20}}>
        <br /><br />
        { children }
      </Grid>
    </Grid>
  )
}