import cartReducer from "../../src/reducers/cartReducer";

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
    const action = {
      type: "ADD_TO_CART",
      payload: newProduct,
    };
    const result = cartReducer(undefined, action);
    expect(result.products.length).toBe(1);
    expect(result.products[0].id).toBe(1);
    expect(result.products[0].price).toBe(100);
    expect(result.products[0].quantity).toBe(1);
  });

  test("should add a quantity property to the product when adding to the cart", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: newProduct,
    };
    const result = cartReducer(undefined, action);
    expect(result.products[0].quantity).toBe(1);
  });

  test("should increase the quantity of a product in the cart if it is added again", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: newProduct,
    };
    const state = cartReducer(undefined, action);
    const result = cartReducer(state, action);
    expect(result.products[0].quantity).toBe(2);
  });

  test("should add a product to the cart and update the subtotal, vat, and grand total", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: newProduct,
    };
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
});