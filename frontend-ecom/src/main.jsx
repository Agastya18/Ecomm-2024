import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header.jsx'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <Header/>
  <Toaster/>
    <App />
    <Footer/>
  </BrowserRouter>
  </React.StrictMode>,
)
