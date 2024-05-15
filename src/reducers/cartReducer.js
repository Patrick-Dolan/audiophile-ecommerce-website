import { calculateCartSubtotal } from "./utils/calculateCartSubtotal";
import { calculateGrandTotal } from "./utils/calculateGrandTotal";
import { calculateVAT } from "./utils/calculateVAT";
import { addProductsToCart } from "./utils/addProductsToCart";
import * as constants from "../actions/actionTypes";

export const createInitialCartState = () => ({
  products: [],
  subtotal: 0,
  vat: 0,
  grandTotal: 0,
  shippingCost: 50,
});

export const cartReducer = (state = createInitialCartState(), action) => {
  switch (action.type) {
    case constants.ADD_TO_CART: {
      const updatedProducts = addProductsToCart(state.products, action);
      const updatedSubtotal = calculateCartSubtotal(updatedProducts);
      const updatedVat = calculateVAT(updatedSubtotal);
      const updatedGrandTotal = calculateGrandTotal(updatedSubtotal, state.shippingCost);
      return {
        ...state,
        subtotal: updatedSubtotal,
        vat: updatedVat,
        grandTotal: updatedGrandTotal,
        products: updatedProducts
      };
    }
    case constants.REMOVE_FROM_CART: {
      const productFromCart = state.products.find(product => product.id === action.product.id);
      if (productFromCart === undefined) {
        return state;
      }
      let updatedProducts = [];
      if (productFromCart.quantity === 1) {
        updatedProducts = state.products.filter(product => product.id !== action.product.id);
      } else {
        updatedProducts = state.products.map(product => {
          if (product.id === action.product.id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
      }
      const updatedSubtotal = calculateCartSubtotal(updatedProducts);
      const updatedVat = calculateVAT(updatedSubtotal);
      const updatedGrandTotal = calculateGrandTotal(updatedSubtotal, state.shippingCost);
      return {
        ...state,
        subtotal: updatedSubtotal,
        vat: updatedVat,
        grandTotal: updatedGrandTotal,
        products: updatedProducts
      };
    }
    case constants.CLEAR_CART: {
      return createInitialCartState();
    }
    default:
      return state;
  }
};