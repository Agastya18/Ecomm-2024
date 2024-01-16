import {NavLink} from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi'
import logo from '../assets/logo3.svg'
import toast from 'react-hot-toast'
import { BsCart } from "react-icons/bs";
const Header = () => {

  
  return (
    <nav className="  flex flex-wrap p-4 flex-col md:flex-row items-center shadow bg-slate-200 ">
  <a className="flex title-font font-medium items-center text-gray-900  md:mb-0 flex-col ml-8">
    <img src={logo} className=' w-14 h-14 ml-2'/>
    <div className=' text-sm  font-light '>Kharido.com</div>
  </a>
  <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center">
    <a className="mr-5">First Link</a>
    <a className="mr-5">Second Link</a>
    <a className="mr-5">search bar</a>
   
  </div>
  <div className='flex'>
  <BsCart size={"25px"} className=' mr-5'/>
  <span className='mr-8  z-10'>(0)</span>
  </div>

  
  <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">
    Profile
  </button>
</nav>


  )
}

export default Header