import * as actions from '../../src/actions/index';
import * as constants from '../../src/actions/actionTypes';

describe("actions", () => {
  test("should create an action to add a product to the cart", () => {
    const product = { id: 1, name: "Speaker", price: 100 };
    const expectedAction = {
      type: constants.ADD_TO_CART,
      payload: product
    };
    expect(actions.addProductToCart(product)).toEqual(expectedAction);
  });
  test("should create an action to remove a product from the cart", () => {
    const product = { id: 1, name: "Speaker", price: 100 };
    const expectedAction = {
      type: constants.REMOVE_ONE_FROM_CART,
      payload: product
    };
    expect(actions.removeProductFromCart(product)).toEqual(expectedAction);
  });
  test("should create an action to clear the cart", () => {
    const expectedAction = {
      type: constants.CLEAR_CART,
    };
    expect(actions.clearCart()).toEqual(expectedAction);
  });
});