import {Link, useNavigate} from 'react-router-dom'

import logo from '../assets/logo3.svg'
import toast from 'react-hot-toast'

import { useSelector,useDispatch } from 'react-redux';
import {logoutFront} from '../redux/slices/authSlice';
import { useLogoutMutation } from '../redux/slices/userApiSlice';
const Header = () => {
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
  
  return (
//     <nav className="  flex flex-wrap p-4 flex-col md:flex-row items-center shadow bg-slate-200 ">
//   <a className="flex title-font font-medium items-center text-gray-900  md:mb-0 flex-col ml-8">
//     <img src={logo} className=' w-14 h-14 ml-2'/>
//     <div className=' text-sm  font-light '>Kharido.com</div>
//   </a>
//   <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center">
//     <a className="mr-5">First Link</a>
//     <a className="mr-5">Second Link</a>
//     <a className="mr-5">search bar</a>
    
   
//   </div>
//   <div className='flex'>
//   <BsCart size={"25px"} className=' mr-5'/>
//   <span className='mr-8  z-10'>(0)</span>
//   </div>

  
//   <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">
//     Profile
//   </button>
// </nav>
<>
  {/* component */}
  <header className=" bg-slate-50">
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
      <div className="w-full mr-12 max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-200 rounded-md hidden xl:flex items-center">
        <select
          className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
          
        >
          <option>all categories</option>
        </select>
        <input
          className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
          type="text"
          placeholder="I'm searching for ..."
        />
        <svg
          className="ml-auto h-5 px-4 text-gray-500"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          />
        </svg>
      </div>
      {/* phone number */}
      
      {/* buttons */}
      <nav className="contents">
        <ul className=" lg:mr-1 xl:w-48 flex items-center justify-end">
        <li className="lg:mr-16 lg:ml-4 relative inline-block ">
            <a className="" href="">
              {/* <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                11
              </div> */}
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
            </a>
          </li>
         
        
          
        </ul>
      </nav>
      {/* cart count */}
      <div>
        {userInfo ? ( <div className=' flex items-center justify-center'>
          <img src={userInfo?.loggedInUser.avatar} alt="img" className=' w-12 h-12 shrink-0 rounded-full mr-2' />
         
  <div className="">
  <div className="group inline-block relative ">
    <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4  rounded-sm inline-flex items-center">
      <span className="mr-1">{userInfo?.loggedInUser.name}</span>
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
          className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
          href="/profile"
        >
          Profile
        </a>
      </li>
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
    <hr />
  </header>
</>



  )
}

export default Header