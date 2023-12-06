import { Button, Grid, TextField } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#183B91',
    color: theme.palette.common.white,
    fontFamily:'Gilam Bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    fontFamily:'Gilam Light',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,

  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(parentes, name, estatura, peso, curp) {
  return { parentes, name, estatura, peso, curp };
}

const rows = [
  createData('', 'Jorge Garcia Perez', 1.15, 20, 'JJJS98524178745'),
  createData('', 'Pancracio Lopez Perez', 1.15, 20, 'JJJS98524178745')

];
export const PaymentsPage = () => {

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    
  return (
    <PolizasLayout title="Método de pago.">
      <Grid container  spacing={1}>
        <Grid item xs={ 12 } sm={ 12 } md={12} lg={4}>
        <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      /><label htmlFor="Tarjeta">Tarjeta Bancaria</label>
        </Grid>
        <Grid item xs={ 12 } sm={ 12 } md={12} lg={4}>
        <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      /><label htmlFor="Tarjeta">Pagos en tiendas de conveniencia.</label>
        </Grid>
        <Grid item xs={ 12 } sm={ 12 } md={12} lg={4}>
        <Radio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
      /><label htmlFor="Tarjeta">Tranferencia interbancaria SPEI.</label>
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
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Juan Delgado', year: 1994 },
  { label: 'Diego Apolonio', year: 1972 },
  { label: 'Pedro Mendez', year: 1974 },
];