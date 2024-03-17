import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link ,useNavigate} from "react-router-dom"
import Reg from "../assets/reg.png"
import logo from "../assets/logo3.svg"
import axios from 'axios'
import { useRegisterMutation } from '../redux/slices/userApiSlice';
import { loginFront } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
const RegisterScreen = () => {
  const [name,setName]= useState("")
  const [password,setPass]= useState("")
  const [email,setEmail]= useState("")
  const [file,setFile]= useState(null)
  const [isProcessing,setIsProcessing]= useState(false)
  //console.log(image)
  const navigate = useNavigate()
  const [ registerApi , { isLoading, error, data }] = useRegisterMutation();
 const dispatch = useDispatch()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(name,password,email,file)
    if(!name || !password || !email || !file){
       // alert('please fill all the fields')
        toast.error('please fill all the fields')
        return
    }

  
    const formdata=new FormData()
    formdata.append('avatar' ,file)
    formdata.append('name' ,name)
    formdata.append('email' ,email)
    formdata.append('password' ,password)

    
    //console.log("thhis is formdata:",formdata)
    
    //api call
    // const userData={
    //   name: name,
    //   email: email,
    //   password: password,
    //   formdata
      
     
      
    // }
    try {
     
      // const res= await axios.post('/api/v1/user/register',userData)
      // console.log(res.data)
      // toast.success("user created successfully")
      // navigate('/login')
      
      
      setIsProcessing(true)
      

      
      const {data}=await registerApi(formdata)
      console.log(data)
      dispatch(loginFront(data))
      setIsProcessing(false) 
      toast.success("user created successfully")
      navigate("/")
    } catch (error) {
      setIsProcessing(false)
      toast.error("An error occurred")
      console.log(error)
    }
    

}
  return (
    
    
  
  <div className="py-6 mt-10 ">
  <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
    <div
      className="hidden lg:block lg:w-1/2 bg-cover"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/ecomm-2024/image/upload/v1707061732/tlzlutdyti0dvjqgpbol.png")'
      }}
    />
    <div className="w-full p-8 lg:w-1/2">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        <img src={logo} alt="image" className=' h-6 ml-[48%]' />
      </h2>
      <p className="text-xl text-gray-600 text-center">Kharidoo.com !</p>
      

   

      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4" />
        <div  className="text-xs text-center text-gray-500 uppercase">
           Register with email
        </div>
        <span className="border-b w-1/5 lg:w-1/4" />
      </div>
      <form >
      <div className="mt-4">
      
       <div className="flex items-center space-x-6 shadow-sm rounded-lg mt-4 p-2 bg-gray-100 ">
    <div className="shrink-0">
      <img
       
        className="h-18 w-17  rounded-full object-cover"
        src={file}
      />
    </div>
    <label className="block">
      <span className="sr-only">Choose profile photo</span>
      <input
        type="file"
       
        className="block w-full text-sm text-slate-500
  file:mr-4 file:py-2 file:px-4
  file:rounded-full file:border-0
  file:text-sm file:font-semibold
  file:bg-violet-50 file:text-violet-700
  hover:file:bg-violet-100
"

    onChange={(e)=>setFile(e.target.files[0])} />
    </label>
  </div>
     

     
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
        <button disabled={isProcessing} onClick={(e)=>handleSubmit(e)} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          { isProcessing ? <Spinner/> : "Register"}
        </button>
      </div>
      </form>
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4" />
        <Link to={'/login'} className="text-xs text-gray-500 uppercase">
          or sign in
        </Link>
        <span className="border-b w-1/5 md:w-1/4" />
      </div>
    </div>
  </div>
</div>

    
  

  )
}

export default RegisterScreen