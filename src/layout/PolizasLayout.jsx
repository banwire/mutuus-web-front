import {  Grid } from '@mui/material';
import Logo1 from '../assets/img/mutuus-1/Logo1.png';
import { Footer } from '../components';

export const PolizasLayout = ({ children, title = ''   }) => {
  return (
    <Grid
     container
      spacing={ 0 }
      direction="column"
      className='general-informations fondoColor2'
      sx={{ color: 'primary.main'}}
    >
    
    <Grid container sx={{justifyContent:'center'}} className='image-intro'>
      <img src={Logo1} alt="Mutuus" width="230" height="85" align='center'/>
      </Grid>
      <Grid container sx={{justifyContent:'center', paddingTop:5}}>
        <Grid item xs={ 10 } md={9} lg={9}>
        { children }
        </Grid>
      </Grid>
      <Footer/>
    </Grid>
  )
}