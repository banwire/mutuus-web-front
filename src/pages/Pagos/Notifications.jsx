import { useState  } from 'react';
import { useNavigate} from "react-router-dom"
import { Grid } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"

import {PagosOxxoButton, OxxoTiendasPagoButton} from "../../components/ButtonContent"
import {ProgressCircular} from "../../components/ProgressCircular"
import imgCheck from '../../assets/img/mutuus-1/check.png';
import imgTarjet from '../../assets/img/mutuus-1/tarjet.png';
export const Notifications = () => {

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
      history('/payments-oxxo');
    }, 4000);
 
}
  return (
    <PolizasLayout title="Te mostramos los detalles de tu compra" stepv={3}>
       <ProgressCircular open={loading} />
          <Grid container className='payments-notification' direction="row" alignItems="center">
            <Grid container spacing={2} textAlign='center' sx={{padding:4}}>
              <Grid item xs={ 12 } md={12} lg={12} className='title-componente'> 
                <p>DETALLES DE COMPRA</p>
              </Grid>
            </Grid>
            <Grid container justifyContent='center'>
            <img src={imgCheck} alt="Credit"/>
                </Grid>
                <Grid container justifyContent='center' sx={{paddingTop: 2, display:'flex'}}>
                <Grid item xs={ 10 } md={10} lg={7} className='contenedor-code' >
                <img src={imgTarjet} alt="imgTarjet" />
                
                 
                
          
                
                
                </Grid>
               
                      
                
               
            </Grid>




                <hr className='lin-oxxo'/>
           
           <Grid container textAlign='center' sx={{mb: 1, padding:4}}  >
             <Grid item xs={12} sm={ 12 } md={12} lg={12}>
               <OxxoTiendasPagoButton  onClick={handleClick} variant='contained' >
                Finalizar
               </OxxoTiendasPagoButton>
             </Grid>
           </Grid>
            </Grid>
        
         
           
           
               
    </PolizasLayout>
  )
}