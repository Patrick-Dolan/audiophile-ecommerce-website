import { useCartContext } from "../../context/CartContext"
import { useNavigate } from "react-router"
import PropTypes from 'prop-types'
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function Cart({ closeCartOverlay }) {
  const { cart, clearCart, addToCart, removeFromCart } = useCartContext();
  const navigate = useNavigate();

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
    return formattedPrice;
  }

  const handleCheckoutNavigation = () => {
    closeCartOverlay();
    navigate("/audiophile-ecommerce-website/checkout");
  }

  const handleRemoveProduct = (product) => {
    removeFromCart(product);
  }

  const handleAddProduct = (product) => {
    addToCart(product);
  }

  return (
    <ContentWrapper>
      <div className="bg-white rounded-lg mt-6 py-8 px-7 flex flex-col max-h-[75vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-9">
          <h6>Cart ({cart.products.length})</h6>
          <button className="underline opacity-50 text-15" onClick={clearCart}>Remove all</button>
        </div>
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
                <div className="flex gap-4 items-center justify-center">
                  <div className="flex gap-1 justify-center items-center bg-off-grey">
                    <button onClick={() => handleRemoveProduct(product)} className="px-4 py-2 h-full opacity-25 font-bold">-</button>
                    <p className="font-bold text-13 tabular-nums">{product.quantity}</p>
                    <button onClick={() => handleAddProduct(product)} className="px-4 py-2 h-full opacity-25 font-bold">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-6 uppercase">
          <p className="opacity-50">total</p>
          <h6>{formatPrice(cart.subtotal)}</h6>
        </div>
        <Button text="Checkout" type="button" onClick={handleCheckoutNavigation} />
      </div>
    </ContentWrapper>
  )
}

Cart.propTypes = {
  closeCartOverlay: PropTypes.func,
}

export default Cart