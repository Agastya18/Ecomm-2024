import { Link } from "react-router-dom"
import logo from '../assets/logo3.svg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import foo from "../assets/foo.svg"
const Footer = () => {
    return (
      <footer className="bg-gray-100 shadow-md">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <Link to={'/'} className="mr-auto md:w-48">
        <img
          className="h-16 w-16  "
          src={foo}
          alt="logo"
        />
        <p className=' text-sm'>Kharido.com</p>
      </Link>
      </div>
      <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
        <Link to={'https://github.com/Agastya18'} target="_blank" className="  hover:text-gray-600">
        <FaGithub size={'25px'} />
        </Link>
        <Link to={'https://www.linkedin.com/in/agastya-gaur-86b3261a0'} target="_blank" className="  hover:text-gray-600">
        <FaLinkedin size={'25px'} />
        </Link>
        <Link to={'https://youtube.com/@agastya_gaur?feature=shared'} target="_blank" className="  hover:text-gray-600">
        <IoLogoYoutube size={'25px'} />
        </Link>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    )
  }
  
  export default Footer



  