import { useContext } from "react";
import { airpods4 } from "../constants";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Button from "../components/Button";

const CartPage = () => {
  const {  cart, increment, decrement, removeItem, clearCart } = useContext(ShopContext);
  const handleProductClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to other elements
    window.scrollTo(0, 0); // Scrolls to the top
  };

  return (
    <section className="font-montserrat w-full">
      <TopBanner title="Cart" img={airpods4} />

      {/* Cart Table */}
      <div className="mt-10 overflow-x-auto px-12">
        {/* Table Header */}
        <div className="min-w-[800px] flex items-center justify-between px-6 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base uppercase font-semibold">
          <h2 className="w-[200px]">Product</h2>
          <h2 className="w-[100px] text-center">Unit Price</h2>
          <h2 className="w-[120px] text-center">Quantity</h2>
          <h2 className="w-[100px] text-center">Total</h2>
          <h2 className="w-[50px] text-center">Remove</h2>
        </div>

        {/* Cart Item Row */}
        {cart.length === 0 && <h2 className="text-xl font-bold font-montserrat text-center m-[5rem]">Cart is Empty</h2>}
        {cart.map((item) => (
          <div key={item.id} className="min-w-[800px] flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div className="flex items-center w-[200px] gap-4">
              <img src={item.img} alt="VR6" className="w-[70px] h-[70px] object-contain" />
              <h2 className="font-medium text-sm sm:text-base uppercase">{item.name}</h2>
            </div>
            <div className="w-[100px] text-center font-semibold text-sm sm:text-base">${item.new_price}</div>
            <div className="w-[120px] flex justify-center items-center gap-2">
              <button 
                className="w-7 h-7 bg-gray-200 rounded hover:bg-gray-300" 
                onClick={() => decrement(item.id)}>-</button>
              <span className="text-sm font-medium">{item.quantity}</span>
              <button 
                className="w-7 h-7 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => increment(item.id)}>+</button>
            </div>
            <div 
              className="w-[100px] text-center font-semibold text-sm sm:text-base">${Number(item.new_price * item.quantity)}</div>
            <div className="w-[50px] text-center">
              <button 
                className="text-white bg-red-500 p-4 shadow-lg rounded-full hover:bg-red-400 transition"
                onClick={() => removeItem(item.id)}>
                <FaXmark size={20} />
              </button>
            </div>
        </div>
        ))}
        <div 
          onClick={clearCart}
          className="mt-[2rem]">
          <Button 
            label='Clear Cart' />
        </div>
      </div>

      {/* Coupon & Cart Summary Section */}
      <div className="flex flex-col lg:flex-row px-12 justify-between gap-10 mt-[10rem] w-full">
        {/* Coupon Section */}
        <div className="w-full lg:w-1/2 h-fit p-12 shadow-xl border">
          <h3 className="text-lg font-semibold mb-2">Have a Coupon?</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Apply
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/2 border rounded-md p-6 shadow-lg bg-gray-50">
          <h3 className="text-xl font-bold mb-4">Cart Summary</h3>

          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-semibold">${cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Discount</span>
            <span className="font-semibold text-green-600">-$0.00</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="font-semibold">${cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2)}</span>
          </div>

          {cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2) > 0 && (
            <Link to='/checkout' onClick={(e) => handleProductClick(e)}>
              <button className="w-full mt-6 bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-md transition">
                  Proceed to Checkout
              </button>
            </Link>
          )}

          <Link
            to="/product"
            className="inline-block text-center mt-4 text-gray-700 hover:underline"
            
          >
            &larr; Continue Shopping
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default CartPage;
