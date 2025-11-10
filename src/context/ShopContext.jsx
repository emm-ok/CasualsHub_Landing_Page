import React, { createContext, useEffect, useState } from "react";
import { blogPosts, products } from "../constants";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCartItems = localStorage.getItem('items');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart));
    // localStorage.clear();
  }, [cart])

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  


  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if(existingItem) {
        return prevCart.map((item) => 
          item.id === id ? {...item, quantity: item.quantity + 1} : item
      );
    }
    const newItem = products.find((item) => item.id === id);
    return [...prevCart, { ...newItem, quantity: 1}]
    })

  }

  const increment = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id ? {...item, quantity: item.quantity + 1} : item
    )
    )
  }

  const decrement = (id) => {
    setCart((prevCart) => {
      return prevCart.flatMap((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return [{ ...item, quantity: item.quantity - 1 }];
          } else {
            return []; // remove the item
          }
        }
        return [item];
      });
    });
  };
  

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const clearCart = () => {
    setCart([]);
  }

  const totalItems = () => {
    return cart.length;
  };
  

  const checkout = () => {
    alert(`You Total Purchase is $${cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0)}
Thank you for your purchase`);
    clearCart();
  }

  return (
    <ShopContext.Provider value={{ products, blogPosts, cart, isInCart, handleAddToCart, increment, decrement, removeItem, clearCart, totalItems, checkout }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
