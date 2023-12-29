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
      history('/sections');
    }, 4000);
 
}
  return (
    <PolizasLayout title="Te mostramos los detalles de tu compra" stepv={3}>
       <ProgressCircular open={loading} />
        <Grid container className='payments-notification' alignItems="center">
            <Grid container spacing={2} textAlign='center' sx={{padding:4}}>
              <Grid item xs={ 12 } md={12} lg={12} className='title-componente'> 
                <p>DETALLES DE COMPRA</p>
              </Grid>
            </Grid>
            <Grid container justifyContent='center'>
              <img src={imgCheck} alt="Credit"/>
            </Grid>
            <Grid container justifyContent='center' sx={{paddingTop: 2, display:'flex'}}>
              <Grid item xs={ 10 } md={10} lg={7} className='contenedor-code'>
                <Grid textAlign='center'>
                <label className='title-mem'>Membresía</label>
                </Grid>
                <br />
                <Grid container justifyContent='space-around'>
                  <Grid item xs={ 3 } md={3} lg={3}>
                  <img src={imgTarjet} alt="imgTarjet" />
                  </Grid>
                  <Grid item xs={ 7 } md={6} lg={5} >
                    <p>Extra prima (adulto)-25</p>
                    <p>Menor 1 gratis</p>
                    <p>Menor 2 $500</p>
                    <p>Extra prima (menor 2)-25%</p>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-around'>
                  <label htmlFor="">Total</label>
                  <label className='total'>$14,500.00</label>
                </Grid>
              </Grid> 
            </Grid>
            <Grid container  justifyContent="center" sx={{paddingTop: 2, lineHeight:2}}>
              <Grid item xs={ 8 } md={8} lg={4} textAlign='left'>
              <p>Métodos de pago: Tarjeta Débito</p>
              <p>Número de compra: LREF2034</p>
              <p>Nombre: Luis Angel Hernandez</p>
              <p>Email: luisangelhdzs97@gmail.com</p>
              <p>Teléfono: 7441874856</p>
              </Grid> 
            </Grid>
            <hr className='lin-oxxo'/>
            <Grid container  justifyContent="center" sx={{paddingTop: 2}}>
              <Grid item xs={ 4 } md={4} lg={2} textAlign='left' sx={{lineHeight:2}}>
                <p>Descuento: </p>
                <p>Subtotal: </p>
                <p>Total: </p>
              </Grid> 
              <Grid item xs={ 4 } md={4} lg={2} textAlign='end' sx={{lineHeight:1.8}}>
                <p className='descuento'>-$5,000.00</p>
                <p className='subtotal'>$5,000.00</p>
                <p className='total'>$6,000.00</p>
              </Grid> 
            </Grid>
           
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