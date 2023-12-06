import { ErrorMessage, useField } from 'formik';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
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

export const MyTextInput = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props)

    return (
        <>
            <label htmlFor={ props.id || props.name } >{ label }</label>
            <CssTextField
              { ...field } { ...props } 
              sx={{ input: { color: '#183B91', fontFamily:'Mulish', fontSize:10} }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Mulish'}}}
              fullWidth
            />
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
export const MyTextInputRegister = ( { label, ...props }: Props ) => {

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