import * as constants from './actionTypes';

export const addProductToCart = (product) => {
  return {
    type: constants.ADD_TO_CART,
    payload: product
  }
};

export const removeProductFromCart = (product) => {
  return {
    type: constants.REMOVE_ONE_FROM_CART,
    payload: product
  }
};

export const clearCart = () => {
  return {
    type: constants.CLEAR_CART
  }
};