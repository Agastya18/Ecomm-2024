import AdminLayout from '@/components/adminComp/AdminLayout'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate,useParams } from 'react-router-dom';
import { useGetOrderByIdQuery, useUpdateOrderStatusMutation } from '@/redux/slices/ordersApiSlice';
import { useDispatch, useSelector } from 'react-redux';


const OrderProcess = () => {
  const { id: orderId } = useParams();
  const { data: order, isLoading,error } = useGetOrderByIdQuery(orderId);
  console.log(order)
    const navigate = useNavigate();
    const [status, setStatus] = useState();
    console.log(status);
    const [updateOrderStatus, { isLoading: updateStatus}] = useUpdateOrderStatusMutation();
    const submitHandler = async (e) => {
      e.preventDefault();


      try {
        await updateOrderStatus({id:orderId,status})
        
        toast.success("Order updated successfully")
        navigate('/admin/order')
        
      } catch (error) {
        toast.error('error')
        
      }
        
    }
  return (
    <AdminLayout>
        <div
  className="relative flex items-center justify-center w-full h-screen bg-center bg-cover"
  
>
 
  <form
   
    className="z-10 p-6 mx-2 rounded-md lg:mx-0 dark:bg-gray-800 bg-stone-100"
  >
    <div className="mb-6">
      <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-400">
        Order Satuts{" "}
      </h2>
    </div>
    <div className="flex flex-wrap  mb-40 ml-4">
    <select onChange={(e)=>setStatus(e.target.value)}    className="px-3 w-full  border rounded-md focus:outline-none focus:border-blue-500">
                      <option value="">Choose Role...</option>
                      <option value="Shipped">Shipped</option>

                      <option value="Delivered">Delivered</option>
                    </select>
      
      
    </div>
    
    
    <button onClick={submitHandler} className="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-700">
      Process
    </button>
  </form>
</div>

    </AdminLayout>
  )
}

export default OrderProcess