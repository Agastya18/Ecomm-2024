import Layout from "../components/Layout"
import logo from "./../assets/ship2.jpg"
import Progress from "../components/Progress"
import { Link , useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
 import { saveShippingAddress,savePaymentMethod } from "../redux/slices/cartSlice"

export const ShippingScreen = () => {
  
  const cart = useSelector((state) => state.cart);
   const { shippingAddress } = cart;
   console.log(shippingAddress)
 
  const [fullName, setFullName ] = useState( shippingAddress.fullName || "");
  const [address, setAddress] = useState( shippingAddress.address ||"");
  const [city, setCity] = useState( shippingAddress.city ||"");
  const [province, setProvince] = useState( shippingAddress.province || "");
  const [country, setCountry] = useState( shippingAddress.country || "");
  const [postalCode, setPostalCode] = useState( shippingAddress.postalCode || "");
  
  const [payment, setPayment] = useState("cod")
 //const [paymentOnline, setPaymentOnline] = useState("online")
 console.log(payment)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler =(e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fullName,address,city,province,country,postalCode}))
    dispatch(savePaymentMethod(payment))
    navigate('/order');
  console.log(shippingAddress)
  
  };

 
  
 
  return (
   <Layout title={"shipping"}>
      <Progress/>
     <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
     
      <div className="container max-w-screen-lg mx-auto mb-52">
      
        <div>
          <h1 className="font-bold text-4xl  bg-slate-100 rounded-md">Shipping Form</h1>
          
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <img src={logo} alt="truck" className=" mt-20  " />
              <div className="lg:col-span-2">
                <div   className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                     
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                     value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                     
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                 
                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                      <button
                        tabIndex={-1}
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </button>
                      <button
                        tabIndex={-1}
                        htmlFor="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                      />
                      <button
                        tabIndex={-1}
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </button>
                      <button
                        tabIndex={-1}
                        htmlFor="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Pincode</label>
                    <input
                      type="text"
                      name="zipcode"
                     
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p >Payment Method</p>
                    <div className=" flex space-x-4 mt-3 bg-slate-100" >
                    <label htmlFor="cod" >Cash on delivery</label>
                      <input
                      
                          type='radio'
                          id="cod"
                          name="paymentMethod"
                          
                           value={payment}
                        
                       
                        onChange={() => setPayment("cod")}
                      />
                       <label htmlFor="online">Online</label>
                      <input
                      
                          type='radio'
                          id="online"
                          name="paymentMethod"
                         
                           value={payment}
                        
                       
                        onChange={() => setPayment("online")}
                      />
                     
                      
                    </div>
                  </div>
                  
                 
                 
                 
                  <div className="md:col-span-5 text-right">
                 
                    <div className="inline-flex items-end">
                   
                      <Link >
                      <button onClick={submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Continue to Payment
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
   </Layout>
  
  )
}
