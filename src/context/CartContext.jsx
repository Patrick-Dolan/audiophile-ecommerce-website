import { createContext, useContext, useState } from "react"

const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(["new product"]);
  
  // TODO write functionality for cart in functions here then

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const contextValue = useContext(CartContext);
  if (!contextValue) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return contextValue;
}