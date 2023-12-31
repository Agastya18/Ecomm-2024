import ProductCard from "../components/ProductCard"
import product from "../productData"

const HomeScreen = () => {
  return (
    <div className=' h-[78vh]'>
      <div className='flex flex-wrap justify-center'>
        {product.map((product) => (
          <ProductCard  key={product._id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default HomeScreen