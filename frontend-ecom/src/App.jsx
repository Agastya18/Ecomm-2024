
import {Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './pages/RegisterScreen'
import Login from './pages/LoginScreen'
import Home from './pages/HomeScreen'
import PageNot from './pages/PageNotScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import PrivateRoute from './components/PrivateRoute'
//import Sidebar from './components/Sidebar'
import ProfileScreen from './pages/ProfileScreen'
import { ShippingScreen } from './pages/ShippingScreen'
import OrderScreen from './pages/OrderScreen'
import PaymentScreen from './pages/PaymentScreen'


function App() {
  

  return (
    
     <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductScreen/>} />
        <Route path='/cart' element={<CartScreen/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/side" element={<ProfileScreen/>} />
        <Route path="/ship" element={<ShippingScreen/>} />
        <Route path="/order" element={<OrderScreen/>} />
        <Route path="/payment" element={<PaymentScreen/>} />

       {/* <Route path='' element={<PrivateRoute/>} >
       <Route path="/ship" element={<ShippingScreen/>} />
        </Route> */}
        

        
        <Route path="*" element={<PageNot/>} />
        
      </Routes>
     </div>
      
     
    
  )
}

export default App