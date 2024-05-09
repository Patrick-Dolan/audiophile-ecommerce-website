import { calculateCartSubtotal } from "./utils/calculateCartSubtotal";
import { calculateGrandTotal } from "./utils/calculateGrandTotal";
import { calculateVAT } from "./utils/calculateVAT";
import * as constants from "../actions/actionTypes";

const createInitialCartState = () => ({
  products: [],
  subtotal: 0,
  vat: 0,
  grandTotal: 0,
  shippingCost: 50,
});

const cartReducer = (state = createInitialCartState(), action) => {
  switch (action.type) {
    case constants.ADD_TO_CART: {
      let updatedProducts = [];
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct !== undefined) {
        updatedProducts = state.products.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      } else {
        updatedProducts = [...state.products, { ...action.payload, quantity: 1 }];
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
    case constants.REMOVE_ONE_FROM_CART: {
      let updatedProducts = [];
      if (state.products.find(product => product.id === action.payload.id).quantity === 1) {
        updatedProducts = state.products.filter(product => product.id !== action.payload.id);
      } else {
        updatedProducts = state.products.map(product => {
          if (product.id === action.payload.id) {
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

export default cartReducer;