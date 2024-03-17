import Layout from '@/components/Layout'

import ProductCard from "../components/ProductCard"

import { useGetProductByQueryQuery } from "../redux/slices/ProductApiSlice"

import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const QueryPage = () => {
    const {keyword}=useParams()
    //const id = "65abe9891854ed5a5d9fe1e0"
  //const {data} = useGetProductQuery()
  const {data,isLoading} = useGetProductByQueryQuery(keyword)
 // console.log("search data is",searchData)
 console.log(data)
  return (
   <Layout>
        <div className=' w-full'>
        {
            !keyword && (
                <Link className=' bg-slate-400  p-1 m-2 rounded-md' to='/'>
                Go Back
              </Link>)
        }
        {
        isLoading ? <h2>Loading...</h2> : (
          <div className='flex flex-wrap justify-center'>
      
         {data?.products.map((product) => (
           <ProductCard  key={product._id} product={product} />
         ))}
      </div>
          )
      }
        </div>
   </Layout>
  )
}

export default QueryPage