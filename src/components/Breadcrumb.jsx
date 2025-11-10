import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Breadcrumb = ({ page, isProductDetails = true }) => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const product = products.find((p) => p.id === productId);

  return (
    <div className="text-xs md:text-lg font-montserrat uppercase">
      HOME / <span className="font-bold">{page}</span>
      {isProductDetails && product && ` / ${product.category} / ${product.name}`}
    </div>
  );
};

export default Breadcrumb;
