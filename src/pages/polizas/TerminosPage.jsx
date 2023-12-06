import { Grid } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import {PrimaryButton} from "../../components/ButtonContent"
import { Link as RouLink} from "react-router-dom"

export const TerminosPage = () => {
  return (
    <PolizasLayout title="Términos y Condiciones.">
        <Grid container  spacing={2}>
            <Grid item xs={ 12} md={12} lg={12}  textAlign='left' >
            <p  className="text-font-book">
            La política de privacidad y los términos y condiciones son acuerdos legalmente vinculantes, pero:
La política de privacidad es legalmente obligatoria en casi todo el mundo. Protege a tus usuarios informándoles de manera legalmente vinculante sobre cómo utilizas sus datos personales de acuerdo con las leyes de privacidad aplicables. Si bien te da cierto margen de maniobra sobre cuestiones como el manejo de solicitudes de “No rastrear”, generalmente tiene como objetivo proteger a los usuarios (encuentra más información en nuestro Resumen de los requisitos legales).
Los términos y condiciones están destinados a proteger a la empresa (a ti). Te ofrecen la posibilidad de definir (dentro de la ley aplicable) las condiciones de uso de tu web o servicio, incluidas las disposiciones sobre derechos de autor o límites de edad y la ley que rige el contrato. Si bien no siempre son obligatorios, como sucede con la política de privacidad, es esencial proteger tus intereses como titular de una empresa.</p>
            </Grid>
        </Grid>
      
        <Grid container spacing={ 5 } sx={{ mt: 5 }}>
        <Grid item xs={ 12 } md={12} lg={12}textAlign='end'>
                <PrimaryButton variant='contained' component={RouLink} to='/membershi'>
                  Acepto
                </PrimaryButton>
            </Grid>
        </Grid>        
    </PolizasLayout>
  )
}