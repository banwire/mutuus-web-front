import {  Grid } from '@mui/material';
import Logo1 from '../assets/img/mutuus-1/logo-mu.png';
import logoCruz from '../assets/img/mutuus-1/cruz-logo.png'

export const PlanesLayout = ({ children, title   }) => {
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
      <Grid item xs={ 12 }sm={6}  md={6} lg={8}>
    
        <Grid container justifyContent='center' sx={{marginTop:4}}>
        <Grid item sx={{ width: { xs:360, sm: 380, md:500, lg:760}}}>
          { children }
        </Grid>
        </Grid>
       
      </Grid>
    </Grid>
  )
}