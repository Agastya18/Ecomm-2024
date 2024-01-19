import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link ,useNavigate} from "react-router-dom"

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
     
      const res= await axios.post('/api/v1/register',userData)
      console.log(res.data)
      toast.success("user created successfully")
      navigate('/login')
    } catch (error) {
      toast.error("An error occurred")
      console.log(error)
    }
    

}
  return (
    
    
  //     <div className="flex w-screen   flex-wrap text-slate-800  ">
  //   <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
  //     <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
  //       <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
  //         New Feature
  //       </span>
  //       <p className="my-6 text-3xl font-semibold leading-10">
  //         Create animations with{" "}
  //         <span className="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">
  //           drag and drop
  //         </span>
  //       </p>
  //       <p className="mb-4">
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
  //         necessitatibus nostrum repellendus ab totam.
  //       </p>
  //       <a
  //         href="#"
  //         className="font-semibold tracking-wide text-white underline underline-offset-4"
  //       >
  //         Learn More
  //       </a>
  //     </div>
  //     {/* <img class="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" /> */}
  //   </div>
  //   <div className="flex w-full flex-col md:w-1/2">
  //     <div className="flex justify-center pt-12 md:justify-start md:pl-12">
  //       <a href="#" className="text-2xl font-bold text-blue-600 flex">
  //         {" "}
  //         <img
  //           className="mr-2 h-6 "
  //           src={logo}
  //           alt=""
  //         />{" "} Kharidoo.com{" "}
  //       </a>
  //     </div>
  //     <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
  //       <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
  //         Create your free account
  //       </p>
        
  //       <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
  //         <img
  //           className="mr-2 h-5"
  //           src={goo}
  //           alt=""
  //         />{" "}
  //         Get started with Google
  //       </button>
  //       <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
  //         <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
  //           Or use email instead
  //         </div>
  //       </div>
  //       <form className="flex flex-col items-stretch pt-3 md:pt-8">
  //         <div className="flex flex-col pt-4">
  //           <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
  //             <input
  //               type="text"
  //               id="login-name"
  //               className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
  //               placeholder="Name"
  //             />
  //           </div>
  //         </div>
  //         <div className="flex flex-col pt-4">
  //           <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
  //             <input
  //               type="email"
  //               id="login-email"
  //               className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
  //               placeholder="Email"
  //             />
  //           </div>
  //         </div>
  //         <div className="mb-4 flex flex-col pt-4">
  //           <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
  //             <input
  //               type="password"
  //               id="login-password"
  //               className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
  //               placeholder="Password (minimum 8 characters)"
  //             />
  //           </div>
  //         </div>
  //         <div className="block">
            
  //         <p className="mt-6 text-center font-medium md:text-left">
  //         Already using Kharidoo.com?{" "}
  //         <a href="#" className="whitespace-nowrap font-semibold text-blue-700">
  //           Sign In here
  //         </a>
  //       </p>
  //         </div>
  //         <button
  //           type="submit"
  //           className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
  //         >
  //           Sign up
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // </div>
  <div className="py-6 mt-10 ">
  <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
    <div
      className="hidden lg:block lg:w-1/2 bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'
      }}
    />
    <div className="w-full p-8 lg:w-1/2">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        <img src={logo} alt="image" className=' h-6 ml-[48%]' />
      </h2>
      <p className="text-xl text-gray-600 text-center">Kharidoo.com !</p>
      <a
        href="#"
        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="px-4 py-3">
          <svg className="h-6 w-6" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>
        </div>
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Google
        </h1>
      </a>
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4" />
        <a href="#" className="text-xs text-center text-gray-500 uppercase">
          or login with email
        </a>
        <span className="border-b w-1/5 lg:w-1/4" />
      </div>
      <form >
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="name"
          value={name}
               onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
          value={email}
               onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          
        </div>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          value={password}
                onChange={(e)=>setPass(e.target.value)}
        />
      </div>
      <div className="mt-8">
        <button onClick={(e)=>handleSubmit(e)} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          Register
        </button>
      </div>
      </form>
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4" />
        <a href="#" className="text-xs text-gray-500 uppercase">
          or sign in
        </a>
        <span className="border-b w-1/5 md:w-1/4" />
      </div>
    </div>
  </div>
</div>

    
  

  )
}

export default RegisterScreen