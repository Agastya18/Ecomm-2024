import {Link, useNavigate, useParams} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import logo from '../assets/logo3.svg'
import toast from 'react-hot-toast'

import { useSelector,useDispatch } from 'react-redux';
import {logoutFront} from '../redux/slices/authSlice';
import { useLogoutMutation } from '../redux/slices/userApiSlice';
import { useState } from 'react';
const Header = () => {
  const {keyword:urlKeyword} = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')
  const {userInfo}=useSelector(state=>state.auth)
  const {cartItems}=useSelector(state=>state.cart)
  console.log("this is cart items",cartItems)
    //console.log(userInfo?.loggedInUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [logoutApi] = useLogoutMutation()

    const logoutHandler = async() => {
      
      try {
        console.log('logout')
         await logoutApi()
        dispatch(logoutFront())
        toast.success('Logout successfully')
        navigate('/login')
        
      } catch (error) {
        
        toast.error(error.message)
      }
    }
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(keyword){
     
      navigate(`/search/${keyword.trim()}`)
      setKeyword('')
    }else{
      navigate('/')
    }

  }
  return (

<>
  {/* component */}
  <header className=" bg-slate-50   top-0 w-full">
    <div>
    <div className="container mx-auto px-4 py-8 flex items-center">
      {/* logo */}
      <Link to={'/'} className="mr-auto md:w-48">
        <img
          className="h-16 w-16  "
          src={logo}
          alt="logo"
        />
        <p className=' text-sm'>Kharido.com</p>
      </Link>
      {/* search */}
      <div className=" hidden w-full mr-12 max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-200 rounded-md  xl:flex items-center ">
        {/* <select
          className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
          
        >
          <option>all categories</option>
        </select> */}
        <input
          className=" rounded-md  outline-none p-4  w-full border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
          type="text"
          placeholder="I'm searching for ..."
          onChange={(e)=>setKeyword(e.target.value)}
          value={keyword}
        />
        <CiSearch size={'30px'} className=' ml-auto  mr-2 ' onClick={handleSubmit} />
      </div>
      {/* phone number */}
      
      {/* buttons */}
      <nav className="contents">
        <ul className=" lg:mr-1 xl:w-48 flex items-center justify-end">
        <li className="lg:mr-16 lg:ml-4 mr-5 relative inline-block ">
            <Link to={'/cart'} className="" >
             
              {
                cartItems.length>0 && (
                  <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  { cartItems.reduce((a, c) => a + c.qty, 0)}
              </div>
                )
              }
              <svg
                className="h-9 lg:h-10 p-1 text-gray-500 "
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shopping-cart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                />
              </svg>
            </Link>
          </li>
         
        
          
        </ul>
      </nav>
      {/* cart count */}
      <div>
        {userInfo ? ( <div className=' flex items-center justify-center'>
          <img src={userInfo?.user.avatar} alt="img" className=' w-12 h-12 shrink-0 object-cover rounded-full mr-2' />
         
  <div className="">
  <div className="group inline-block relative ">
    <button className="bg-gray-100 text-gray-700 font-semibold py-2 px-4  rounded-sm inline-flex items-center">
      <span className="mr-1">{userInfo?.user.name}</span>
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
    <ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-30">
      <li className="">
        <a
          className="  rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
          href="/profile"
        >
        
          Profile
        </a>
      </li>
     {
        userInfo?.user?.isAdmin  && (
          <li className="">
          <a
            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="/dash"
          >
           dashboard
          </a>
        </li>
        )
     }


      <li className="" onClick={logoutHandler}>
        <a
          className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
          href="#"
        >
          Logout
        </a>
      </li>
      
    </ul>
  </div>
</div>

        </div> ): (
    <Link to={"/login"} className="  rounded-md inline-flex items-center bg-yellow-400 border-0 py-1 px-3 mt-4 md:mt-0">
     Login
   </Link>
        )}
      </div>
    </div>
    <div className=' md:hidden'>
    <div className=" ml-8  w-full mr-12 max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-200 rounded-md  flex items-center justify-center ">
        
        <input
          className="  rounded-md  outline-none p-4  w-[80%] border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
          type="text"
          placeholder="I'm searching for ..."
          onChange={(e)=>setKeyword(e.target.value)}
          value={keyword}
        />
        <CiSearch size={'30px'} className=' ml-auto  mr-2 ' onClick={handleSubmit} />
      </div>
    </div>
    </div>
    <hr />
  </header>
</>



  )
}

export default Header