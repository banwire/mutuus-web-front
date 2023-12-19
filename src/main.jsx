import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { store, persistor } from './store'; // importa tu store y persistor
import {App} from './App.jsx'
import './assets/styles/app.scss'

// import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Provider store={ store}>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
 
    <App />
   
    </PersistGate>
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
