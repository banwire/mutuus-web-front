import { useState, useEffect  } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Grid } from "@mui/material"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useSelector, useDispatch } from "react-redux"
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { PolizasLayout } from "../../layout/PolizasLayout"
import { Link as RouLink, useNavigate} from "react-router-dom"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import { usePaymentStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import {ProgressCircular} from "../../components/ProgressCircular"
import {ToastComponent} from "../../components/ToastComponent"
import { MyTextInput, TextFieldDate,MyTextInputInfo, PaymentSteps } from '../../components';
import {  membershiValidationSchema} from '../../validations/membershiValidations';
import { infoPay } from "../../store/auth/payments";
import Filters from '../../helpers/filter'

import imgAdd from '../../assets/img/mutuus-1/iconos/add.png';
import imgDelete from '../../assets/img/mutuus-1/iconos/delete.png';

const membershiForm = {
  claveAgent:'',
  agente:'',
  membershi: '',
  type_pay:'',
}

let result = ''
export const MembershiPage = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.police);
  const {information} = useSelector(state => state.counter);
  const history = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
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

  const [selectedValue, setSelectedValue] = useState('$0.00');
  const handleChangeRadio = (event) => {
    // '70d45cdb-9c72-4256-8f24-4da43529a0c2'
    // let result = ''
    // products.data.product.map(item=>{
    //   result = item.product_configs.find(element => element.id === event.target.value)
    // });
    // console.log(result);
    let pago = Filters.formatNumber(event.target.value)
    let sumaPago = Filters.formatCurrency(pago + information.information.person_info.imc.extra);
    setSelectedValue(sumaPago);
  };
  
  const handleSubmit = (values) => {
    setLoading(true);
    console.log(values);
    dispatch(infoPay(values))
    setTimeout(() => {
      setLoading(false);
      history('/payments');
    }, 4000);
 
}
  return (
    <PolizasLayout title="Por favor ingresa la siguiente información"  stepv={2}>
       <ProgressCircular open={loading} />
       
        <Formik
          initialValues={membershiForm}
          onSubmit={handleSubmit}
          validationSchema={membershiValidationSchema}
        >
        { ({ values,handleSubmit, handleChange, handleBlur, errors, touched }) => (
        <Form onSubmit={handleSubmit} autocomplete="off">
          <Grid container className='membership-user' direction="row" alignItems="center">
             <Grid container spacing={2} textAlign='center' sx={{padding:5}}>
          <Grid xs={ 12 } md={12} lg={12} className='title-componente'> 
          <p>ELECCIÓN DE MEMBRESÍA</p>
          </Grid>
        </Grid>
          <Grid container justifyContent='center' alignItems='center' className='info-err'>
            <Grid item xs={ 10 } md={10} lg={2}>
            <label>Clave del Agente:</label>
          </Grid> 
          <Grid item xs={ 10 } md={10} lg={4}>
          <MyTextInputInfo 
                placeholder='Agente'
                name="claveAgent"
                type="text"
          />
          </Grid> 
        </Grid>
        <Grid container spacing={2} justifyContent='center' sx={{paddingTop:2}} className='info-err'>
        <Grid item xs={ 10 } md={10} lg={6}>
          <Autocomplete
           size="small"
            options={['Hombre', 'Mujer']}
            getOptionLabel={(option) => option}
            value={values.agente}
            sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
            onChange={(e, value) => handleChange('agente')(value)}
            onBlur={handleBlur('agente')}
            renderInput={(params) => (
              <MyTextInputInfo
                {...params}
                placeholder="Selecciona un agente"
                sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
                name="agente"
                error={Boolean(errors.agente && touched.agente)}
               
              />
            )}
          />
         
          </Grid>
        </Grid>
        <Grid container justifyContent='center' spacing={2}  sx={{paddingTop:2}}>
          <Grid item xs={ 10 } md={10} lg={6} >
            <label>Membresía:</label>
            {products.data.product.map((element, index) => (
              <Grid  container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className='radius-sel'
              >
                <label htmlFor="">{element.description}</label>
                  <FormControlLabel
                    sx={{height:19}}
                     name="membershi"
                     value={values.membershi}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    control={<Radio
                      value={element.id}
                       sx={{
                      color: '#4F4F4F1A',
                      '&.Mui-checked': {
                        color: '#999999',
                      },
                    }}/>}
                  />
              </Grid>
            ))}
            <Grid className='info-err'>
            <ErrorMessage name="membershi" component="span" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent='center' spacing={2}  sx={{paddingTop:2}}>
        <Grid item xs={ 10 } md={10} lg={6}>
          <label>Tipo de Pago:</label>
          {products.data.product.map((element) => (
            element.product_configs.map((item, index) => (
              <Grid className='radius-sel' container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <label htmlFor="">{item.product_type}</label>
                  <FormControlLabel
                    sx={{height:19}}
                     name="type_pay"
                     value={values.type_pay}
                     onChange={handleChange}
                     onClick={handleChangeRadio}
                     onBlur={handleBlur}
                    control={<Radio
                      checked={selectedValue === item.amount}
                      value={item.amount}
                       sx={{
                      color: '#4F4F4F1A',
                      '&.Mui-checked': {
                        color: '#999999',
                      },
                    }}/>}
                  />
                
              </Grid>
            ))
         
        ))}
          <Grid className='info-err'>
            <ErrorMessage name="type_pay" component="span" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent='center' spacing={2}  sx={{paddingTop:2}}>
        <Grid item xs={ 10 } md={10} lg={6}>
            <p>Al seleccionar el pago anual o 12 MSI puedes agregar un menor de edad sin costo*</p>
          </Grid>
        </Grid>
        <Grid  container  direction="row"
                justifyContent="space-evenly"
                alignItems="center" sx={{paddingTop:2, cursor:'pointer'}}>
            <img src={imgAdd} alt="MutuusCruz" onClick={handleClickOpen}/>
            <img src={imgDelete} alt="MutuusCruz"/>
        </Grid>
        <br />
        <Grid container justifyContent='center' sx={{paddingTop:1}} >
          <Grid container 
            justifyContent="space-evenly"
            sx={{paddingTop:1, paddingBottom:1}}  className='info-cuadro'>
              <Grid item xs={ 6 } md={6} lg={4}>
                <p >Parentesco: </p>
                <p >Nombre: </p>
                <p >Estatura: </p>
                <p >Peso: </p>
                <p >Curp: </p>
              </Grid>
              <Grid item xs={ 6 } md={6} lg={4}>
                <p > Hijo</p>
                <p > Luis Hernandez</p>
                <p >1.85 </p>
                <p >52.69 </p>
                <p >HESL970130SR4 </p>  
              </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid container  justifyContent='center' sx={{paddingTop:2}}  >
        <Grid item xs={ 5 } md={5} lg={3} className='info-pago'>
            <p className='textinfo'> Póliza 1M</p>
            <p className='textTotal'> {selectedValue}</p>
          </Grid>
        </Grid>
        <Grid container textAlign='center' sx={{mb: 1, padding:5}}  >
              <Grid item xs={12} sm={ 12 } md={12} lg={12}>
                <SecundaryButton  type='submit' variant='contained' >
                 
             Continuar
                </SecundaryButton>
              </Grid>
            </Grid>
          </Grid>
         
        </Form>
      )}
    </Formik>  

   <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Grid container justifyContent='center' alignItems='center' className='info-err'>
            <Grid item xs={ 10 } md={10} lg={2}>
            <label>Clave del Agente:</label>
          </Grid> 
          <Grid item xs={ 10 } md={10} lg={4}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          </Grid> 
        </Grid>
        </DialogContent>
        <DialogActions>
          <SecundaryButton onClick={handleClose}>Cancel</SecundaryButton>
          <SecundaryButton onClick={handleClose}>Subscribe</SecundaryButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>       
    </PolizasLayout>
  )
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Masculino' },
  { label: 'Femenino' }
];

const alturas = [ '14.25','15.36'
];

const pesos = [ '14.25','15.36'
];