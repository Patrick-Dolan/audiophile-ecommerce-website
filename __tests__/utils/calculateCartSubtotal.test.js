import { calculateCartSubtotal } from "../../src/reducers/utils/calculateCartSubtotal";

describe("calculateCartSubtotal", () => {
  test("should return 0 if cart is empty", () => {
    const cartProducts = [];
    const result = calculateCartSubtotal(cartProducts);
    expect(result).toBe(0);
  });

  test("should return the subtotal price of the cart", () => {
    const cartProducts = [
      { id: 1, price: 100, quantity: 1 },
      { id: 2, price: 200, quantity: 1 },
      { id: 3, price: 300, quantity: 1 },
    ];
    const result = calculateCartSubtotal(cartProducts);
    expect(result).toBe(600);
  });

  test("should return the subtotal price of the cart with multiple quantities of the same product", () => {
    const cartProducts = [
      { id: 1, price: 100, quantity: 2 },
      { id: 2, price: 200, quantity: 3 },
      { id: 3, price: 300, quantity: 1 },
    ];
    const result = calculateCartSubtotal(cartProducts);
    expect(result).toBe(1100);
  });

  test("should throw an error if a product is in the cart with a price that isn't a number", () => {
    const cartProducts = [
      { id: 1, price: 100, quantity: 1 },
      { id: 2, price: "200", quantity: 1 },
      { id: 3, price: 300, quantity: 1 },
    ];
    expect(() => calculateCartSubtotal(cartProducts)).toThrow("Invalid price for product (id: 2)");
  });

  test("should throw an error if a product in the cart is null", () => {
    const cartProducts = [
      { id: 1, price: 100, quantity: 1 },
      { id: 2, price: 200, quantity: 1 },
      null,
    ];
    expect(() => calculateCartSubtotal(cartProducts)).toThrow("Undefined or null product in cart");
  });

  test("should throw an error if a product in the cart is undefined", () => {
    const cartProducts = [
      { id: 1, price: 100, quantity: 1 },
      { id: 2, price: 200, quantity: 1 },
      undefined,
    ];
    expect(() => calculateCartSubtotal(cartProducts)).toThrow("Undefined or null product in cart");
  });
});