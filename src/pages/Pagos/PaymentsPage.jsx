import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Grid } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"



export const PaymentsPage = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
  return (
    <PolizasLayout title="Método de pago.">
      <Grid container  spacing={1}>
        <Grid  item xs={ 12 } md={12} lg={12}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
        </Grid>
     

      </Grid>
      <Grid container sx={{ mt: 10 }} >
        <Grid item xs={ 12 } md={8} lg={8} textAlign='end'>
            <p className="text-font-book">Monto a pagar: $14,500.00</p>
            <p className="text-font-book">Póliza 1M         $12,000</p>
            <p className="text-font-book">Menor adicional:  $2,000</p>
        </Grid>
        
      </Grid>
      <Grid container sx={{ mt: 1 }}>
      <Grid item xs={ 12 } md={12} lg={12} textAlign='end'>
          <Button sx={{fontFamily:'Gilam Regular' }}  variant='contained' >
            Pagar
          </Button>
        </Grid>
      </Grid> 
            
    </PolizasLayout>
  )
}