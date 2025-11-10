import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  const { products } = useContext(ShopContext);
  const itemsPerPage = 3; // Number of visible products at a time
  const totalProducts = products.length;

  // Duplicate products to create a smooth infinite loop effect
  const extendedProducts = [...products, ...products];

  const [currentIndex, setCurrentIndex] = useState(itemsPerPage);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // Go to next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Go to previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Reset transition for infinite loop effect
  useEffect(() => {
    if (currentIndex === totalProducts + itemsPerPage) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(itemsPerPage);
      }, 300);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalProducts);
      }, 300);
    }
  }, [currentIndex, totalProducts, itemsPerPage]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Related <span className="text-amber-600">Products</span></h2>

      {/* Product Slider */}
      <div className="overflow-hidden relative">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {extendedProducts.map((product, index) => (
            <div key={index} className="w-3/4 px-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={nextSlide}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default RelatedProducts;
