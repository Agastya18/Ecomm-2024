import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { useGetMyOrdersQuery } from '../redux/slices/ordersApiSlice';
import { FaEye } from "react-icons/fa";
import Layout from '../components/Layout';
const MyOrder = () => {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();
  
  console.log("my orders",orders);
  return (
    <Layout>
     
      <section className="  items-center lg:flex bg-gray-50 lg:h-screen font-poppins   ">
  <div className=" md:mb-40 justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 bg-gray-200">
    {
      isLoading ? (<Loader/>) :error ? ( <div>error</div> ):(<div className="overflow-x-auto bg-white rounded shadow ">
      <div className="">
        <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300 ">
          My orders
        </h2>
        <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b ">
          <div className="flex items-center pl-3">
            <p className="text-xs text-gray-600">Email:</p>
          
            <p className="text-xs text-gray-600"> agastya@gmail.com</p>
          </div>

          



        </div>
        <table className="w-full table-auto">
          <thead className="bg-gray-100 ">
            <tr className="text-xs text-left text-gray-500 border-b border-gray-200 ">
              <th className="flex items-center py-3  pl-16 font-medium ">
               
                <span>Order Id.</span>
              </th>
              <th className="px-6 py-3 font-medium ">
                Amount
              </th>
              <th className="px-6 py-3 font-medium ">
               Date Created
              </th>
              <th className="px-6 py-3 font-medium">
                Delivery Status
              </th>
             
              <th className="px-6 py-3 font-medium ">
                Payment Status
              </th>
              <th className="px-6 py-3 font-medium ">
                Action
              </th>
            </tr>
          </thead>
          <tbody >
            {
               orders.map((order)=>(
                <tr key={order._id} className="border-b border-gray-200 hover:bg-slate-50 ">
              <td className="flex text-red-700 items-center px-6 py-3 text-sm font-medium">
              {/* <input className="mr-4" type="checkbox" name="" id="" /> */}
                <p className="">{order._id}</p>
              </td>
              <td className="px-6 text-sm font-medium ">
              ${order.totalPrice}
              </td>
              <td className="px-6 text-sm font-medium ">
                {order.createdAt.substring(0,10)}
              </td>
              <td className="px-6 text-sm  ">
              <span className="inline-block px-2 py-1 text-orange-700 bg-orange-100 rounded-md ">
                 {order.orderStatus
}
                </span>
              </td>
             
              <td className="px-6 text-sm">
                <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md ">
                 {order.
paymentResult?.status}
                </span>
              </td>
              <td className="px-6  ">
             <Link to={`/order/${order._id}`}>
             <button className="p-1 border-2 rounded-md shadow-sm hover:bg-emerald-300">
             <FaEye />
             </button>
             </Link>
              </td>
            </tr>
               ))
            }
           
            
            
          </tbody>
        </table>
        
      </div>
    </div>)
    }
  </div>
</section>
    </Layout>

  )
}

export default MyOrder