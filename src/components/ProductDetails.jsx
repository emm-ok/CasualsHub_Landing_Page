import { useParams } from "react-router-dom"
import { DescriptionBox, Footer, TopBanner } from "../components"
import ProductDisplay from "../pages/ProductPage/ProductDisplay"
import RelatedProducts from './RelatedProducts'
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"


const ProductDetails = () => {

  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e) => e.id === productId);

  if (!product) {
    return <h2 className="text-center text-xl font-bold">Product Not Found</h2>;
}  

  return (
    <section className="max-w-screen">
      <TopBanner title='Product Detail' img={product.img} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
      
    </section>
  )
}

export default ProductDetails


