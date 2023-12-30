

import { Link } from 'react-router-dom'
const PageNotScreen = () => {
  return (
   
    <div  className=' flex flex-col  justify-center items-center h-[100%] gap-10 '>
      <h1 className=' mt-20 text-red-600  text-8xl font-bold' style={{ fontFamily:"Lobster" }}>404</h1>
      <h2 className=' text-xl font-bold'>OOPS! Page Not Found</h2>
      <Link to = "/" className=' font-semibold  bg-blue-400 rounded-full p-3'>Go back</Link>
    </div>
   
  )
}

export default PageNotScreen