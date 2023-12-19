import React from 'react';
import { Divider, Grid, IconButton, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
const stepData = [
  { icon: 'file-document-edit', text: 'Informacion' },
  { icon: 'credit-card-multiple', text: 'Metodo de pago' },
  { icon: 'cash', text: 'Pago' },
];

const PaymentSteps = ({ step }) => {
  const history = useNavigate();
  return (
    <Grid container xs={10} sm={10} md={10} lg={10} xl={10} justifyContent="center" alignSelf={'center'} flexDirection={'row'} style={{ marginTop: '10px' }}>
      <Grid xs={3} sm={3} md={3} lg={3} xl={3} item style={{ textAlign: 'center' }} >
      <IconButton aria-label="delete" onClick={() => {
   history('/information');
  }}>
      <AssignmentIcon sx={{ width: '4rem', height: '4rem' }} color={step >= 1 ? 'secondary': 'disable'} />
      </IconButton>
        
        <Typography variant="body2" color={step >= 1 ? 'secondary': grey[500]}  style={{ fontSize: '1.5rem' }}>Informacion</Typography>
      </Grid>
      <Grid xs={1} sm={1} md={1} lg={1} xl={1} border={1} height={0} alignSelf={'center'} sx={{ borderStyle: 'dashed', borderColor:step >= 2 ? '#AED43A': '#00000042' }} />
      <Grid xs={3} sm={3} md={3} lg={3} xl={3} item style={{ textAlign: 'center' }} >
      <IconButton aria-label="delete" onClick={() => {
   history('/membershi');
  }}>
<AccountBalanceWalletIcon sx={{ width: '4rem', height: '4rem' }} color={step >= 2 ? 'secondary': 'disable'} />
  </IconButton>
        
        <Typography variant="body2" color={step >= 2 ? 'secondary': grey[500]} style={{ fontSize: '1.5rem' }}>Metodo de pago</Typography>
      </Grid>
      <Grid xs={1} sm={1} md={1} lg={1} xl={1} border={1} height={0} alignSelf={'center'} sx={{ borderStyle: 'dashed', borderColor:step === 3 ? '#AED43A': '#00000042'  }} />
      <Grid xs={3} sm={3} md={3} lg={3} xl={3} item style={{ textAlign: 'center' }} >
      <IconButton aria-label="delete" onClick={() => {
   history('/payments');
  }}>

        <PaymentsIcon sx={{ width: '4rem', height: '4rem' }} color={step === 3 ? 'secondary': 'disabled'} />
  </IconButton>
        <Typography variant="body2" color={step === 3 ? 'secondary': grey[500]} style={{ fontSize: '1.5rem' }}>Pago</Typography>
      </Grid>
    </Grid>
  );
};

export default PaymentSteps;