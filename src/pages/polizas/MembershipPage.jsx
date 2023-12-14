import {  Grid } from "@mui/material"
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
import { Link as RouLink} from "react-router-dom"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#183B91',
    color: '#AED43A',
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
export const MembershiPage = () => {
  return (
    <PolizasLayout title="Por favor ingresa la siguiente información">
      <Grid container  spacing={1}>
        <Grid item xs={ 12 } md={4} lg={3}>
          <p>Clave del agente: </p>
        </Grid>
        <Grid item xs={ 12 } md={2} lg={2}>
          <CssTextField label="Agente" sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}   type="text" fullWidth size="small"/>
        </Grid>
        <Grid item xs={ 12 } md={6} lg={7}>
        <Autocomplete
          disablePortal
          sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                
          size="small"
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <CssTextField {...params}   InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}  label="Nombre" />}
        />
        </Grid>

        <Grid item xs={ 12 } md={6} lg={3}>
          <p>Producto: *</p>
        </Grid>
        <Grid item xs={ 12 } md={12} lg={9}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female"  control={<Radio  />} /> <label className="check-member-produc" htmlFor="Uno">Uno</label>
              <FormControlLabel value="male" control={<Radio />} /> <label className="check-member-produc" htmlFor="Dos">Dos</label>
              <FormControlLabel value="other" control={<Radio />} /> <label className="check-member-produc" htmlFor="Cinco">Cinco</label>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={ 12 } md={6} lg={3}>
          <p>Tipo de Pago: *</p>
        </Grid>
        <Grid item xs={ 12 } md={6} lg={9}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} /> <label className="check-member-pago" htmlFor="Anual">Anual</label>
              <FormControlLabel value="male" control={<Radio />} /> <label className="check-member-pago" htmlFor="MSI">12 MSI</label>
              <FormControlLabel value="other" control={<Radio />}/> <label className="check-member-pago" htmlFor="Mensual">Mensual</label>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 2 }}>
      <Grid item xs={ 12 } md={12} lg={12}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Parentesco</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Estatura</StyledTableCell>
            <StyledTableCell>Peso</StyledTableCell>
            <StyledTableCell>CURP</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio size="small" />}/><label className="check-member-tabla" htmlFor="Hijo">Hijo</label>
              <FormControlLabel value="male" control={<Radio size="small" />}/><label className="check-member-tabla" htmlFor="Otro">Otro</label>
            </RadioGroup>
          </FormControl>
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.estatura}</StyledTableCell>
              <StyledTableCell>{row.peso}</StyledTableCell>
              <StyledTableCell>{row.curp}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
      </Grid>
     


      <Grid container sx={{ mt: 1 }}>
        <Grid item xs={ 12 } md={8} lg={8} textAlign='end'>
            <p className="text-font-book">Total a pagar: $14,500.00</p>
            <p className="text-font-book">Póliza 1M         $12,000</p>
            <p className="text-font-book">Menor adicional:  $2,000</p>
        </Grid>
        
      </Grid>
      <Grid container spacing={ 1 } sx={{ mt: 0 }} textAlign='center'>
        <Grid item xs={ 6 } md={6} lg={6} >
                <SecundaryButton variant='contained' component={RouLink}  to='/information'>
                 Regresar
                </SecundaryButton>
            </Grid>
        <Grid item xs={ 6 } md={6} lg={6}>
                <PrimaryButton variant='contained' component={RouLink}  to='/membershi'>
                 Continuar
                </PrimaryButton>
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