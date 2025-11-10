import { useContext } from "react";
import { FaClipboard, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductCard = ({ id, img, name, category, old_price, new_price, view }) => {

  const handleProductClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to other elements
    window.scrollTo(0, 0); // Scrolls to the top
  };
   const {isInCart, handleAddToCart} = useContext(ShopContext);
   const InCart = isInCart(id);
  //  console.log(search)

  return (
    <div
      className={`relative group w-full p-4 border rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        view === "list" ? "flex items-center" : ""
      }`}
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 group-hover:bg-black opacity-10 z-0 rounded-lg"></div>

      {/* Wishlist Icon */}
      {view !== 'list' && (
        <div className="absolute z-10 top-4 right-4 p-3 border border-[#4f3222] rounded-full cursor-pointer scale-0 group-hover:scale-100 transition duration-300">
          <FaRegHeart className="text-2xl" />
        </div>
      )}
      

      {/* Product Image */}
      <Link to={`/product/${id}`} onClick={(e) => handleProductClick(e)}>
        <img
          src={img}
          alt={name}
          className={`object-contain w-full h-48 sm:h-56 lg:h-64 transition duration-300 ${
            view === "list" ? "" : "group-hover:translate-y-4 group-hover:scale-110"
          }`}
        />
      </Link>

      {/* Product Details */}
      <div className="w-full p-4 flex flex-col justify-between">
        <h2 className={`text-lg sm:text-2xl ${view === 'list' && 'sm:text-4xl'} font-bold font-montserrat`}>{name}</h2>
        <p className="text-sm sm:text-lg text-gray-500">{category}</p>
        <div className="flex items-center gap-2 mt-2">
          <p className="line-through text-gray-400 text-sm sm:text-2xl">${old_price}</p>
          <p className="text-lg sm:text-2xl font-bold text-amber-700">${new_price}</p>
        </div>
        {/* Buttons - Show only in Grid View */}
        {/* {view === "grid" && ( */}
        <div className="flex gap-4 justify-center items-center transform group-hover:-translate-y-10 scale-0 group-hover:scale-100 transition duration-500">
          <button 
          onClick={() => handleAddToCart(id)} 
          className={`${InCart && 'cursor-not-allowed'} p-3 border border-amber-600 bg-amber-600 hover:scale-110 rounded-full transition duration-300`}
          disabled={InCart}>
            {InCart ? <h2 className="text-white font-bold font-montserrat">In Cart</h2> : <FaShoppingCart color="#fff" className="text-2xl md:text-4xl" />}
          </button>
          <button className="p-3 border border-[#4f3222] hover:scale-110 rounded-full transition duration-300">
            <FaClipboard color="#4f3222" className="text-2xl md:text-4xl" />
          </button>
          {view === 'list' && (
            <button className="p-3 border border-[#4f3222] hover:scale-110 rounded-full transition duration-300">
              <FaRegHeart color="#4f3222" className="text-2xl md:text-4xl" />
            </button>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default ProductCard;
