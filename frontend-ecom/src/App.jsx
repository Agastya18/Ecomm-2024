
import {Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './pages/RegisterScreen'
import Home from './pages/HomeScreen'
import PageNot from './pages/PageNotScreen'




function App() {
  

  return (
    
     <>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/register" element={<Register/>} />
        
        <Route path="*" element={<PageNot/>} />
        
      </Routes>
     </>
    
  )
}

export default App