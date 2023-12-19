import { useDispatch, useSelector } from "react-redux"
import API from "../api/globalAPI";
import { ErrInfo, checkingCredentials, infoProduc, infoAgente } from "../store/auth/payments";
export const usePaymentStore = () =>{

    const {user} = useSelector(state => state.counter);
   
    const dispatch = useDispatch()

    const getProducts = async( ) =>{
        dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/product',
            {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            })
            dispatch(infoProduc({data}))
        } catch(error){
            console.log(error);
            dispatch(ErrInfo('Código incorrector favor de Verificar.'))
        }


    }
    const getListAgente = async( ) =>{
        dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/agent?name=','pedro',
            {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            })
            dispatch(infoAgente({data}))
        } catch(error){
            console.log(error);
            dispatch(ErrInfo('Código incorrector favor de Verificar.'))
        }


    }

    


    return {
        //* Propiedades...
        // status,
        // user, 
        // errorMessage,
        // code,
        // altura,
        // peso,
        // information,


        //* Métodos.....
        getProducts,
        getListAgente
    }

}