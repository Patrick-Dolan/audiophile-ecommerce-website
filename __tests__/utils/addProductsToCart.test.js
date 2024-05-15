import { addProductsToCart } from "../../src/reducers/utils/addProductsToCart";
import * as actions from "../../src/actions/index";

describe("addProductsToCart", () => {
  const products = [
    { id: 1, price: 100, quantity: 1 },
    { id: 2, price: 200, quantity: 1 },
  ];
  const newProduct = { id: 1, price: 100 };

  test("should add a product to the cart", () => {
    const action = actions.addProductToCart(newProduct, 1);
    const result = addProductsToCart(products, action);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe(1);
    expect(result[0].price).toBe(100);
    expect(result[0].quantity).toBe(2);
  });

  test("should add a quantity property to the product when adding to the cart", () => {
    const action = actions.addProductToCart(newProduct, 1);
    const result = addProductsToCart(products, action);
    expect(result[0].quantity).toBe(2);
  });

  test("should increase the quantity of a product in the cart if it is added again", () => {
    const action = actions.addProductToCart(newProduct, 1);
    const state = addProductsToCart(products, action);
    const result = addProductsToCart(state, action);
    expect(result[0].quantity).toBe(3);
  });

  test("should add multiple of the same product to the cart when given a higher quantity", () => {
    const action = actions.addProductToCart(newProduct, 2);
    const result = addProductsToCart(products, action);
    expect(result.length).toBe(2);
    expect(result[0].quantity).toBe(3);
  });

  test("should throw an error if quantity is not a number", () => {
    const action = actions.addProductToCart(newProduct, "1");
    expect(() => addProductsToCart(products, action)).toThrow("Invalid quantity type. Quantity must be a number.");
  });

  test("should throw an error if the quantity is less than 1", () => {
    const action = actions.addProductToCart(newProduct, 0);
    expect(() => addProductsToCart(products, action)).toThrow("Quantity must be greater than 0.");
  });

  test("should throw an error if products is not an array", () => {
    const action = actions.addProductToCart(newProduct, 1);
    expect(() => addProductsToCart(null, action)).toThrow("Invalid products type. Products must be an array.");
  });

  test("should throw an error if product is undefined", () => {
    const action = actions.addProductToCart(undefined, 1);
    expect(() => addProductsToCart(products, action)).toThrow("Invalid product type. Product must be an action object.");
  });

  test("should throw an error if product is null", () => {
    const action = actions.addProductToCart(null, 1);
    expect(() => addProductsToCart(products, action)).toThrow("Invalid product type. Product must be an action object.");
  });

  test("should throw an error if product id is undefined", () => {
    const action = actions.addProductToCart({ price: 100 }, 1);
    expect(() => addProductsToCart(products, action)).toThrow("Invalid product. Product must have an id.");
  });
});