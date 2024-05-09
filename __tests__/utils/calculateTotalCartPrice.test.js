import { calculateTotalCartPrice } from "../../src/reducers/utils/calculateTotalCartPrice";

describe("calculateTotalCartPrice", () => {
  test("should return 0 if cart is empty", () => {
    const cartProducts = [];
    const result = calculateTotalCartPrice(cartProducts);
    expect(result).toBe(0);
  });
  test("should return the total price of the cart", () => {
    const cartProducts = [
      { id: 1, price: 100 },
      { id: 2, price: 200 },
      { id: 3, price: 300 },
    ];
    const result = calculateTotalCartPrice(cartProducts);
    expect(result).toBe(600);
  });
  test("should throw an error if a product is in the cart with a price that isn't a number", () => {
    const cartProducts = [
      { id: 1, price: 100 },
      { id: 2, price: "200" },
      { id: 3, price: 300 },
    ];
    expect(() => calculateTotalCartPrice(cartProducts)).toThrow("Invalid price for product (id: 2)");
  });
  test("should throw an error if a product in the cart is null", () => {
    const cartProducts = [
      { id: 1, price: 100 },
      { id: 2, price: 200 },
      null,
    ];
    expect(() => calculateTotalCartPrice(cartProducts)).toThrow("Undefined or null product in cart");
  });
  test("should throw an error if a product in the cart is undefined", () => {
    const cartProducts = [
      { id: 1, price: 100 },
      { id: 2, price: 200 },
      undefined,
    ];
    expect(() => calculateTotalCartPrice(cartProducts)).toThrow("Undefined or null product in cart");
  });
});