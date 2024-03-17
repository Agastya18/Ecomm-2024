

import { Link } from 'react-router-dom'
const PageNotScreen = () => {
  return (
   
    // <div  className=' flex flex-col  justify-center items-center h-[100%] gap-10 '>
    //   <h1 className=' mt-20 text-red-600  text-8xl font-bold' style={{ fontFamily:"Lobster" }}>404</h1>
    //   <h2 className=' text-xl font-bold'>OOPS! Page Not Found</h2>
    //   <Link to = "/" className=' font-semibold  bg-blue-400 rounded-full p-3'>Go back</Link>
    // </div>
    <div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200">404</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

    <p className="mt-4 text-gray-500">We can't find that page.</p>

    <Link
      to={'/'}
      className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Go Back Home
    </Link>
  </div>
</div>

   
  )
}

export default PageNotScreen