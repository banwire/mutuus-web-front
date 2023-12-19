import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importa tus reducers
import { authSlice, paymentSlice } from "./auth";

const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({
    counter: authSlice.reducer,
    police: paymentSlice.reducer
    // ... otros reducers
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store  = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer:{
//         auth: authSlice.reducer
//     },

// })