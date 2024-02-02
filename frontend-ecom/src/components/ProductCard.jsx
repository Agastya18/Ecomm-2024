
import { Link } from 'react-router-dom'

import { BsCart3 } from "react-icons/bs";
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useState } from 'react';
const ProductCard = ({product}) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const addToCartHandler = () => {
     if (qty > product.countInStock) return
     if (qty <1) return
    dispatch(addToCart({...product, qty}))
   
   }
  
  return (
    <Link to={`/product/${product._id}`}>
      <div className="relative m-2 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-xl hover:-translate-y-1 hover:scale-100  duration-300">
  
    <img
      className="h-60 rounded-t-lg object-cover"
      src={product.images[0]}
      alt="product image"
    />
  
  <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
    Sale
  </span>
  <div className="mt-2 px-5 pb-2">
    
      <h5 className="text-xl font-semibold tracking-tight text-slate-900">
       {product.name}
      </h5>
    
    <div className="mt-2.5 mb-2 flex items-center">
      <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
        {product.rating}
      </span>
     <Rating value={product.rating} text={product.numReviews} />
     
     
     
    </div>
    <div className="flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">${product.price}</span>
        <span className="text-sm text-slate-900 line-through  ml-1">$299</span>
      </p>
      <Link to={'/'}>
      <button
        onClick={addToCartHandler}
        
        className="flex items-center rounded-md bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
       
        <BsCart3 className=" mr-2 h-6 w-6" />
        Add to cart
      </button>
      </Link>
    </div>
  </div>
</div>
    </Link>
  )
}

export default ProductCard