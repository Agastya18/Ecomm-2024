
import toast from 'react-hot-toast'
import Layout from '../components/Layout'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserProfileMutation } from '../redux/slices/userApiSlice'
import { loginFront } from '../redux/slices/authSlice'
import { Link } from 'react-router-dom';
const ProfileScreen = () => {
  const [name,setName]= useState("")
  const [password,setPass]= useState("")
  const [confirmPassword,setConfirmPass]= useState("")
  const [email,setEmail]= useState("")
  const [file,setFile]= useState(null)
  const [isProcessing,setIsProcessing]= useState(false)
   
  const [updateProfileApi] = useUpdateUserProfileMutation()
  const { userInfo } = useSelector((state) => state.auth);
  

  useEffect(() => {
    setName(userInfo?.user.name);
    setEmail(userInfo?.user.email);
  }, [userInfo?.user.email, userInfo?.user.name]);



  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    
    e.preventDefault()

    console.log(name,password,email,file)
    if(password !== confirmPassword){
      toast.error("Password do not match")
     //return
    }else{
      setIsProcessing(true)
    const formdata=new FormData()
    formdata.append('avatar' ,file)
    formdata.append('name' ,name)
    formdata.append('email' ,email)
    formdata.append('password' ,password)

    try {
     // const {data} = useUpdateUserProfileMutation(formdata)
     // console.log(data)
    const{ data}= await updateProfileApi(formdata)
    dispatch(loginFront(data))
      
      toast.success("user updated successfully")

      setIsProcessing(false)
    } catch (error) {
      setIsProcessing(false)
      toast.error("An error occurred")
      
      
    }
  }
  }
  return (
    
        <Layout>
        
         <div className="flex flex-col md:flex-row justify-center md:mt-20 mt-10 px-8 ">
       
         <div className=' shrink-0'><img className=' md:mt-7 md:mr-30  md:w-72 md:h-72 rounded-full object-cover mt-7  ml-5 w-72 h-72' src={userInfo?.user.avatar} alt="" />
         <Link to={'/my-order'}>
         <button className=' w-full ml-2 p-2 rounded-md bg-slate-300 mt-6 hover:bg-slate-500'>
          my order
         </button>
         </Link>
         </div>
        
          
  <form className="max-w-2xl  ml-3">
  
    <div className="flex flex-wrap border shadow rounded-lg p-3 ">
      <h2 className="text-xl text-gray-600  pb-4">
        Account settings:
      </h2>
      <div className="flex flex-col gap-2 w-full border-gray-400">
        <div>
          <label className="text-gray-600 ">User name</label>
          <input
            className="font-thin   w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
            type="text"
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label className="text-gray-600 ">Email</label>
          <input
            className="font-thin w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow  "
            type="text"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label className="text-gray-600 ">Password</label>
          <input
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
            type="password"
            onChange={(e)=>setPass(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label className="text-gray-600 ">Comfirm Password</label>
          <input
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
            type="password"
            
            onChange={(e)=>setConfirmPass(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <div>
        
        <>
  <label className="text-gray-600  ">Profile photo</label>

  <span className="sr-only  ">Choose profile photo</span>
  <input
    type="file"
    onChange={(e)=>setFile(e.target.files[0])}
    className="  block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold  file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
  />
</>

                     

        </div>
        <div className="flex justify-end">
          <button onClick={handleSubmit} 
          disabled={isProcessing}
            className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 "
            type="submit"
          >
            { isProcessing ? "Processing..." : "Save" }
          </button>
        </div>
      </div>
    </div>
  </form>
</div>



        </Layout>
    
  )
}

export default ProfileScreen