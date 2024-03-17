import AdminLayout from '@/components/adminComp/AdminLayout'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useGetAllUsersQuery } from '@/redux/slices/userApiSlice';
import Loader from '@/components/Loader';
import { useState } from 'react';
import { useDeleteUserMutation } from '@/redux/slices/userApiSlice';
import { useUpdateUserRoleMutation } from '@/redux/slices/userApiSlice';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const UserAdmin = () => {
  const [role , setRole] = useState();
  console.log(role)
  const { data, error, isLoading,refetch } = useGetAllUsersQuery();
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();
  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure')) {
      await deleteUser(id)
      refetch()
      

    }
  }
  console.log(data);
  const handleRoleChange = async (id) => {
    await updateUserRole({id:id,isAdmin:role})
    refetch()
  }

  return (
   <AdminLayout>
   <div>
   <h1 className=' text-center text-4xl mt-8 mb-12'>All User</h1>
   <section className="items-center lg:flex    ">
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div className="overflow-x-auto rounded shadow dark:bg-gray-900 bg-white">
      <table className="w-full table-auto">
        <thead className="bg-lightGray-50">
          <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
            <th className="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
             
              <span>Avatar</span><span className=' ml-12'>Name</span>
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">Email</th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">
              Created
            </th>
           
            <th className="px-6 py-4 font-medium dark:text-gray-400">Role</th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">
              Actions
            </th>
            
          </tr>
        </thead>
        <tbody>
          {
            isLoading ? <Loader/> : data?.users?.map((user) => (
              <tr key={user._id}  className= " hover:bg-blue-50 border-b border-gray-200 dark:border-gray-800">
            <td className="flex items-center px-6 py-3 font-medium">
             
              <div className="flex items-center">
                <img
                  className="object-cover w-10 h-10 mr-4 rounded-full "
                  src={user.avatar}
                  alt="img"
                />
                <div>
                  <p className="text-sm font-medium  ml-8">
                  {user.name}
                  </p>
                  
                </div>
              </div>
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">{user.email}</td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
              {user.createdAt.substring(0, 10)}
            </td>
           
            <td className="px-6 text-sm font-medium dark:text-gray-400">
              <span className="">
                {user.isAdmin ? <span
                                        className="inline-block px-2 py-1 text-green-800 bg-green-100 rounded-md">Admin</span> :  <span
                                        className="inline-block px-2 py-1 text-orange-800 bg-orange-100 rounded-md ">User</span>}
              </span>
            </td>
            <td className="px-6">
              <div className="flex  ">
                <Popover>
                
                <PopoverTrigger>
                <button
                  type="button"
                  
                  
                  className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                >
                <CiEdit size={'25px'} />
                </button>
                 
                </PopoverTrigger>
                <PopoverContent className="w-80 h-auto mr-7 md:mr-16" side="top" >
                  <div className=' '>
                  <form
                  className=""
                 
                >
                  <div className='flex'><h1 className= "ml-14 text-xl">Role</h1>
                 </div>
                  <div className=' mt-6'>
                  
                  <select onChange={(e)=>setRole(e.target.value)}  className="px-3  border rounded-md focus:outline-none focus:border-blue-500">
                      <option value="">Choose Role...</option>
                      <option value="false">User</option>

                      <option value="true">Admin</option>
                    </select>
                  </div>

                  <button
                   onClick={()=>handleRoleChange(user._id )}
                 
                   className=' shadow-md bg-blue-300 p-1 px-2  rounded-sm  ml-[65%]'
                    type="submit"
                    
                  >
                    Process
                  </button>
                </form>
                  </div>
                </PopoverContent>
                </Popover>
                <button
                  type="button"
                  onClick={()=>handleDeleteUser(user._id)}
                 
                  className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                >
                <MdOutlineDeleteForever size={'25px'} />
                </button>
              </div>
            </td>
           
          </tr>
            ))
          }
         
        
        </tbody>
      </table>
      
    </div>
  </div>
</section>
   </div>

   </AdminLayout>
  )
}

export default UserAdmin