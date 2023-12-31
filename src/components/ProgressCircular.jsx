import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';


export const ProgressCircular = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: '#183b91', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}