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
  <div className=" md:mb-40 justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 bg-gray-400">
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

          <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0 ">
            <input
              type="text"
              className="w-full pr-4 text-sm text-gray-700 bg-white "
              placeholder="search..."
            />
            <button className="flex items-center text-gray-700   hover:text-blue-600">
              <span className="mr-2 text-xs ">Go</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
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
        <div className="flex flex-wrap items-center justify-between px-6 py-3">
          <p className="mb-4 text-xs lg:mb-0 ">
            Showing 1 to 10 of 13 entries
          </p>
          <nav aria-label="page-navigation ">
            <ul className="flex mb-4 list-style-none lg:mb-0">
              <li className="page-item disabled ">
                <a
                  href="#"
                  className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md pointer-events-none  hover:text-gray-100 hover:bg-blue-600"
                >
                  Previous
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1 mr-1 text-xs text-gray-100 transition-all duration-300 bg-blue-600 rounded-md hover:text-blue-700 hover:bg-blue-200 "
                >
                  1
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md  hover:bg-blue-100 "
                >
                  2
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md  hover:bg-blue-100 "
                >
                  3
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1 text-xs text-gray-700 transition-all duration-300 rounded-md  hover:bg-blue-100 "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>)
    }
  </div>
</section>
    </Layout>

  )
}

export default MyOrder