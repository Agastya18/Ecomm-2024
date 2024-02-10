
import MobileSidebar from '../../components/adminComp/MobileSidebar'
const AdminNav = () => {
  return (
    <div className=' flex items-center p-4  bg-gray-100'>
        
       
       <MobileSidebar/>
      



       <div className=" flex w-full justify-end ">
        {/* <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
        
        
        <li className="hover:text-blue-200 ">User</li>
        <li className="hover:text-blue-200 ">Setting</li>

        </ul> */}
        <div className="">
                                                <img src="https://i.postimg.cc/pr2Q6n1w/pexels-italo-melo-2379005.jpg"
                                                    className="object-cover object-right w-10 h-10 rounded-full"
                                                    alt="person"/>
                                            </div>

       </div>
    </div>
  )
}

export default AdminNav