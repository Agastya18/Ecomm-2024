import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link ,useNavigate} from "react-router-dom"
import goo from "../assets/goo.png"
import logo from "../assets/logo3.svg"
import axios from 'axios'
const RegisterScreen = () => {
  const [name,setName]= useState("")
  const [password,setPass]= useState("")
  const [email,setEmail]= useState("")
  const navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(name,password,email)
    if(!name || !password || !email){
        alert('please fill all the fields')
        return
    }
    //api call
    const userData={
      name: name,
      email: email,
      password: password
    }
    try {
     
      const res= await axios.post('/api/signup',userData)
      console.log(res.data)
      toast.success("user created successfully")
      navigate('/signin')
    } catch (error) {
      toast.error("An error occurred")
      console.log(error)
    }
    

}
  return (
    // <div className=' min-h-screen bg-gray-300 flex flex-col justify-center items-center'>
    //     <div className=' bg-white px-16 pt-8 pb-12 mb-4'>
    //           <h1 className=' text-3xl font-mono text-center'>Register user</h1>
    //           <form >
    //           <label  className=' block text-gray-600 mt-4'>Name:</label>
    //             <input  label="Name"
    //                 type="text"
    //                 id="name"
    //                 value={name}
    //                 onChange={(e)=>setName(e.target.value)}
    //                 className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                   
    //             />
    //             <label  className=' block text-gray-600 mt-4'>Email: </label>
    //              <input  label="Email"
    //                 type="text"
    //                 id="email"
    //                value={email}
    //                onChange={(e)=>setEmail(e.target.value)}
    //                className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
    //             />
    //             <label  className=' block text-gray-600 mt-4'>Password: </label>
    //              <input label="password"
    //                 type="password"
    //                 id="password"
    //                value={password}
    //                onChange={(e)=>setPass(e.target.value)}
    //                className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
    //             />
                
                
    //             <button onClick={(e)=>handleSubmit(e)} className=' bg-green-600   rounded-md p-2 mt-3   w-full px-4'>signup</button>
    //             <p className=' inline-block'> Already have an account?</p>
    //             <Link to="/login" className=' text-blue-500 ml-2'>Login</Link>
    //           </form>
    //     </div>
    // </div>
    <div className="flex w-screen   flex-wrap text-slate-800 ">
    <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
      <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
          New Feature
        </span>
        <p className="my-6 text-3xl font-semibold leading-10">
          Create animations with{" "}
          <span className="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">
            drag and drop
          </span>
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          necessitatibus nostrum repellendus ab totam.
        </p>
        <a
          href="#"
          className="font-semibold tracking-wide text-white underline underline-offset-4"
        >
          Learn More
        </a>
      </div>
      {/* <img class="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" /> */}
    </div>
    <div className="flex w-full flex-col md:w-1/2">
      <div className="flex justify-center pt-12 md:justify-start md:pl-12">
        <a href="#" className="text-2xl font-bold text-blue-600 flex">
          {" "}
          <img
            className="mr-2 h-6 "
            src={logo}
            alt=""
          />{" "} Kharidoo.com{" "}
        </a>
      </div>
      <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
        <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
          Create your free account
        </p>
        
        <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
          <img
            className="mr-2 h-5"
            src={goo}
            alt=""
          />{" "}
          Get started with Google
        </button>
        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
          <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
            Or use email instead
          </div>
        </div>
        <form className="flex flex-col items-stretch pt-3 md:pt-8">
          <div className="flex flex-col pt-4">
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="text"
                id="login-name"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="email"
                id="login-email"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col pt-4">
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="login-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Password (minimum 8 characters)"
              />
            </div>
          </div>
          <div className="block">
            
          <p className="mt-6 text-center font-medium md:text-left">
          Already using Kharidoo.com?{" "}
          <a href="#" className="whitespace-nowrap font-semibold text-blue-700">
            Sign In here
          </a>
        </p>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
  

  )
}

export default RegisterScreen