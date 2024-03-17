
import Rating from './Rating'
import { MdDelete } from "react-icons/md";
 import { useDeleteReviewMutation,useGetProductQuery } from '../redux/slices/ProductApiSlice';

import { Link } from 'react-router-dom';

const Review = ({reviews,proInfo,logInfo,setRev}) => {
  const [deleteReview ] = useDeleteReviewMutation()
  const {refetch}=useGetProductQuery();
 
  
  const deleteRev = async(id)=>{
    await deleteReview(id)
    setRev(false)
    refetch();
    
  
  }
   
  return (
    <>
    
  <div className="  justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-1 md:px-2">
    <div className="p-3  bg-zinc-50 rounded-lg shadow-md ">
      <div className="flex flex-wrap items-center mb-2  space-x-2 ">
        <div className="flex self-start flex-shrink-0 cursor-pointer">
          <img
            src={reviews?.avatar}
            alt="review img"
            className="object-cover w-16 h-16 rounded-full"
          />
        </div>
        
        <div className="flex items-center justify-center space-x-2 ">
          <div className="block">
            <div className="w-auto px-2 pb-2 ">
              <div className="font-medium flex items-center ">
                <Link
                  
                  className="text-lg font-semibold hover:underline"
                >
                  <small>{reviews?.name}</small>
                  
                </Link>
                <div className=' ml-4'><Rating value={reviews?.rating}/></div>
              </div>
              <div className="text-sm text-gray-600 ">
                {reviews?.comment}
                
              </div>
              
            </div>
            <div className="flex items-center justify-start w-full text-xs">
              <div className="flex items-center justify-center px-2 space-x-1 font-semibold text-gray-700 ">
              <p className=" text-sm text-gray-600">{reviews?.createdAt.substring(0, 10)
}</p>

              </div>
            </div>
          </div>
          {/* <button className=' shadow-sm bg-blue-100'  onClick={()=>deleteRev(proInfo)}>
          <MdDelete size={"25px"} className=' ml-1' />
          </button> */}
          {
            logInfo?._id===reviews?.user &&  <div className=''>
            <button className=' shadow-md  md:ml-96 '  onClick={()=>deleteRev(proInfo)}>
          <MdDelete size={"25px"}  />
          </button> 
            </div>
          }
        </div>
       
      </div>
        
      
    </div>
  
  </div>
  
</>

  )
}

export default Review