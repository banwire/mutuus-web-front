import { Grid, Typography } from '@mui/material';
import {  SideBar, SideBarRegister } from '../components';
import images from '../assets/img/mutuus-1/Login.png';
import imagesRegister from '../assets/img/mutuus-1/Register.png';
import Logo1 from '../assets/img/mutuus-1/Logo1.png';
export const MenuLayout = ({ children, title = '', }) => {

  return (

    <Grid
      container
      className='login-acceso fondoColor'
      sx={{ color: 'primary.main', minHeight: '100vh'}}
    >
      {title === "Iniciar Sesión" || title ==="Cambio de contraseña"
        ? <Grid sx={{ width: { xs:350, sm: 380, md:390, lg:550}
      }}>
            <img src={Logo1} className='img-login-logo'/> 
            <img src={images} className='img-login-people'/>
          </Grid>   
     
        :
        <Grid  textAlign='center' sx={{fontFamily:'Montserrat', fontWeight:20}}>
            <img src={Logo1} className='img-login-logo-register'/>
            <Grid style={{bottom:150, position:'relative'}}>
              <Grid>
              <p style={{fontSize:40} }>El seguro que buscas, </p>
              </Grid>
              <Grid >
                <p style={{fontSize:40} }><strong style={{color:'#9CD41C'} }>
              NO</strong>  es un seguro.</p>
              </Grid>
         
            </Grid>
            
            <img src={imagesRegister} className='img-login-people-register'/>
          </Grid> 
        
      }
      {title === "Iniciar Sesión" || title ==="Cambio de contraseña"
        ? 
            <Grid sx={{ width: { xs:350, sm: 380, md:390, lg:550}}} className='contenedor-login'>
              <Typography className='fon-titulo'>{ title }</Typography>
              { children }
            </Grid>
        
        :  <Grid sx={{ width: { xs:350, sm: 380, md:500, lg:580}}} className='contenedor-register'>
        <Typography className='fon-titulo'>{ title }</Typography>
        <br />
        { children }
      </Grid> 
      }
   
     
    </Grid>
  )
}