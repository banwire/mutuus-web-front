import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import {PrimaryButtonCode, SecundaryButtonCode} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"
import { useAuthStore, useForm } from '../../hooks';

import Swal from 'sweetalert2';

const CodeForm = {
  code1:'',
  code2:'',
  code3:'',
  code4: '',
}
const formValidations ={
  code1:[(value)=> value.length >=1, 'El Código es obligatorio.'],
  code2:[(value)=> value.length >=1, 'El Código es obligatorio.'],
  code3:[(value)=> value.length >=1, 'El Código es obligatorio.'],
  code4:[(value)=> value.length >=1, 'El Código es obligatorio.'],
}

export const CodePage = () => {
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Permite solo caracteres numéricos
  };
  const history = useNavigate();
  const {startCode, user, code, status, errorMessage} = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState,code1, code2,code3, code4, onInputChange,
    isFormValid, code1Valid, code2Valid, code3Valid, code4Valid} = useForm(CodeForm, formValidations)
  const onSubmit = (event) =>{
    event.preventDefault();
    setFormSubmitted(true);
    const {code1,
      code2,
      code3,
      code4} = formState;
    const result = {
      'customer_code':{
        code: '89238936',
        customer_email: user.uid
      }
    } 
    if ( !isFormValid ) return;
    startCode(result).then(succ=>{
      Swal.fire({
        title: "¡Exito!",
        text: "Se validó el código correctamente",
        icon: "success",
        confirmButtonText: 'Aceptar'
      }).then(succ => {
        if (succ.isConfirmed) {
          // history('/login');
        }
      })
    })
  }


  return (
    <PolizasLayout title="Contratación en línea">
     
      <form onSubmit={onSubmit}>
      <Grid container className="code_validations" sx={{justifyContent:'center'}}>
        <Grid item xs={12} md={12} lg={12} textAlign='center'>
            <p>Se he enviado un código por SMS a su celular.</p>
            <p>Por favor capture el código recibido:</p>
        </Grid>
        <Grid container spacing={ 0 } sx={{paddingTop:5}} textAlign='center'>
          <Grid  item xs={12} md={12} lg={12} className="container-code_access">
            <Grid item xs={12} md={12} lg={4}>
            <CssTextField  sx={{ input: { color: '#000000', fontFamily:'Montserrat', height:52, width:52, textAlign:'center', fontSize:30} }}
              inputProps={{ maxLength: 1, inputMode: 'numeric' }}
              name='code1'
              value={code1}
              onChange={onInputChange}
              onInput={handleInput}
              error={!!code1Valid && formSubmitted}/>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <CssTextField sx={{ input: { color: '#000000', fontFamily:'Montserrat', height:52, width:52, textAlign:'center', fontSize:30,  } }}
              inputProps={{ maxLength: 1, inputMode: 'numeric' }}
              name='code2'
              value={code2}
              onChange={onInputChange}
              onInput={handleInput}
              error={!!code2Valid && formSubmitted}/>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
            <CssTextField sx={{ input: { color: '#000000', fontFamily:'Montserrat', height:52, width:52, textAlign:'center', fontSize:30,   } }}
              inputProps={{ maxLength: 1, inputMode: 'numeric' }}
              name='code3'
              value={code3}
              onChange={onInputChange}
              onInput={handleInput}
              error={!!code3Valid && formSubmitted}/>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
            <CssTextField sx={{ input: { color: '#000000', fontFamily:'Montserrat', height:52, width:52, textAlign:'center', fontSize:30,  } }}
              inputProps={{ maxLength: 1, inputMode: 'numeric'}}
              name='code4'
              value={code4}
              onInput={handleInput}
              onChange={onInputChange}
              error={!!code4Valid && formSubmitted}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={ 12} md={12} lg={12} sx={{ mt: 3, color: 'error.main' }} textAlign='center' >
          <p sx={{fontSize:15, fontFamily:'Montserrat'}} display={ !!errorMessage ? '': 'none' }>{errorMessage}</p>
        </Grid>
       
        <Grid container className="button-code" spacing={ 0 } sx={{ mb: 2 }}>
          <Grid item xs={ 12 } sm={ 6 }  md={6} lg={6} textAlign='center'>
            <SecundaryButtonCode variant='contained' >
              Reenviar Código
            </SecundaryButtonCode>
          </Grid>
          <Grid item s={ 12 } sm={ 6 }  md={6} lg={6} textAlign='center'>
            <PrimaryButtonCode type='submit' variant='contained'>
              Continuar
            </PrimaryButtonCode>
          </Grid>
        </Grid>
        </Grid>
        </form>
    

    </PolizasLayout>
  )
}