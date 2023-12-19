import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice ({
    name: 'payments',
    initialState: {
        status: 'checking',
        products:{},
        listAgente:{},
        pagosInfo:{},
        errorMessage: undefined
    },
    reducers:{
        checkingCredentials: (state) =>{
            state.status ='checking',
            state.products= {},
            state.errorMessage= undefined
        },
        infoProduc:(state, {payload}) =>{
            state.status ='listProduct',
            state.products= payload,
            state.errorMessage= undefined
        },
        infoAgente:(state, {payload}) =>{
            state.status ='listAgente',
            state.listAgente= payload,
            state.errorMessage= undefined
        },
        infoPay:(state, {payload}) =>{
            state.status ='Pagos',
            state.pagosInfo= payload,
            state.errorMessage= undefined
        },

        ErrInfo:(state, {payload}) =>{
           state.status ='ErrlistProduct',
           state.products= {},
           state.errorMessage= payload
        },
      
    }
})

export const {ErrInfo, checkingCredentials, infoProduc, infoAgente, infoPay} = paymentSlice.actions;