import React from 'react';
import { Grid, TextField } from '@mui/material';

const CustomTextField = ({
  label,
  name,
  defaultValue,
}) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} margin={2}>
      <TextField
        variant="outlined"
        type="text"
        autoFocus
        fullWidth
        required
        name={name}
        label={label}
        InputLabelProps={{
          style: {
            fontSize: '1.5rem',
          }
        }}
        color="secondary"
        InputProps={{
          sx: {
            borderRadius: 10, fontFamily: 'Montserrat',
            fontSize: '1.5rem'
          }
        }}
        defaultValue={defaultValue}
      />
    </Grid>
  );
};

export default CustomTextField;