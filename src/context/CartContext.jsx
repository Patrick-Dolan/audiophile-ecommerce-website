import { createContext, useContext, useReducer } from "react"
import { cartReducer, createInitialCartState} from "../reducers/cartReducer"
import * as actions from "../actions/index"

const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, createInitialCartState());

  function addToCart(product, quantity = 1) {
    const action = actions.addProductToCart(product, quantity);
    dispatch(action);
  }

  function removeFromCart(product, quantity = 1) {
    const action = actions.removeProductFromCart(product, quantity);
    dispatch(action);
  }

  function clearCart() {
    const action = actions.clearCart();
    dispatch(action);
  }

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart 
      }}
    >
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