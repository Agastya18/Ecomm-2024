import { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import MobileSidebar from '../../components/adminComp/MobileSidebar'
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector,useDispatch} from 'react-redux';
import { logoutFront } from '@/redux/slices/authSlice';
import { useLogoutMutation } from '@/redux/slices/userApiSlice';
import toast from 'react-hot-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const AdminNav = () => {
  const {userInfo}=useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const [logoutApi] = useLogoutMutation()
  const navigate = useNavigate()
  const logoutHandler = async() => {
      
    try {
      console.log('logout')
       await logoutApi()
     
      dispatch(logoutFront())
      
      toast.success('Logout successfully')
      console.log('/login')
      navigate('/login')
     
     
      
    } catch (error) {
      
      toast.error(error.message)
    }
  }
  return (
    <div className=' flex items-center p-4  bg-gray-100'>
        
       
       <MobileSidebar/>
      



       <div className=" flex w-full justify-end ">
        {/* <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
        
        
        <li className="hover:text-blue-200 ">User</li>
        <li className="hover:text-blue-200 ">Setting</li>

        </ul> */}
       <div>
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <img src={userInfo?.user.avatar} alt="img"  className=' rounded-full w-14 h-14 object-cover'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup >
         <Link to={'/profile'}>
         <DropdownMenuItem >
         
         <MdOutlineAccountCircle  className="mr-2 h-5 w-5" />
         <span>My profile</span>
         
         </DropdownMenuItem>
         </Link>
          <Link to={'/'}>
          <DropdownMenuItem >
          <IoArrowBackCircleOutline className="mr-2 h-5 w-5"/>
          <span> To website</span>
          </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <button className=' w-full' onClick={logoutHandler}>
          <DropdownMenuItem >
          <HiOutlineLogout className="mr-2 h-5 w-5" />
          <span>Logout</span>
          </DropdownMenuItem>
          </button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
       </div>

       </div>
    </div>
  )
}

export default AdminNav