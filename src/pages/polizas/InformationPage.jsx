import { useState, useEffect  } from 'react';
import { Grid, Link } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import Checkbox from '@mui/material/Checkbox';
import { Link as RouLink, useNavigate} from "react-router-dom"
import Autocomplete from '@mui/material/Autocomplete';
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"
import { useAuthStore, useForm } from '../../hooks';
import Filters from '../../helpers/filter'
import Swal from 'sweetalert2';
let  terminos = false;
let msjTerms = '';
const InformationsForm = {
    height_id:'',
    wigth_id:'',
    birth_date: '',
    rfc:'',
    gender:''
  }
  const regex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;

  const formValidations ={
    birth_date:[(value)=> value.length >=1, 'La fecha es obligatorio.'],
    rfc:[(value)=> regex.test(value), 'El RFC es obligatorio.'],
  }

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const InformationPage = () => {
  const history = useNavigate();

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);


  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);

  const [helperText, setHelperText] = useState('');
  const [helperText2, setHelperText2] = useState('');
  const [helperText3, setHelperText3] = useState('');

 

    const {registrationInfo, information, altura, peso} = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

    const {formState, birth_date,rfc,onInputChange,
        isFormValid,birth_dateValid, rfcValid} = useForm(InformationsForm, formValidations)
        const onSubmit = (event) =>{
        
            event.preventDefault();
            setFormSubmitted(true);
          
            const {birth_date, rfc} = formState;
           

            if ( !isFormValid && !selectedOption ){
                setError(true);
                setHelperText('Debes seleccionar una opción.');
               
            } else {
                setError(false);
                setHelperText('');
            } 

            if ( !isFormValid && !selectedOption2 ){
                setError2(true);
                setHelperText2('Debes seleccionar una opción.');
               
            } else {
                setError2(false);
                setHelperText2('');
            } 

            if ( !isFormValid && !selectedOption3 ){
                setError3(true);
                setHelperText3('Debes seleccionar una opción.');
               
            } else {
                setError3(false);
                setHelperText3('');
            } 
          
            if ( !isFormValid && !selectedOption && !selectedOption2  && !selectedOption3 ) return;
            const resultado = {
                height_id: selectedOption2.id,
                wigth_id:selectedOption.id,
                birth_date: birth_date,
                rfc:rfc,
            }


            Swal.fire({
                title: '¿Está seguro de continuar?',
                text: "El peso no es modificable pasando el registro.",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                  registrationInfo(resultado).then(succ=>{
                    history('/membershi');
            })
                }
              })
           
          }

          const handleChange = (event) => {
            if(terminos){
              msjTerms = 'Es necesario que acepte los términos y condiciones para continuar.'
            } 
            terminos = event.target.checked
            console.log(event.target.checked);
          };

          const handleInputChange = (event, value) => {
            if (!value) {
              setError(true);
              setHelperText('Debes seleccionar una opción.');
            } else {
              setError(false);
              setHelperText('');
            }
            setSelectedOption(value);
          };
          const handleInputChange2 = (event, value) => {
            if (!value) {
              setError2(true);
              setHelperText2('Debes seleccionar una opción.');
            } else {
              setError2(false);
              setHelperText2('');
            }
            setSelectedOption2(value);
          };
          const handleInputChange3 = (event, value) => {
            if (!value) {
              setError3(true);
              setHelperText3('Debes seleccionar una opción.');
            } else {
              setError3(false);
              setHelperText3('');
            }
            setSelectedOption3(value);
          };

  return (
    <PolizasLayout title="">
        <form onSubmit={onSubmit}>
        <Grid container  spacing={2}>
            <Grid item xs={ 12 } md={12} lg={12}>
            <p className=''>Hola {information.information === undefined ? '': Filters.capitalize( information.information)  +','} por favor ingresa la siguiente información: </p>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Fecha">Fecha de Nacimiento: *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3} >
            <CssTextField fullWidth  type="date" 
            name='birth_date'
            value={birth_date}
            onChange={onInputChange}
            error={!!birth_dateValid && formSubmitted}
            helperText={ formSubmitted ? birth_dateValid : ''}
            sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                size="small" />
            </Grid>
            
            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="RFC">RFC: *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <CssTextField 
             name='rfc'
             value={rfc}
             onChange={onInputChange}
             error={!!rfcValid && formSubmitted}
             helperText={ formSubmitted ? rfcValid : ''}
            fullWidth label="Rfc" type="text" sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}} size="small"/>
            </Grid>

            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Peso">Peso(Kg.): *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3} >
            <Autocomplete
                options={pesos}
                getOptionLabel={(option) => option.label}
                value={selectedOption}
                onChange={handleInputChange}
                disablePortal
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                size="small"
                id="combo-box-demo"
                
                renderInput={(params) => <CssTextField
                    error={error}
                    helperText={helperText}
                    {...params} label="Peso" InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}} />}
        />
            </Grid>

            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="Estatura">Estatura (M): *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <Autocomplete
             options={alturas}
             getOptionLabel={(option) => option.label}
             value={selectedOption2}
             onChange={handleInputChange2}
          disablePortal
          sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
          size="small"
          id="combo-box-demo"
          renderInput={(params) => <CssTextField
            name='height_id'
            error={error2}
            helperText={helperText2}
            {...params} label="Estatura" InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}} />}
        />
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Peso">Género: *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
        <Autocomplete
          disablePortal
          sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
          size="small"
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          value={selectedOption3}
          onChange={handleInputChange3}
          renderInput={(params) => <CssTextField 
            error={error3}
            helperText={helperText3}
            {...params} label="Género" InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}} />}
        />
        </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }} justifyContent='center'>
            <Checkbox value='terminos' name='terminos'
            onChange={handleChange}
              sx={{
                color:'#AED43A',
                '&.Mui-checked': {
                  color: '#AED43A',
                },
              }}
            {...label} />
            <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Book'}} component={RouLink} to='/terms'>Acepto los terminos y condiciones</Link>
            <Grid item xs={ 12} md={12} lg={12}  textAlign='center' sx={{ mt: 3, color: 'error.main' }} >
            {/* <p className="text-font-book"> {msjTerms}</p> */}
            </Grid>
        </Grid>
        <Grid container spacing={ 2 } sx={{ mt: 0 }}>
        <Grid item xs={ 12 } md={6} lg={6} >
                <SecundaryButton variant='contained' component={RouLink}  to='/login'>
                Regresar
                </SecundaryButton>
            </Grid>
        <Grid item xs={ 12 } md={6} lg={6} textAlign='end'>
                <PrimaryButton variant='contained' type='submit' >
                 Continuar
                </PrimaryButton>
            </Grid>
        </Grid>   
        </form>     
    </PolizasLayout>
  )
  
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Masculino' },
  { label: 'Femenino' }
];

const alturas = [
    {
        id:'5448f4eb-2df6-44c2-8c49-8b4a4d8468f4',
        label: '178.9'
    }
];

const pesos = [
    {
        id:'fe5484e7-a80f-49e5-804a-6a3416a77197',
        label: '78.9'
    }
]
