import { calculateGrandTotal } from "../../src/reducers/utils/calculateGrandTotal";

describe("calculateGrandTotal", () => {
  test("should calculate the grand total of the cart", () => {
    const cartSubTotal = 100;
    const shippingCosts = 10;
    const result = calculateGrandTotal(cartSubTotal, shippingCosts);
    expect(result).toBe(110);
  });
  test("should calculate the grand total of the cart with a cart subtotal of 0", () => {
    const cartSubTotal = 0;
    const shippingCosts = 10;
    const result = calculateGrandTotal(cartSubTotal, shippingCosts);
    expect(result).toBe(10);
  });
  test("should calculate the grand total of the cart with shipping costs of 0", () => {
    const cartSubTotal = 100;
    const shippingCosts = 0;
    const result = calculateGrandTotal(cartSubTotal, shippingCosts);
    expect(result).toBe(100);
  });
  test("should throw an error if the cart subtotal is not a number", () => {
    const cartSubTotal = "100";
    const shippingCosts = 10;
    expect(() => calculateGrandTotal(cartSubTotal, shippingCosts)).toThrow("Invalid cart subtotal");
  });
  test("should throw an error if the shipping costs are not a number", () => {
    const cartSubTotal = 100;
    const shippingCosts = "10";
    expect(() => calculateGrandTotal(cartSubTotal, shippingCosts)).toThrow("Invalid shipping costs");
  });
});