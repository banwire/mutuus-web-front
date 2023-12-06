import { Container, Typography, Grid, Link, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon  from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <Box
    className='footer-d'
  >
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography sx={{fontSize:12, fontFamily:'Montserrat'}} variant="body1" align="center">
            © 2023 Mutuus. Todos los derechos reservados.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Link href="https://www.facebook.com/psmutuus/?locale=es_LA" target="_blank" color="inherit">
    
      <FacebookIcon sx={{width:50, height:20}}/>

          </Link>
          <Link href="https://www.linkedin.com/company/psmutuus/" target="_blank" color="inherit">
            <LinkedInIcon sx={{width:50, height:20}}/>
          </Link>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
}