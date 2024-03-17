import AdminLayout from '@/components/adminComp/AdminLayout'
import { IoStarOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

import { Link } from 'react-router-dom'

import { useGetProductQuery,useDeleteProductMutation } from '@/redux/slices/ProductApiSlice'
import Loader from '@/components/Loader'
import Message from '@/components/Message'
import toast from 'react-hot-toast'

const ProductAdmin = () => {
  const { data, error, isLoading,refetch } = useGetProductQuery()
  const [deleteProduct] = useDeleteProductMutation()
  const handleDelete = async(id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
     try {
      await deleteProduct(id)
    refetch();
      toast.success('Product deleted')
      
     } catch (error) {
      toast.error('error')
     }
    }
  }
  return (
    <AdminLayout>
        <div>
          <h1 className=' text-center text-4xl mt-8 mb-12'>All Product</h1>
        <section className="  items-center lg:flex bg-white  font-poppins  ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div className="pt-4 rounded shadow-lg  dark:bg-gray-900  ">
      <div className=" bg-stone-50 flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
        <h2 className="mb-4 text-xl font-bold md:mb-0  ">
          List of Product
        </h2>
        <Link to={'/admin/product/create-product'}>
       
        <button className=" bg-blue-300 flex px-6 py-2 mb-4 border border-gray-600 rounded-md md:mb-0 dark:border-gray-400">
         
         <p className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-300 hover:text-blue-600">
           <span className="mr-2 text-xs font-semibold ">create product</span>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width={16}
             height={16}
             fill="currentColor"
             className="bi bi-arrow-right"
             viewBox="0 0 16 16"
           >
             <path
               fillRule="evenodd"
               d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
             />
           </svg>
         </p>
       </button>
        </Link>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full table-auto ">
          <thead className=' border-b-2'>
            <tr className="  text-sm text-left text-gray-500 dark:text-gray-400">
              <th className="flex items-center px-6 pb-3 font-medium dark:text-gray-400">
                
                <span>Product Image</span>
              </th>
              <th className="px-6 pb-3 font-medium ">Name </th>
              <th className="px-6 pb-3 font-medium">Created </th>
              <th className="px-6 pb-3 font-medium">Stock </th>
              <th className="px-6 pb-3 font-medium"> Action</th>
            </tr>
          </thead>
          <tbody >
           {
            isLoading ? <Loader/> : error ? <div> <Message message={"error"}/> </div> :  data && data.products.map((product) => (
                <tr key={product._id} className=" border-b hover:bg-slate-100 text-sm  dark:text-gray-400 dark:bg-gray-800">
              <td className="flex items-center px-6 py-5 shrink-0 ">
               
                <img src={product.images[0]} alt="img" className=' h-14 w-14 rounded-full object-fit' />
              </td>
              <td className="px-6 py-5 font-medium ">{product.name}</td>
              <td className="px-6 py-5 font-medium ">{product.createdAt.substring(0,10)} </td>
              <td className="px-6 py-5 font-medium">
                <span className="text-blue-700 dark:text-blue-300">
                  {product.countInStock > 0 ? product.countInStock : <span className='inline-block px-2 py-1 text-center  text-red-700  bg-red-100 rounded-full '>Out of stock</span>}
                </span>
              </td>
              <td className="flex items-center px-6 py-5  ">
                <Link
                  to={`/admin/product/edit-product/${product._id}`}
                  className="   font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-5 h-5 mr-3 bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                 
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className=" shadow-md bg-stone-200 ml-3 font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-5 h-5 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
                <Link to={`/product/${product._id}`} className=' ml-3 shadow-md bg-stone-50'>
                <LuEye size={'23px'}  />
                </Link>
                <Link to={`/admin/reviews/${product._id}`} className=' ml-3 shadow-md bg-stone-50'>
                <IoStarOutline size={'23px'}  />
                </Link>
              </td>
            </tr>
              ))
           }
           
           
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</section>

        </div>
    </AdminLayout>
  )
}
//  isLoading ? <Loader/> : error ? <div> <Message message={"error"}/> </div> : 
export default ProductAdmin