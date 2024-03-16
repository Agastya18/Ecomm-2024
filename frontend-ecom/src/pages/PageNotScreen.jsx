

import { Link } from 'react-router-dom'
const PageNotScreen = () => {
  return (
   
    // <div  className=' flex flex-col  justify-center items-center h-[100%] gap-10 '>
    //   <h1 className=' mt-20 text-red-600  text-8xl font-bold' style={{ fontFamily:"Lobster" }}>404</h1>
    //   <h2 className=' text-xl font-bold'>OOPS! Page Not Found</h2>
    //   <Link to = "/" className=' font-semibold  bg-blue-400 rounded-full p-3'>Go back</Link>
    // </div>
    <section className="h-screen bg-center bg-no-repeat bg-cover bg-gradient-to-r   from-blue-500 via-blue-400 to-green-200 ">
  <div className="flex items-center h-screen">
    <div className="container relative justify-center px-4 mx-auto text-center">
      <h1 className="inline-block mb-8 font-semibold text-gray-100 text-7xl lg:text-9xl ">
        {" "}
        Oops!
      </h1>
      <h2 className="mb-8 text-2xl font-semibold text-red-800 lg:text-4xl ">
        404 Page not found
      </h2>
      <p className="mb-8 text-xl text-gray-200 ">
        Sorry! we are unable to find the page that you are looking for...
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <a
          href="/"
          className="w-full px-8 py-4 mb-4 mr-0 text-base font-medium text-gray-100 uppercase bg-blue-600 rounded-full lg:w-auto hover:bg-blue-800 lg:mb-0 lg:mr-4 md:w-full "
        >
          Return Home
        </a>
        <a
          href="/login"
          className="w-full px-8 py-4 text-base font-medium text-gray-100 uppercase border border-blue-200 rounded-full  lg:w-auto hover:text-gray-200 hover:border-blue-800 md:w-full hover:bg-blue-800"
        >
          login
        </a>
      </div>
    </div>
  </div>
</section>

   
  )
}

export default PageNotScreen