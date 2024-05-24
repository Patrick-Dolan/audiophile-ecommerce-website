import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import PropTypes from "prop-types"
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function OrderCompleteModal({ modalOpen, setModalOpen }) {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
    return formattedPrice;
  }

  const navigateToHome = () => {
    document.body.style.overflow = 'auto';
    navigate("/audiophile-ecommerce-website/");
  }

  const firstProduct = cart.products[0];

  return (
    <div className={`${modalOpen ? "" : "hidden"}`}>
      <div className="bg-white rounded-lg py-8 max-h-[75vh] overflow-y-auto fixed top-20 left-6 right-6 z-40">
        <ContentWrapper>
          <div className="flex flex-col">
            <img src="/audiophile-ecommerce-website/checkout/icon-order-confirmation.svg" alt="" className="h-16 w-16 mb-6" />
            <h5 className="mb-4">Thank you<br />for your order</h5>
            <p className="opacity-50 mb-6">You will receive an email confirmation shortly.</p>
            <div className="bg-off-grey rounded-t-xl">
              <div className="flex justify-between items-center mt-6 mb-3 px-6">
                <div className="flex gap-4 w-full items-center justify-between">
                  <div className="flex justify-center items-center gap-4">
                    <img src={firstProduct.image.mobile} alt={firstProduct.name} className="w-16 h-16 rounded-lg" />
                    <div>
                      <p className="font-bold text-15">{firstProduct.shortName}</p>
                      <p className="opacity-50">{formatPrice(firstProduct.price)}</p>
                    </div>
                  </div>
                  <p className="font-bold text-15 opacity-50">x{firstProduct.quantity}</p>
                </div>
              </div>
              <hr className="mx-6" />
              <p className="text-center opacity-50 font-bold text-xs mt-3 mb-6">and {cart.products.length - 1} other items(s)</p>
            </div>
            <div className="bg-black px-6 mb-6 rounded-b-xl">
              <p className="uppercase opacity-50 text-15 font-medium text-white mt-4 mb-2">Grand total</p>
              <h6 className="font-bold text-white text-25 mb-5">{formatPrice(cart.grandTotal)}</h6>
            </div>
            <Button text="Back to home" type="button" onClick={navigateToHome} />
          </div>
        </ContentWrapper>
      </div>
      <div className={`fixed inset-0 bg-black opacity-40 z-30`}></div>
    </div>
  )
}

OrderCompleteModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
}

export default OrderCompleteModal