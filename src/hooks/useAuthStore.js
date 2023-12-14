import { useDispatch, useSelector } from "react-redux"
import API from "../api/globalAPI";
import { checkingCredentials, login, logout, codeOuth, codeError, alturas, pesos, informacion } from "../store";

export const useAuthStore = () =>{

    const {status, user, errorMessage, code, altura, peso, information} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const startLogin = async(succ) =>{
        dispatch(checkingCredentials());
        try{
            const {data} = await API.post('/login', succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6'
                }
            })
            getInformation(data.login.access_token);
            WeightList(data.login.access_token)
            HeightList(data.login.access_token)
            dispatch(login({token: data.login.access_token}))
            return {
                ok: 'exito',
                message: 'Exito usuario',
            }
        } catch(error){
            dispatch(logout('Error al iniciar sesión.'))
            return {
                ok: 'error',
                message: '¡Error al iniciar sesión!',
            }
          
        }


    }

    const startRegister = async(succ ) =>{
        dispatch(checkingCredentials());
        try{
            const {data, status} = await API.post('/customer/registration', succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6'
                }
            })
            dispatch(login({uid: data.register_step_1.customer_email}))
            return {
                ok: 'exito',
                message: data.register_step_1.customer_email,
            }
        } catch(error){
            dispatch(logout('¡Ha ocurrido un error al registrarse!'))
            return {
                ok: 'error',
                message: '¡Ha ocurrido un error al registrarse!',
            }
        }


    }
    const startCode = async(succ ) =>{
        try{
            const {data} = await API.post('/customer/validation', succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6'
                }
            })
          
           
            dispatch(codeOuth({token: data.validation.access_token}))
            return {
                ok: 'exito',
                message: data.validation.status,
            }
        } catch(error){
            dispatch(codeError('Código incorrector favor de Verificar.'))
        }
    }

    const getInformation = async(succ ) =>{
        // dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/customer/information',
            {
                headers:{
                    Authorization: `Bearer ${succ}`
                }
            })
            let info = {
                name:data.customer[0].person_info.first_name,
                idU: data.customer[0].id
            }
          
            dispatch(informacion({information: info}))
        } catch(error){
            console.log(error);
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }

    const WeightList = async(succ ) =>{
        // dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/weight',
            {
                headers:{
                    Authorization: `Bearer ${succ}`
                }
            })
            dispatch(pesos({pesos: data.weight}))
        } catch(error){
            console.log(error);
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }

    const HeightList = async(succ ) =>{
        // dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/height',
            {
                headers:{
                    Authorization: `Bearer ${succ}`
                }
            })
            dispatch(alturas({altura: data.height}))
        } catch(error){
            console.log(error);
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }

    const registrationInfo = async(succ ) =>{
        console.log('info: ',information);
        try{
            
            const {data} = await API.put('/customer/registration-info/'+information.information.idU,succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6',
                    Authorization: `Bearer ${code.token}`
                }
            })
            dispatch(alturas({informacionPersonal: data}))
            return {
                ok:'exito',
                respuesta: data
            }
        } catch(error){
            console.log(error);
            let {data} = error.response
            console.log('data: ', data);
            return {
                ok:'error',
                respuesta: data.error
            }
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }



    return {
        //* Propiedades...
        status,
        user, 
        errorMessage,
        code,
        altura,
        peso,
        information,


        //* Métodos.....
        startLogin,
        startRegister,
        startCode,
        WeightList,
        HeightList,
        registrationInfo,

    }

}