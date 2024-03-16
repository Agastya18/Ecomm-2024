import { GoGraph } from "react-icons/go";
import { MdOutlineInventory } from "react-icons/md";
import { VscGraphLeft } from "react-icons/vsc";
import { TbReportMoney } from "react-icons/tb";

const CardData = ({products,users,orders}) => {
  const sumProduct =()=>{
    let sum = 0
    products?.products.forEach(product => {
      sum += product.price
    });
    return sum
  
  }
  const orderRevenue =()=>{
    let sumr = 0
    orders?.orders.forEach(order => {
     if(order.isPaid){
       sumr += order.totalPrice
     }
    });
    return sumr
  
  
  }

console.log(products,users,orders)
  return (
    
       
<>
  <div className="w-full p-1 lg:w-1/3  ">
    <div className=" shadow-lg p-6 bg-white border-b-4 border-blue-400 dark:bg-gray-900 rounded-b-xl ">
      <div className="flex items-center mb-2">
        <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-800">
        <MdOutlineInventory size={'20px'} />
        </span>
        <h3 className="text-sm text-gray-600 dark:text-gray-400">Product Inventory</h3>
        <span className="inline-block px-2 py-1 ml-auto text-xs text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400 bg-gray-50">
        {products?.products.length}
        </span>
      </div>
      <h2 className="mb-2 text-3xl font-bold dark:text-gray-400">
      
           {
              sumProduct()
           }
      </h2>
      <span className="text-xs text-green-500 dark:text-red-300">
        <span className="inline-block mr-2 dark:text-red-300">
        <GoGraph size={'25px'} />
        </span>
        
      </span>
    </div>
  </div>
  <div className="w-full p-1 lg:w-1/3">
    <div className=" shadow-lg p-6 bg-white border-b-4 border-blue-400 dark:bg-gray-900 rounded-b-xl ">
      <div className="flex items-center mb-2">
        <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-800">
        <VscGraphLeft size={'20px'} />
        </span>
        <h3 className="text-sm text-gray-600 dark:text-gray-400">Orders</h3>
        <span className="inline-block px-2 py-1 ml-auto text-xs text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400 bg-gray-50">
         {orders?.orders?.length}
        </span>
      </div>
      <h2 className="mb-2 text-3xl font-bold dark:text-gray-400">{orders?.totalAmount }</h2>
      <span className="text-xs text-green-500 dark:text-red-300">
        <span className="inline-block mr-2 dark:text-red-300">
        <GoGraph size={'25px'} />
        </span>
        
      </span>
    </div>
  </div>
  <div className="w-full p-1 lg:w-1/3">
    <div className=" shadow-lg p-6 bg-white border-b-4 border-blue-400 dark:bg-gray-900 rounded-b-xl ">
      <div className="flex items-center mb-2">
        <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-800">
        <TbReportMoney size={'20px'} />
        </span>
        <h3 className="text-sm text-gray-600 dark:text-gray-400">Revenue</h3>
        <span className="inline-block px-2 py-1 ml-auto text-xs text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400 bg-gray-50">
         profitable
        </span>
      </div>
      <h2 className="mb-2 text-3xl font-bold dark:text-gray-400">
     {
      orderRevenue()
     }
      </h2>
      <span className="text-xs text-green-500 dark:text-red-300">
        <span className="inline-block mr-2 dark:text-red-300">
        <GoGraph size={'25px'} />
        </span>
        
      </span>
    </div>
  </div>
  
  
</>


   


  )
}

export default CardData