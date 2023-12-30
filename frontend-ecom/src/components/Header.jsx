import {NavLink} from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi'
import logo from '../assets/logo.png'
import toast from 'react-hot-toast'
import { BsCart } from "react-icons/bs";
const Header = () => {

  
  return (
    <div className="  h-[12vh] flex items-center  shadow-md justify-around bg-[#a1b0c1] ">
      <div className=' flex '>
     
        <NavLink to={"/"}>
          <img src={logo} alt="logo" width={"90px "} height={"40px"} />
        </NavLink>
      </div>
        <ul  className=" flex gap-5 font-bold  ml-[20%]   " style={{ fontFamily:"Lumanosimo" }}>
          <li>
          <NavLink to="/" className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">home</NavLink>
          </li>
          <li>
          <NavLink to="/about" className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">about</NavLink>
          </li>
          <li>
          <NavLink to="/contact"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">contact</NavLink>
          </li>
          
          <li>
          <NavLink to="/cart"  className=" hover:text-indigo-600    active:text-indigo-600 flex flex-row "><BsCart size={"30px"} /> <sup>1</sup></NavLink>
          </li>
        </ul>
     
    </div>
  )
}

export default Header