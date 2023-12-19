import { useState, useEffect  } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Grid } from "@mui/material"
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
import {  creditValidationSchema} from '../../validations/creditValidations';
import { infoPay } from "../../store/auth/payments";
import Filters from '../../helpers/filter'


import imgCard from '../../assets/img/mutuus-1/card.png';
import imgMaster from '../../assets/img/mutuus-1/master.png';

const membershiForm = {
  number:'',
  cvv:'',
  name: '',
  month:'',
  year:'',
}

let result = ''
export const PaymentsOxxo = () => {
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Permite solo caracteres numéricos
  };
  const handleInputChange  = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ''); // Permite solo letras
  };
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.police);
  const {information} = useSelector(state => state.counter);
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

  const [nameValue, setnameValue] = useState('');
  const handleChangeName = (event) => {  
    setnameValue(event.target.value);
  };

  const [numeroValue, setnumeroValue] = useState('');
  const handleChangeNum = (event) => {  
    setnumeroValue(event.target.value);
  };

  const [mesValue, setmesValue] = useState('');
  const handleChangeMes = (event) => {  
    setmesValue(event.target.value);
  };

  const [yearValue, setyearValue] = useState('');
  const handleChangeYear = (event) => {  
    setyearValue(event.target.value);
  };
  
  const handleSubmit = (values) => {
    setLoading(true);
    console.log(values);
    // dispatch(infoPay(values))
    setTimeout(() => {
      setLoading(false);
      history('/payments-oxxo');
    }, 4000);
 
}
  return (
    <PolizasLayout title="Realiza tu pago mediante Oxxo y tiendas de conveniencia" stepv={3}>
       <ProgressCircular open={loading} />
        <Formik
          initialValues={membershiForm}
          onSubmit={handleSubmit}
          // validationSchema={creditValidationSchema}
        >
        { ({ values,handleSubmit, handleChange, handleBlur, errors, touched }) => (
        <Form onSubmit={handleSubmit} autocomplete="off">
          <Grid container className='payments-oxxo' direction="row" alignItems="center">
            <Grid container spacing={2} textAlign='center' sx={{padding:6}}>
              <Grid xs={ 12 } md={12} lg={12} className='title-componente'> 
                <p>METODO DE PAGO</p>
              </Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid className='contenedor-button' textAlign='center'>
                    <p>OXXO</p>
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent='center'>
                <p>*Te cobrarán $12 extras por cada deposito*</p>
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
    </PolizasLayout>
  )
}