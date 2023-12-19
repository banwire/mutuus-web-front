import React from 'react';
import { FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';

const CustomTextField = ({
  label,
  name,
  errors={},
  onChange,
  placeholder,
  type
}) => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} margin={3} style={{ textAlign: 'left' }} flexDirection={'column'} justifyContent={'center'}>
      <Typography variant="body2" color={'black'} style={{ fontSize: '1.5rem', fontFamily: 'Montserrat', fontWeight: 'bolder' }}>{label}</Typography>
      <FormControl sx={{ m: 0, width: '100%', alignSelf: 'center', background: 'white', borderRadius: 10 }} variant="solid">
        <OutlinedInput
          id="outlined-adornment-weight"
          placeholder={placeholder}
          aria-describedby="outlined-weight-helper-text"
          color={'secondary'}
          size='large'
          inputProps={{
            'aria-label': 'weight',
          }}
          onChange={onChange}
          type={type}
          sx={{
            borderRadius: 10,
            borderColor: 'secondary',
            fontSize: '1.5rem',
            fontFamily: 'Montserrat'
          }}
        />
        
      </FormControl>
      {errors[name] &&
          <Typography variant="body2" color={'red'} style={{ fontSize: '1.5rem', fontFamily: 'Montserrat'}}>
            {
              errors[name]
            }
          </Typography>
        }
    </Grid>
  );
};

export default CustomTextField;