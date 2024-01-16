

const Sidebar = () => {
  return (
    <div className=" flex ">
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open sidebar</span>
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      />
    </svg>
  </button>
  <aside
    id="logo-sidebar"
    className=" z-40 top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-100   ">
      <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5 mt-2  flex-col ">
      <img
    src={"https://res.cloudinary.com/youtube-cloud/image/upload/v1702963448/u1hls5ymyzpi17wdn5la.jpg"}
    className="rounded-full w-28  mr-16 "
    alt="profile picture"
    
  />
        {/* <span className="self-center text-xl font-semibold whitespace-nowrap  ">
          Agastya
        </span> */}
      </a>
      <ul className="space-y-8 font-medium">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-300 "
          >
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="ms-3">Agastya-Dash</span>
          </a>
        </li>
       
        
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-300 "
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">My Profile</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-300 "
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
              3
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-300 "
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">
                
                Logout
            </span>
          </a>
        </li>
        
      </ul>
    </div>
  </aside>
  <div className="p-4 w-[50%] ml-[10%] mt-10 text-2xl   ">
  <div className="bg-white overflow-hidden  rounded-lg border shadow-lg">
  <div className="px-4 py-5 sm:px-6">
  <div className="flex items-center">
  <div className="relative">
    <img
      className="h-24  mx-auto rounded-full  object-cover"
      src="https://res.cloudinary.com/youtube-cloud/image/upload/v1702963448/u1hls5ymyzpi17wdn5la.jpg"
      alt="Avatar"
    />
    <div className="absolute inset-0 rounded-full shadow-inner" />
  </div>
  <div className="ml-4 ">
    <h2 className="font-bold text-gray-800 text-2xl">Agastya Gaur</h2>
    <p className="text-gray-600 font-light text-sm mt-2">Software Engineer</p>
    

  </div>
  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ml-28">Update </button>
</div>

    
  </div>
  <div className="border-t border-gray-200 px-4 py-5 sm:p-0 ">
    <dl className="sm:divide-y sm:divide-gray-200">
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Full name</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Agastya gaur
        </dd>
      </div>
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Email address</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          agastya@example.com
        </dd>
      </div>
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Password</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          12345
        </dd>
      </div>
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">confirm password</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          12345
          <br />
           
        </dd>
      </div>
    </dl>
  </div>
</div>

  </div>
</div>


  )
}

export default Sidebar