import ContentWrapper from "../shared/ContentWrapper"
import { useCartContext } from "../../context/CartContext"
import Button from "../shared/Button";

function CheckoutForm() {
  const { cart } = useCartContext();

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
    return formattedPrice;
  }

  return (
    <ContentWrapper>
      <form>
        <div className="mb-8 mt-6">
          <h2>Checkout</h2>
        </div>
        <div className="my-8">
          <h6 className="mb-8">Summary</h6>
          <div className="space-y-6 mb-8">
          {cart.products.map((product) => (
            <div key={product.id} className="flex justify-between items-center">
              <div className="flex gap-4 w-full items-center justify-between">
                <div className="flex justify-center items-center gap-4">
                  <img src={product.image.mobile} alt={product.name} className="w-16 h-16 rounded-lg" />
                  <div>
                    <p className="font-bold text-15">{product.shortName}</p>
                    <p className="opacity-50">{formatPrice(product.price)}</p>
                  </div>
                </div>
                <p className="font-bold text-15 opacity-50">x{product.quantity}</p>
              </div>
            </div>
          ))}
          </div>
          <div className="uppercase">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <p className="opacity-50">Total</p>
                <h6 className="font-bold">{formatPrice(cart.subtotal)}</h6>
              </div>
              <div className="flex justify-between items-center">
                <p className="opacity-50">Shipping</p>
                <h6 className="font-bold">{formatPrice(cart.shippingCost)}</h6>
              </div>
              <div className="flex justify-between items-center">
                <p className="opacity-50">Vat (included)</p>
                <h6 className="font-bold">{formatPrice(cart.subtotal)}</h6>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="opacity-50">Grand Total</p>
              <h6 className="font-bold text-primary">{formatPrice(cart.grandTotal)}</h6>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <Button text="continue & pay" type="button" onClick={() => console.log("Pay clicked")} />
          </div>
        </div>
      </form>
    </ContentWrapper>
  )
}

export default CheckoutForm