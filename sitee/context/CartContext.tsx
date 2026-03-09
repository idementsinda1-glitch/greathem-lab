use client";
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const totalFCFA = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalFCFA }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
