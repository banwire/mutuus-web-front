import { useState  } from 'react';
import { useNavigate} from "react-router-dom"
import { Grid } from "@mui/material"
import { PlanesLayout } from "../../layout/PlanesLayout"

import {PagosOxxoButton, PagosStoreButtonExport} from "../../components/ButtonContent"
import {ProgressCircular} from "../../components/ProgressCircular"
import imgPerson from '../../assets/img/mutuus-1/personales.png';
import imgMedi from '../../assets/img/mutuus-1/medico.png';
export const SectionsPage = () => {

  const history = useNavigate();
  
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
  
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history('/datos-personales');
    }, 4000);
 
}
  return (
    <PlanesLayout title="Selecciona la opción de tu interés">
       <ProgressCircular open={loading} />
        <Grid container justifyContent='center' className='payments-notification' alignItems="center">
            <Grid container justifyContent='center' sx={{paddingTop: 2}}>
              <Grid item xs={ 10 } md={10} lg={5} className='contenedor-info'>
                <Grid container justifyContent='center'>
                <img src={imgPerson} alt="imgTarjet" />
                </Grid>
                <br />
                <Grid container justifyContent='center'>
                <PagosOxxoButton  onClick={handleClick} variant='contained' sx={{width:180, height:45, borderRadius:110, fontSize:12}}>
                Datos personales
               </PagosOxxoButton>
                </Grid>
              </Grid> 
            </Grid>
            <Grid container justifyContent='center' sx={{paddingTop: 2}}>
              <Grid item xs={ 10 } md={10} lg={5} className='contenedor-info'>
                <Grid container justifyContent='center'>
                <img src={imgMedi} alt="imgTarjet" />
                </Grid>
                <br />
                <Grid container justifyContent='center'>
                <PagosStoreButtonExport  onClick={handleClick} variant='contained' sx={{width:180, height:45, borderRadius:110, fontSize:12}}>
                Cuestionario médico
               </PagosStoreButtonExport>
                </Grid>
              </Grid> 
            </Grid>
           
        </Grid>     
    </PlanesLayout>
  )
}