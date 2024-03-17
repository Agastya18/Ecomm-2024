
import { MdDeleteForever} from "react-icons/md";
import Layout from '../components/Layout';
import Progress from '../components/Progress';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from "../components/EmptyCart";
//import { useState } from "react";
import { addToCart,removeFromCart } from "../redux/slices/cartSlice";
const CartScreen = () => {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  //const [newqty, setNewqty] = useState(1)
  const  cart  = useSelector((state)=>state.cart);
  // const { userInfo } = useSelector(state => state.userLogin);
  const {cartItems}= cart

  const increaseQuantity = (item,qty,stock) => {
    const newQty = qty + 1;
    if (qty >= stock) {
      
        return;
    }
    qty=newQty
    dispatch(addToCart({...item,  qty}))
  }
  const decreaseQuantity = (item,qty) => {
    const newQty = qty - 1;
    if (qty <= 1) return;
    qty=newQty
    dispatch(addToCart({...item,  qty}))
  }
  const removeFromCartHandler = async(id) => {
    dispatch(removeFromCart(id))

  }

  return (
   <Layout title={"Cart"}>
   {
    cartItems.length===0 ? (
      <EmptyCart/>
    ):(
      <>
      <Progress/>
   
   <div className="h-full  pt-8">
  <h1 className="mb-12 text-center text-4xl font-bold w-[75%] mx-auto  font-Oswald">Your Cart</h1>
  <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0 bg-gray-100 p-3">
    <div className="rounded-lg md:w-2/3">
     
      {
         cartItems?.map((item)=>(
          <div className="justify-between mb-2 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={item._id}>
        <Link to={`/product/${item._id}`}>
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full rounded-lg sm:w-40"
        />
        </Link>
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
              {item.name}
            </h2>
            <p className="mt-4 text-sm text-gray-700 font-semibold">{item.brand}</p>
            <p className="mt-2 text-sm text-gray-700 font-light">Product id: {item._id}</p>
          </div>
          <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>decreaseQuantity(item,item.qty)} >
                {" "}
                -{" "}
              </button>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                readOnly
                value={item.qty}
                
               
              />
              <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>increaseQuantity(item,item.qty,item.countInStock)}  >
                {" "}
                +{" "}
              </button>
            </div>
            <div className="flex items-center space-x-4">
            <p className="text-sm mr-4  mt-2 font-semibold">${item.price}</p>
            X{item.qty}
              <button onClick={()=>removeFromCartHandler(item._id)}>
              <MdDeleteForever size={"28px"} className=' mt-2' />
              </button>
              
            </div>
          </div>
        </div>
      </div>
        ))
      }
      
    </div>
    
    {/* Sub total */}
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
    <h1 className="mb-4 text-center text-xl font-bold   font-mono">Order Total</h1>
    <hr className="my-4" />
    <div className="mb-5 flex justify-between ">
        <p className="text-gray-700">Total Product</p>
        <p className="text-gray-700">({cartItems.reduce((acc, item) => acc + item.qty, 0)} item)</p>
      </div>
      <div className="mb-5 flex justify-between ">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className=" text-yellow-500">{
          cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) > 200 ? "Free" : "$10"
        
        }</p>
      </div>

      <div className="py-6">
          <label  className="font-semibold inline-block mb-1 text-sm uppercase">Promo-Coupon Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>










      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold text-green-600">
            {
              cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2) > 200 ? 
              cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2) :
              (cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) + 10).toFixed(2)
            }
          </p>
          
        </div>
      </div>
      <Link to={"/ship"}>
      <button className="mt-5 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
      </Link>
 
      <Link to={'/'} className="flex font-semibold text-indigo-600 text-sm mt-5 ml-2">
<svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
</svg>
Continue Shopping
</Link>
    </div>
  </div>
</div>
      </>
    )
   }
   </Layout>
  
  )
}

export default CartScreen