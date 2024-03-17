import axios from "axios"
import  Carousel  from "../components/Carousel"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import product from "../productData"
import { useGetProductQuery,useGetProductByQueryQuery } from "../redux/slices/ProductApiSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const HomeScreen = () => {
  //const {keyword}=useParams()
    //const id = "65abe9891854ed5a5d9fe1e0"
  const {data,isLoading} = useGetProductQuery()
 // const {data,isLoading} = useGetProductByQueryQuery(keyword)
 // console.log("search data is",searchData)
 console.log(data)
 


  
  
  
  //console.log("data is ------",data)
 
  


  
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get("/api/v1/product/all-product")
  //     console.log("data is ------", data.products)
  //   }
  //   fetchProduct()
  // }, [])
  return (
    <Layout title={"Kharido.com"}>
      <div className=' w-full  '>
      <Carousel/>
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

export default HomeScreen


// <Carousel/>
      
//       <div className='flex flex-wrap justify-center'>
      
//         {data?.products.map((product) => (
//           <ProductCard  key={product._id} product={product} />
//         ))}
//       </div>