import CardData from "@/components/adminComp/CardData"
import { useGetAllOrdersQuery } from "@/redux/slices/ordersApiSlice"
import { useGetAllUsersQuery } from "@/redux/slices/userApiSlice"
import { useGetProductQuery } from "@/redux/slices/ProductApiSlice"
import { FaRegUser } from "react-icons/fa6";
import { RiCoupon4Line } from "react-icons/ri";
import { useSelector} from 'react-redux';
import AdminLayout from "../../components/adminComp/AdminLayout"
export const Dashboard = () => {
  const { data:users } = useGetAllUsersQuery()
  const { data:orders } = useGetAllOrdersQuery()
  const { data:products } = useGetProductQuery()
  const {userInfo}=useSelector(state=>state.auth)
 

  return (
    <AdminLayout>
      <div className=" mb-8 space-y-4">
      <div className=" mt-3">
        <h1 className=" text-2xl font-bold md:text-4xl text-center font-mono">Dashboard</h1>
      </div>
      <div className="md:flex ">
      <CardData users={users} products={products} orders={orders}/>
      
      </div>
      <div className="md:flex ">
      <div className="  md:w-[50%] md:mr-4 md:ml-2  flex items-center justify-between p-4 border-l-2 border-blue-400 rounded-md shadow dark:border-blue-400 dark:bg-gray-900 bg-gray-50">
  <div>
    <p className="mb-2 text-gray-700 dark:text-gray-400">Users</p>
    <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-400">
     {users?.users?.length}
    </h2>
  </div>
  <div>
    <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-700">
    <FaRegUser size={'20px'} />
    </span>
  </div>
</div>
  <div className="  md:w-[50%] md:mr-4 md:ml-2  flex items-center justify-between p-4 border-l-2 border-blue-400 rounded-md shadow dark:border-blue-400 dark:bg-gray-900 bg-gray-50">
  <div>
    <p className="mb-2 text-gray-700 dark:text-gray-400">Coupons</p>
    <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-400">
      $1,25,220
    </h2>
  </div>
  <div>
    <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-700">
    <RiCoupon4Line size={'20px'} />
    </span>
  </div>
</div>

      </div>
      <div className="  h-40 flex justify-center items-center text-4xl font-light">
         welcome! {userInfo?.user.name}
      </div>
    




      </div>
    </AdminLayout>
    
  )
}
