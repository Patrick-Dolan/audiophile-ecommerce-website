import { removeProductFromCart } from "../../src/reducers/utils/removeProductsFromCart";
import * as actions from "../../src/actions/index";

describe('removeProductFromCart', () => {
  const products = [
    { id: 1, price: 100, quantity: 2 },
    { id: 2, price: 200, quantity: 1 },
  ];

  test("should throw an error if quantity is not a number", () => {
    const action = actions.removeProductFromCart(products[0], "1");
    expect(() => removeProductFromCart(products, action)).toThrow("Invalid quantity type. Quantity must be a number.");
  });

  test("should throw an error if products is not an array", () => {
    const action = actions.removeProductFromCart(products[0], 1);
    expect(() => removeProductFromCart(null, action)).toThrow("Invalid products type. Products must be an array.");
  });

  test("should throw an error if product is undefined", () => {
    const action = actions.removeProductFromCart(undefined, 1);
    expect(() => removeProductFromCart(products, action)).toThrow("Invalid product type. Product must be an action object.");
  });

  test("should throw an error if product is null", () => {
    const action = actions.removeProductFromCart(null, 1);
    expect(() => removeProductFromCart(products, action)).toThrow("Invalid product type. Product must be an action object.");
  });

  test("should throw an error if product does not have an id", () => {
    const action = actions.removeProductFromCart({ price: 100 }, 1);
    expect(() => removeProductFromCart(products, action)).toThrow("Invalid product. Product must have an id.");
  });

  test("should decrease the quantity of a product in the cart by quantity amount", () => {
    const action = actions.removeProductFromCart(products[0], 1);
    const result = removeProductFromCart(products, action);
    expect(result[0].quantity).toBe(1);
  });

  test("should remove the product from the cart if the quantity in the cart falls below 1", () => {
    const action = actions.removeProductFromCart(products[0], 2);
    const result = removeProductFromCart(products, action);
    expect(result.length).toBe(1);
  });
});