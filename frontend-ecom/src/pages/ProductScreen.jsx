
import productData from "../productData"
import { useParams } from 'react-router-dom'
const ProductScreen = () => {
    const {id: productId} = useParams();
    const product = productData.find((p) => p._id === productId)
    console.log(product)
  return (
    <div>ProductScreen</div>
  )
}

export default ProductScreen