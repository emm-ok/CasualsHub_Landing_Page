import { FaRegHeart, FaShuffle, FaStar } from "react-icons/fa6";
import { colors, sizes, socialMedia } from "../../constants";
import Button from "../../components/Button";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = ({ product }) => {

  const { cart, isInCart, handleAddToCart, increment, decrement } = useContext(ShopContext);
  const inCart = isInCart(product.id);

  const inCartItem = cart.find(item => item.id === product.id);
  const quantity = inCartItem ? inCartItem.quantity : 0;

  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {/* Product Image Gallery */}
        <div className="flex flex-col items-center gap-4">
          <img 
            src={product.img} 
            alt="Product" 
            className="w-[250px] h-[250px] md:w-[500px] md:h-[400px] object-contain" />
          <div className="flex gap-4 mt-4">
            <img 
              src={product.img} 
              alt="Thumbnail 1" 
              className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] object-contain p-2 rounded-full border cursor-pointer" />
            <img 
              src={product.img} 
              alt="Thumbnail 2" 
              className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] object-contain p-2 rounded-full border cursor-pointer" />
            <img 
              src={product.img} 
              alt="Thumbnail 3" 
              className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] object-contain p-2 rounded-full border cursor-pointer" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col items-start w-full max-w-lg font-montserrat">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cookie text-center md:text-left">{product.name}</h2>
          
          {/* Rating */}
          <div className="flex items-center w-full gap-4">
            <div className="flex items-center gap-2">
              <FaStar size={30} color="orange" />
              <p className="text-lg font-medium">({product.rating})</p>
            </div>
            <h3 className="text-md">03 reviews</h3>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mt-2">
            <h2 className="text-lg sm:text-xl line-through text-gray-500">${product.old_price}</h2>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-700">${product.new_price}</h2>
          </div>

          {/* Color Options */}
          <h2 className="text-2xl font-bold mt-4">Color</h2>
          <ul className="flex gap-2 mt-2">
            {colors.slice(0, 4).map((color) => (
              <li key={color} className={`w-4 h-4 rounded-full ${color} cursor-pointer`}></li>
            ))}
          </ul>

          {/* Size Options */}
          <h2 className="text-2xl font-bold mt-4">Size</h2>
          <ul className="list-disc flex gap-8">
            {sizes.map((size) => (
              <li key={size.size} className="text-sm cursor-pointer mt-2">{size.size} ({size.number})</li>
            ))}
          </ul>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2 border border-gray-300 px-3 rounded-lg">
              <span 
                className="text-2xl sm:text-3xl font-bold cursor-pointer" 
                onClick={() => decrement(product.id)}>{inCart && '-'}</span>
              <span className="text-lg sm:text-xl font-bold">{quantity}</span>
              <span 
                className="text-2xl sm:text-3xl font-bold cursor-pointer" 
                onClick={() => increment(product.id)}>{inCart && '+'}</span>
            </div>

            <div onClick={() => handleAddToCart(product.id)}>
              <Button
                label={`${inCart ? 'In Cart' : 'Add to Cart'}`} 
                borderRadius="rounded-none" 
                size="w-36 sm:w-44 h-12"
                textColor="font-bold text-white" 
                onClick={() => handleAddToCart(product.id)} 
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 mt-6">
            <button className="p-3 border border-[#4f3222] rounded-full">
              <FaRegHeart color="#4f3222" className="text-2xl" />
            </button>
            <button className="p-3 border border-[#4f3222] rounded-full">
              <FaShuffle color="#4f3222" className="text-2xl" />
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
