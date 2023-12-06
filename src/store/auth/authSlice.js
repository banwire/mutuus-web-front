import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        status: 'checking',
        user:{},
        code:{},
        altura:{},
        peso:{},
        information:{},
        errorMessage: undefined
    },
    reducers:{
        checkingCredentials: (state) =>{
            state.status ='checking',
            state.user= {},
            state.errorMessage= undefined
        },
        login:(state, {payload}) =>{
            state.status ='authenticated',
            state.user= payload,
            state.errorMessage= undefined
        },

        logout:(state, {payload}) =>{
           state.status ='Notauthenticated',
           state.user= {},
           state.errorMessage= payload
        },
        codeOuth:(state, {payload}) =>{
            state.status ='CodeAuth',
            state.code= payload,
            state.errorMessage= undefined
         },
         codeError:(state, {payload}) =>{
            state.status ='CodeError',
            state.code= {},
            state.errorMessage= payload
         },
         alturas:(state, {payload}) =>{
            state.status ='alturaExito',
            state.altura= payload,
            state.errorMessage= undefined
         },
         pesos:(state,  {payload}) =>{
            state.status ='pesosExito',
            state.peso= payload,
            state.errorMessage= undefined
         },
         informacion:(state,  {payload}) =>{
            state.status ='information',
            state.information= payload,
            state.errorMessage= undefined
         }
    }
})

export const {login, logout, checkingCredentials, codeOuth, codeError, alturas, pesos, informacion} = authSlice.actions;