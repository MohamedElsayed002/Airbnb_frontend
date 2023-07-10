import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './contenxt/context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
      <App/>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
