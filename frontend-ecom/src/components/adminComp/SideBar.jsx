import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboardCustomize } from "react-icons/md";
import logo from '../../assets/logo3.svg'
import { FaProductHunt } from "react-icons/fa6";
import { RiCoupon3Fill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const route =[
  {
    name: 'Dashboard',
    path: '/dash',
    icon: <MdDashboardCustomize size={'25px'} />
  },
  {
    name: 'Product',
    path: '/admin/product',
    icon: <FaProductHunt size={'25px'} />
  },
  // {
  //   name: 'Category',
  //   path: '/category'
  // },
  {
    name: 'Order',
    path: '/admin/order',
    icon: <HiShoppingCart size={'25px'} />
  },
  {
    name: 'Profile',
    path: '/user',
    icon: <FaUserCircle size={'25px'}  />
  },
  {
    name: 'Coupon',
    path: '/coupon',
    icon: <RiCoupon3Fill size={'25px'} />
  },
  
]
const Sidebar = () => {
  const location = useLocation()
  
  return (
    <div className=' space-y-3 py-4 flex flex-col h-full text-black'>
      <div className=' px-3 py-2 flex-1'>
        <Link to={'/dash'} className=' flex items-center pl-3 mb-4'>
        <div className=' relative w-20 h-20 w- mr-4'>
        <img src={logo} alt="dash" />
        </div>
        <h2 className=' font-bold'>Dashboard</h2>
       
          
        </Link>
        <div className=' space-y-2 mt-16'>
          {
            route.map((item, index) => (
              <Link to={item.path} key={index} className=' rounded-md hover:bg-slate-200 flex items-center pl-3 mb-4'>
                <div className=' w-10 h-10 mr-4 flex items-center'>
                  {item.icon}
                </div>
                <h2 className=''>{item.name}</h2>
              </Link>
            ))
          } 
          </div>
      </div>
    </div>
  )
}

export default Sidebar