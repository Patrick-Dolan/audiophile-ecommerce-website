import { cartReducer } from "../../src/reducers/cartReducer";
import * as actions from "../../src/actions/index";

describe("cartReducer", () => {
  const defaultState = {
    products: [],
    subtotal: 0,
    vat: 0,
    grandTotal: 0,
    shippingCost: 50,
  };
  const newProduct = { id: 1, price: 100 };

  test("should return the initial state", () => {
    const result = cartReducer(undefined, {});
    expect(result).toEqual(defaultState);
  });

  test("should return the default state if no action type is passed into reducer", () => {
    const result = cartReducer(undefined, { type: null });
    expect(result).toEqual(defaultState);
  });

  test("should add a product to the cart", () => {
    const action = actions.addProductToCart(newProduct, 1);
    const result = cartReducer(undefined, action);
    expect(result.products.length).toBe(1);
    expect(result.products[0].id).toBe(1);
    expect(result.products[0].price).toBe(100);
    expect(result.products[0].quantity).toBe(1);
  });

  test("should add a quantity property to the product when adding to the cart", () => {
    const action = actions.addProductToCart(newProduct, 1);
    const result = cartReducer(undefined, action);
    expect(result.products[0].quantity).toBe(1);
  });

  test("should increase the quantity of a product in the cart if it is added again", () => {
    const action = actions.addProductToCart(newProduct, 1);
    const state = cartReducer(undefined, action);
    const result = cartReducer(state, action);
    expect(result.products[0].quantity).toBe(2);
  });

  test("should add a product to the cart and update the subtotal, vat, and grand total", () => {
    const action = actions.addProductToCart(newProduct, 1);
    const state = {
      products: [{ id: 2, price: 200, quantity: 1 }],
      subtotal: 200,
      vat: 40,
      grandTotal: 250,
      shippingCost: 50,
    };
    const result = cartReducer(state, action);
    expect(result.subtotal).toBe(300);
    expect(result.vat).toBe(60);
    expect(result.grandTotal).toBe(350);
  });

  test("should remove a product from the cart when quantity hits 0", () => {
    const action = actions.removeProductFromCart(newProduct);
    const addAction = actions.addProductToCart(newProduct, 1);
    const state = cartReducer(undefined, addAction);
    const result = cartReducer(state, action);
    expect(result.products.length).toBe(0);
  });

  test("should update the subtotal, vat, and grand total when the cart has all items removed using REMOVE_ONE_FROM_CART action type", () => {
    const action = actions.removeProductFromCart(newProduct);
    const addAction = actions.addProductToCart(newProduct, 1);
    const state = cartReducer(undefined, addAction);
    const result = cartReducer(state, action);
    expect(result.subtotal).toBe(0);
    expect(result.vat).toBe(0);
    expect(result.grandTotal).toBe(50);
  });

  test("should decrease the quantity of a product in the cart when removed", () => {
    const action = actions.removeProductFromCart(newProduct);
    const state = {
      products: [{ id: 1, price: 100, quantity: 2 }],
      subtotal: 200,
      vat: 40,
      grandTotal: 250,
      shippingCost: 50,
    };
    const result = cartReducer(state, action);
    expect(result.products[0].quantity).toBe(1);
  });

  test("should remove a product from the cart and update the subtotal, vat, and grand total", () => {
    const action = actions.removeProductFromCart(newProduct);
    const state = {
      products: [{ id: 1, price: 100, quantity: 2 }],
      subtotal: 200,
      vat: 40,
      grandTotal: 250,
      shippingCost: 50,
    };
    const result = cartReducer(state, action);
    expect(result.subtotal).toBe(100);
    expect(result.vat).toBe(20);
    expect(result.grandTotal).toBe(150);
  });

  test("should clear the cart", () => {
    const action = actions.clearCart();
    const state = {
      products: [{ id: 1, price: 100, quantity: 2 }],
      subtotal: 200,
      vat: 40,
      grandTotal: 250,
      shippingCost: 50,
    };
    const result = cartReducer(state, action);
    expect(result.products.length).toBe(0);
    expect(result.subtotal).toBe(0);
    expect(result.vat).toBe(0);
    expect(result.grandTotal).toBe(0);
  });
});