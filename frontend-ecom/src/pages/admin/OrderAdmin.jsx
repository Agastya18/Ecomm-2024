import AdminLayout from '@/components/adminComp/AdminLayout'
import { useState } from 'react';

import { LuEye } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Loader from '@/components/Loader';
import { useGetAllOrdersQuery,useDeleteOrderMutation,useUpdateOrderStatusMutation } from '@/redux/slices/ordersApiSlice';
import toast from 'react-hot-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



const OrderAdmin = () => {

  const [orderStatus, setorderStatus]=useState()
                   
  const { data, error, isLoading,refetch } = useGetAllOrdersQuery();
const [deleteOrder, { isLoading: deleteLoading }] = useDeleteOrderMutation();
 const [updateOrderStatus, { isLoading: updateStatus}] = useUpdateOrderStatusMutation();



 

  console.log(data);
  const handleUpdate = async(id)=>{
   
      try {
       await updateOrderStatus({id, status:orderStatus})
     refetch();
       toast.success("Order updated successfully")
       
      } catch (error) {
       toast.error('error')
      }
     
  }
  const handleDelete = async(id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
       await deleteOrder(id)
     refetch();
       toast.success("Order deleted successfully")
       
      } catch (error) {
       toast.error('error')
      }
     }
   
  }
  return (
    <AdminLayout>
        <div>
          <h1 className=' text-center text-4xl mt-8 mb-12'>All Orders</h1>
        <section className="  items-center lg:flex bg-white  font-poppins  ">
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div className="pt-4 rounded shadow-lg  dark:bg-gray-900  ">
      <div className=" bg-slate-100 flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
        <h2 className="mb-4 text-xl font-bold md:mb-0  ">
          List of Order
        </h2>
        <div className="flex px-6 py-2 mb-4    rounded-md md:mb-0 shadow-md font-light">
         
          Total amount: <span className=' ml-2 text-amber-900  font-semibold'>{data?.totalAmount}</span>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full table-auto ">
          <thead className=' border-b-2'>
            <tr className="  text-sm text-left text-gray-500 dark:text-gray-400">
              <th className="flex items-center px-6 pb-3 font-medium dark:text-gray-400">
                
                <span>Order Id</span>
              </th>
              <th className="px-6 pb-3 font-medium ">Total Amount</th>
              <th className="px-6 pb-3 font-medium">Created </th>
              <th className="px-6 pb-3 font-medium">isPaid </th>
              <th className="px-6 pb-3 font-medium">Status </th>
              <th className="px-6 pb-3 font-medium"> Action</th>
            </tr>
          </thead>
          <tbody >
            {
              isLoading ? <Loader/> : error ? <h1>{error}</h1> : data.orders.map((order, index) => (
                <tr key={index} className=" border-b hover:bg-gray-100 text-sm  dark:text-gray-400 dark:bg-gray-800">
              <td className="flex items-center px-6 py-5 font-medium">
               
                <p className="">{order._id}</p>
              </td>
              <td className="px-6 py-5 font-medium ">{order.totalPrice}</td>
              <td className="px-6 py-5 font-medium ">{order.createdAt.substring(0,10)}</td>
              <td className="px-6 py-5 font-medium">
                <span className="text-blue-400 dark:text-blue-300">
                 {
                  order.paymentResult.status ==='succeeded' ? <span className='inline-block px-2 py-1 text-center text-green-700 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200'>{order.paymentResult.status}</span> : <span className='inline-block px-2 py-1 text-center  text-blue-700  bg-blue-100 rounded-full '>{order.paymentResult.status}</span>
                 }
                </span>
              </td>
              <td className="px-6 py-5 font-medium">
                <span className="text-blue-400 dark:text-blue-300">
                {
                  order.orderStatus ==='Delivered' ? <span className='inline-block px-2 py-1 text-center text-green-700 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200'>{order.orderStatus}</span> : order.orderStatus ==='Shipped' ? <span className='inline-block px-2 py-1 text-center  text-yellow-700  bg-yellow-100 rounded-full  '>{order.orderStatus}</span> : <span className='inline-block px-2 py-1 text-center  text-blue-700  bg-blue-100 rounded-full '>{order.orderStatus}</span> 
                }
                </span>
              </td>
              <td className="flex items-center px-6 py-5 ">
              {/* <Link to={`/admin/process-order/${order._id}`} >
              
              </Link> */}
              
              <Popover>
                
                <PopoverTrigger>
                <button className=' '
                  
                >
                <button
  
  className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300 mt-1"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="w-4 h-4 mr-3 bi bi-pencil-square"
    viewBox="0 0 16 16"
  >
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
    <path
      fillRule="evenodd"
      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
    />
  </svg>
</button>

                </button>
                 
                </PopoverTrigger>
                <PopoverContent className="w-80 h-auto mr-7 md:mr-16" side="top" >
                  <div className=' '>
                  <form
                  className=""
                 
                >
                  <div className='flex'><h1 className= "ml-14 text-xl">Role</h1>
                 </div>
                  <div className=' mt-6'>
                  
                  <select onChange={(e)=>setorderStatus(e.target.value)}  className="px-3  border rounded-md focus:outline-none focus:border-blue-500">
                      <option value="">Choose Role...</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>

                  <button
                  onClick={()=>handleUpdate(order._id)}
                 
                   className=' shadow-md bg-blue-300 p-1 px-2  rounded-sm  ml-[65%]'
                    type="submit"
                    
                  >
                    Process
                  </button>
                </form>
                  </div>
                </PopoverContent>
                </Popover>
                
                <button onClick={()=>handleDelete(order._id)}
                
                  className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400 ml-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
                <Link to={`/order/${order._id}`}  className='   ml-3 shadow-md bg-stone-100'>
                <LuEye size={'23px'}  />
                </Link>
              </td>
            </tr>
              ))
                
            }
            
           
          </tbody>
        </table>
        <div className="flex justify-end pt-4 mt-4 border-t ">
          <nav aria-label="page-navigation">
            <ul className="flex list-style-none">
              <li className="page-item disabled ">
                <a
                  href="#"
                  className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600"
                >
                  Previous
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-600"
                >
                  1
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                >
                  2
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                >
                  3
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    </AdminLayout>
  )
}

export default OrderAdmin