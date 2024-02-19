import AdminLayout from '@/components/adminComp/AdminLayout'
import React from 'react'
import { useGetAllReviewsQuery } from '@/redux/slices/ProductApiSlice'
import { Link, useParams,useNavigate } from 'react-router-dom'
import Loader from '@/components/Loader'
import Message from '@/components/Message'
import { useDeleteReviewAdminMutation } from '@/redux/slices/ProductApiSlice'
const ReviewAdmin = () => {
  const {id: productId} = useParams();
  const { data, error, isLoading,refetch } = useGetAllReviewsQuery(productId)
  const [deleteReview] = useDeleteReviewAdminMutation()


// //  {
//   data?.reviews?.length > 0 ? `All Reviews for ${data?.reviews[0].product}` : 'No Reviews'
// }
  
  console.log(data);
  const navigate = useNavigate()
  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('Are you sure')) {
      await deleteReview({id:productId,reviewId})
      refetch()
    }
  }
  
  
  return (
    <AdminLayout>
        <div>
        <h1 className=' text-center text-4xl mt-8 mb-12'>Product Reviews</h1>
        <section className="items-center justify-center lg:flex bg-white  font-poppins dark:bg-gray-800 ">
      {
        data?.reviews?.length>0 ? (
          <div className="   justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
        <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
        <img src={data.products.images[0]} className='inline w-16 h-16 shrink-0 object-fill rounded-md' alt="img" />
        <span className=' ml-2 font-thin'> {data.products.name} {"- "}Reviews</span>
        </h2>
        <div className=" md:p-3 flex px-6 py-2 mb-4 border border-gray-600 rounded-md md:mb-0 dark:border-gray-400">
          <input
            type="text"
            className="w-full pr-4 text-sm text-gray-700 bg-stone-100 dark:text-gray-400 dark:bg-gray-900 placeholder-text-100 "
            placeholder="search..."
          />
          <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-300 hover:text-blue-600">
            <span className="mr-2 text-xs ">Go</span>
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
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
              <th className="flex items-center px-6 pb-3 font-medium dark:text-gray-400">
              
              <span>Avatar</span><span className=' ml-12'>User</span>
              </th>
              <th className="px-6 pb-3 font-medium "> Comment </th>
              <th className="px-6 pb-3 font-medium"> createdAt </th>
              <th className="px-6 pb-3 font-medium">Rating </th>
              <th className="px-6 pb-3 font-medium"> Action</th>
            </tr>
          </thead>
          <tbody>
           {
              isLoading ? <Loader/> : data?.reviews?.map((review) => (
                <tr key={review._id} className=" hover:bg-blue-50 text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
              <td className="flex items-center px-6 py-5 font-medium">
               
              <div className="flex items-center">
                <img
                  className="object-cover w-10 h-10 mr-4 rounded-full "
                  src={review.avatar}
                  alt="img"
                />
                <div>
                  <p className="text-sm font-medium  ml-8">
                 {review.name}
                  </p>
                  
                </div>
              </div>
              </td>
              <td className="px-6 py-5 font-medium ">{review.comment}</td>
              <td className="px-6 py-5 font-medium ">{review.createdAt.substring(0,10)}</td>
              <td className="px-6 py-5 font-medium">
                <span className="text-blue-400 dark:text-blue-300">
                 {review.rating}
                </span>
              </td>
              <td className="flex items-center px-6 py-5 ">
               
                <button
                  type="button"
                  onClick={() => handleDeleteReview(review._id)}
                  
                  className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </td>
            </tr>
              ))
           }
           
          </tbody>
        </table>
        <div className="flex justify-end pt-4 mt-4 border-t dark:border-gray-700">
          <nav aria-label="page-navigation">
            <ul className="flex list-style-none">
              <li className="page-item disabled ">
                <a
                  href="#"
                  className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600"
                >
                  Previous
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-600"
                >
                  1
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                >
                  2
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                >
                  3
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
        ):(<Message message='No Reviews available'/>)
      }
</section>
        </div>

    </AdminLayout>
  )
}

export default ReviewAdmin