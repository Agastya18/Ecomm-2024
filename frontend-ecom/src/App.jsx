
import {Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './pages/RegisterScreen'
import Login from './pages/LoginScreen'
import Home from './pages/HomeScreen'
import PageNot from './pages/PageNotScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'

function App() {
  

  return (
    
     <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductScreen/>} />
        <Route path='/cart' element={<CartScreen/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        
        <Route path="*" element={<PageNot/>} />
        
      </Routes>
     </div>
      
     
    
  )
}

export default App