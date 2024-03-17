import { Link } from "react-router-dom"
import logo from '../assets/logo3.svg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
    return (
      <footer className="bg-gray-100 shadow-md">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <Link to={'/'} className="mr-auto md:w-48">
        <img
          className="h-16 w-16  "
          src={logo}
          alt="logo"
        />
        <p className=' text-sm'>Kharido.com</p>
      </Link>
      </div>
      <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
        <Link to={'/'} className="  hover:text-gray-600">
        <FaGithub size={'25px'} />
        </Link>
        <Link to={'/about'} className="  hover:text-gray-600">
        <FaLinkedin size={'25px'} />
        </Link>
        <Link to={'/contact'} className="  hover:text-gray-600">
        <IoLogoYoutube size={'25px'} />
        </Link>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    )
  }
  
  export default Footer