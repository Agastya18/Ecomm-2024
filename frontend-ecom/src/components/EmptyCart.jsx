import React from 'react'
import emptycart from '../assets/emptycart.png'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div className=' h-full w-full '>
        <img src={emptycart} alt="cart" className=' h-[80%] w-[80%] mx-auto' />
        <h1 className='text-4xl text-center font-bold'>
            <Link to={'/'} className=' text-blue-700  underline'> 
        
             Go Back to Home
             </Link>
        </h1>

    </div>
  )
}

export default EmptyCart