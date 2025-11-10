import React, { useContext } from "react";
import CartPage from "./CartPage";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {

  const {cart, checkout} = useContext(ShopContext);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-montserrat">
      <h2 className="text-3xl font-bold text-center mb-8 uppercase">Checkout</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-8 min-h-screen">
          {/* Billing Details */}
          <div className="bg-gray-300 shadow-xl p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Billing Details</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="border border-gray-300 px-6 py-4 rounded-full" />
              <input type="text" placeholder="Last Name" className="border border-gray-300 px-6 py-4 rounded-full" />
              <input type="email" placeholder="Email Address" className="border border-gray-300 px-6 py-4 rounded-full sm:col-span-2" />
              <input type="text" placeholder="Phone Number" className="border border-gray-300 px-6 py-4 rounded-full" />
              <input type="text" placeholder="Street Address" className="border border-gray-300 px-6 py-4 rounded-full sm:col-span-2" />
              <input type="text" placeholder="City" className="border border-gray-300 px-6 py-4 rounded-full" />
              <input type="text" placeholder="Postcode / ZIP" className="border border-gray-300 px-6 py-4 rounded-full" />
              <input type="text" placeholder="Country" className="border border-gray-300 px-6 py-4 rounded-full sm:col-span-2" />
              <textarea
                placeholder="Order Notes (optional)"
                className="input sm:col-span-2 h-28 resize-none"
              ></textarea>
            </form>
          </div>

          {/* Coupon Code */}
          <div className="shadow-md p-6 rounded-xl border border-gray-200 bg-gray-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Have a Coupon?</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="border border-gray-300 px-6 py-4 rounded-full w-3/4"
              />
              <button className="bg-gray-600 text-white h-[60px] px-6 py-2 rounded hover:bg-gray-700 transition">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 h-fit sticky top-10">
          <h3 className="text-xl font-semibold mb-4">Your Order</h3>
          <ul className="divide-y">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.name}</span>
                <span>${Number(item.new_price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <h2 className="font-bold">Total</h2>
            <div className="text-xl font-bold">${cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2)}</div>
          </div>

          {/* Payment */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Payment Method</h4>
            <div className="space-y-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                <span>Direct Bank Transfer</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <span>PayPal</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <Link to='/' >
              <button 
                className="w-full bg-black text-white py-3 rounded hover:opacity-90 transition"
                onClick={checkout}>
                Place Order
              </button>
            </Link>
            <button className="w-full border border-black py-3 rounded hover:bg-gray-100 transition">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
