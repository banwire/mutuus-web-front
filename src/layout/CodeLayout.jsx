import {  Grid } from '@mui/material';
import Logo1 from '../assets/img/mutuus-1/Logo1.png';
import { Footer } from '../components';

export const CodeLayout = ({ children, title = ''   }) => {
  return (
    <Grid
        container
        alignContent='center'
        // alignItems='center'
        className='general-informations fondoColor2'
    >
        <Grid container sx={{justifyContent:'center'}}>
            <Grid item xs={ 10 } md={9} lg={9}>
                <Grid container sx={{justifyContent:'center'}}>
                    <img src={Logo1} alt="Mutuus" width="200"/>
                </Grid>
                <br /><br />
                { children }
            </Grid>
        </Grid>
      <Footer/>
    </Grid>
  )
}