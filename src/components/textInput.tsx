import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { TextField } from '@mui/material';
import { Grid } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';

interface Props {
    label?: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'date';
    placeholder?: string;
    [x: string]: any;
}
const CssTextField = styled(TextField)({
    //Cuando el input tenga el focus.....
    '& label.Mui-focused': {
      color: '#183B91',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#183B91',
    },
  
    //Color inicial del border del input....
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#AED43A',
        borderRadius: 20,
        height: 45,
        top:0.1
      },
      
    //Color del borde al pasar el mouse por encima...  
      '&:hover fieldset': {
        borderColor: '#183B91',
      },
  
    //Color del borde al hacer click en el input...  
      '&.Mui-focused fieldset': {
        borderColor: '#999999',
      },
  
      // '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
      //   color: 'white'
      // },
    },
  });
  const TextFieldInfo = styled(TextField)({
    //Cuando el input tenga el focus.....
    '& label.Mui-focused': {
      color: '#183B91',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#183B91',
    },
  
    //Color inicial del border del input....
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#AED43A',
        borderRadius: 25,
      },
      
    //Color del borde al pasar el mouse por encima...  
      '&:hover fieldset': {
        borderColor: '#183B91',
      },
  
    //Color del borde al hacer click en el input...  
      '&.Mui-focused fieldset': {
        borderColor: '#999999',
      },
  
      // '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
      //   color: 'white'
      // },
    },
  });
  export const CssTextFieldSelect = styled(TextField)({
    //Cuando el input tenga el focus.....
    '& label.Mui-focused': {
      color: '#183B91',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#183B91',
    },
  
    //Color inicial del border del input....
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#AED43A',
        borderRadius: 20,
        height: 45,
        
      },
      
    //Color del borde al pasar el mouse por encima...  
      '&:hover fieldset': {
        borderColor: '#183B91',
      },
  
    //Color del borde al hacer click en el input...  
      '&.Mui-focused fieldset': {
        borderColor: '#999999',
      },
  
      // '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
      //   color: 'white'
      // },
    },
  });

  const TextFieldInfoDat = styled(TextField)({
    //Cuando el input tenga el focus.....
    '& label.Mui-focused': {
      color: '#183B91',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#183B91',
    },
  
    //Color inicial del border del input....
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#AED43A',
        borderRadius: 25,
        width:82,
      },
      
    //Color del borde al pasar el mouse por encima...  
      '&:hover fieldset': {
        borderColor: '#183B91',
      },
  
    //Color del borde al hacer click en el input...  
      '&.Mui-focused fieldset': {
        borderColor: '#999999',
      },
  
      // '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
      //   color: 'white'
      // },
    },
  });

export const MyTextInput = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props)

    return (
        <>
            <label htmlFor={ props.id || props.name } >{ label }</label>
            <CssTextField
              { ...field } { ...props } 
              sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Montserrat'}}}
              fullWidth
            />
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}

export const MyTextInputInfo  = ( { label, ...props }: Props ) => {

  const [ field ] = useField(props)

  return (
      <>
          <label htmlFor={ props.id || props.name } >{ label }</label>
          <TextFieldInfo
            size="small"
            { ...field } { ...props } 
            sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
            InputLabelProps={{style:{color: '#183B91', fontFamily:'Montserrat'}}}
            fullWidth
          />
          <ErrorMessage name={ props.name } component="span" />
      </>
  )
}

export const TextFieldDate = ( { label, ...props }: Props ) => {

  const [ field ] = useField(props)

  return (
      <>
        <Grid container>
        <label htmlFor={ props.id || props.name } >{ label }</label>
          <TextFieldInfoDat
            size="small"
            { ...field } { ...props } 
            sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10,} }}
            InputLabelProps={{style:{color: '#183B91', fontFamily:'Montserrat'}}}
            fullWidth
          />
        </Grid>
        <Grid container>
        <ErrorMessage name={ props.name } component="span" />
        </Grid>
        
         
      </>
  )
}

export const MyTextInputPassword = ( { label, ...props }: Props ) => {
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [ field ] = useField(props)
  return (
      <>
          <label htmlFor={ props.id || props.name } >{ label }</label>
          <CssTextField
            type={showPassword ? 'password' :  'text'}
            { ...field } { ...props } 
            sx={{ input: { color: '#183B91', fontFamily:'Montserrat', fontSize:10} }}
            InputLabelProps={{style:{color: '#183B91', fontFamily:'Montserrat'}}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <ErrorMessage name={ props.name } component="span" />
      </>
  )
}