import Header from '../Header'
import Footer from '../Footer'
import {Helmet} from 'react-helmet'
import AdminNav from './AdminNav'
import Sidebar from './Sidebar'

const AdminLayout = ({children,title}) => {
  return (
    <div className=' h-full relative'>
    <div className=' md:w-56  hidden md:flex h-full md:flex-col md:fixed  md:inset-y-0 z-[80] bg-gray-100'>
       <Sidebar/>
    </div>

    <main className=' md:pl-56'>
    <AdminNav/>
     {children}
    </main>
  
 
  
   
   
   
    </div>
  )
}

export default AdminLayout