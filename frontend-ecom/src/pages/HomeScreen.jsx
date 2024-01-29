import axios from "axios"
import  Carousel  from "../components/Carousel"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import product from "../productData"
import { useGetProductQuery,useGetSingleProductQuery } from "../redux/slices/ProductApiSlice"
import { useEffect } from "react"
const HomeScreen = () => {
    //const id = "65abe9891854ed5a5d9fe1e0"
  const {data} = useGetProductQuery()
  
  
  console.log("data is ------",data)
 
  


  
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get("/api/v1/product/all-product")
  //     console.log("data is ------", data.products)
  //   }
  //   fetchProduct()
  // }, [])
  return (
    <Layout title={"Kharido.com"}>
      <div className=' h-[100%] '>
      <Carousel/>
      <div className='flex flex-wrap justify-center'>
        {data?.products.map((product) => (
          <ProductCard  key={product._id} product={product} />
        ))}
      </div>
     

    </div>
    </Layout>
  )
}

export default HomeScreen