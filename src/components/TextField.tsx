import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';

interface Props {
  label?: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'date';
  placeholder?: string;
  errors?:{},
  [x: string]: any;
}

export const CustomTextField = ({ label, ...props }: Props ) => {
  const [ field ] = useField(props)
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} margin={3} style={{ textAlign: 'left' }} flexDirection={'column'} justifyContent={'center'}>
      <Typography variant="body2" color={'black'} style={{ fontSize: '1.3rem', fontFamily: 'Montserrat', fontWeight: 'bolder' }}>{label}</Typography>
      <FormControl sx={{ m: 0, width: '100%', alignSelf: 'center', background: 'white', borderRadius: 10 }}>
        <OutlinedInput
          id="outlined-adornment-weight"
          { ...field } { ...props } 
          aria-describedby="outlined-weight-helper-text"
          size='small'
          inputProps={{
            'aria-label': 'weight',
          }}
          sx={{
            '&.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor:'#AED43A', 
              },
              '&:hover fieldset': {
                borderColor: '#183B91', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999999', 
              },
            },
            borderRadius: 10,
            fontSize: '1.3rem',
            fontFamily: 'Montserrat',
            padding: 0.1,
          }}
        />
        
      </FormControl>
         <ErrorMessage name={ props.name } component="span" />
    </Grid>
  );
};