import { useState  } from 'react';
import { useNavigate} from "react-router-dom"
import { Grid } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"

import {PagosOxxoButton, OxxoTiendasPagoButton} from "../../components/ButtonContent"
import { ListComponent } from '../../components';
import {ProgressCircular} from "../../components/ProgressCircular"
import imgOxxo from '../../assets/img/mutuus-1/barcode_oxxo.png';

const links = [
  { to: '/payments', text: 'Pagar con tarjeta de crédito o débito' },
  { to: '/payments-store', text: 'Pagar en tiendas de conveniencia' },
];
export const PaymentsOxxo = () => {

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
    <PolizasLayout title="Realiza tu pago mediante Oxxo" stepv={3}>
       <ProgressCircular open={loading} />
          <Grid container className='payments-oxxo' direction="row" alignItems="center">
            <Grid container spacing={2} textAlign='center' sx={{padding:4}}>
              <Grid item xs={ 12 } md={12} lg={12} className='title-componente'> 
                <p>METODO DE PAGO</p>
              </Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid className='contenedor-button' textAlign='center'>
                    <p>OXXO</p>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' sx={{paddingTop: 3}}>
                <p>*Te cobrarán $12 extras por cada deposito*</p>
            </Grid>
            <Grid container justifyContent='center' sx={{paddingTop: 2}}>
                <Grid item xs={ 10 } md={10} lg={5.3} className='contenedor-code' textAlign='center'>
                   <Grid container
                        justifyContent="space-around"
                        >
                        <label htmlFor="">Monto: </label>
                        <label htmlFor="">Referencia: </label>
                   </Grid>
                   <Grid container
                        justifyContent="space-around"
                        >
                        <p> $3,000.00</p>
                        <p> LREF2034</p>
                   </Grid>
                   <Grid container 
                        justifyContent="center" sx={{paddingTop:1}}>
                        <img src={imgOxxo} alt="Credit" className='barcode-img'/>
                   </Grid>
                </Grid>
            </Grid>
            <Grid container textAlign='center' sx={{padding:2}}  >
              <Grid item xs={12} sm={ 12 } md={12} lg={12}>
                <PagosOxxoButton  variant='contained' >
                    Descargar PDF
                </PagosOxxoButton>
              </Grid>
            </Grid>
            <hr className='lin-oxxo'/>
            <Grid container justifyContent='center' sx={{paddingTop: 2}}>
                <Grid item xs={12} sm={ 12 } md={6} lg={6} textAlign='center'>
                <p>Tu pago será acreditado 30 minutos después.
                    Te llegará una notificación a tu correo.</p>
                </Grid>
                
            </Grid>
            <Grid container textAlign='center' sx={{mb: 1, padding:4}}  >
              <Grid item xs={12} sm={ 12 } md={12} lg={12}>
                <OxxoTiendasPagoButton  onClick={handleClick} variant='contained' >
                 Continuar
                </OxxoTiendasPagoButton>
              </Grid>
            </Grid>
            <Grid container 
                  justifyContent="center"
                  item xs={12} sm={ 12 } md={12} lg={12} sx={{paddingBottom:2}}>
                  <ListComponent links={links} />
              </Grid>
          </Grid>        
    </PolizasLayout>
  )
}