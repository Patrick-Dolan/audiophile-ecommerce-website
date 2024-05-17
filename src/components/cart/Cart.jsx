import { useCartContext } from "../../context/CartContext"
import { useNavigate } from "react-router"
import PropTypes from 'prop-types'
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function Cart({ closeCartOverlay }) {
  const { cart, clearCart } = useCartContext();
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

  return (
    <ContentWrapper>
      <div className="bg-white rounded-lg mt-6 py-8 px-7 flex flex-col">
        <div className="flex justify-between items-center mb-9">
          <h6>Cart ({cart.products.length})</h6>
          <button className="underline opacity-50 text-15" onClick={clearCart}>Remove all</button>
        </div>
        {cart.products.map((product, index) => (
          <div key={index} className="flex justify-between items-center mb-6">
            <div className="flex gap-4 items-center">
              <img src={product.image.mobile} alt={product.name} className="w-16 h-16 rounded-lg" />
              <div>
                <p className=" font-bold text-15">{product.shortName}</p>
                <p className="opacity-50">{formatPrice(product.price)}</p>
              </div>
            </div>
          </div>
        ))}
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