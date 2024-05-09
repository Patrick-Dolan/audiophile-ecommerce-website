import { calculateVAT } from "../../src/reducers/utils/calculateVAT";

describe("calculateVAT", () => {
  test("should calculate the VAT for a given price", () => {
    const price = 100;
    const result = calculateVAT(price);
    expect(result).toBe(20);
  });
  test("should calculate the VAT for a price of 0", () => {
    const price = 0;
    const result = calculateVAT(price);
    expect(result).toBe(0);
  });
  test("should round the VAT to the nearest whole number", () => {
    const roundUpPrice = 99;
    const roundUpPriceResult = calculateVAT(roundUpPrice);
    const roundDownPrice = 101;
    const roundDownPriceResult = calculateVAT(roundDownPrice);
    expect(roundUpPriceResult).toBe(20);
    expect(roundDownPriceResult).toBe(20);
  });
  test("should throw an error if the price is not a number", () => {
    const price = "100";
    expect(() => calculateVAT(price)).toThrow("Invalid price");
  });
});