import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import PropTypes from "prop-types"
import Button from "../shared/Button"
import formatPrice from "../utils/formatPrice"

function OrderCompleteModal({ modalOpen, setModalOpen }) {
  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  const navigateToHome = () => {
    document.body.style.overflow = 'auto';
    setModalOpen(false);
    clearCart();
    navigate("/audiophile-ecommerce-website/");
  }

  const firstProduct = cart.products[0];

  return (
    <div className={`${modalOpen ? "" : "hidden"}`}>
      <div className="bg-white rounded-lg py-8 max-h-[75vh] max-w- overflow-y-auto fixed top-20 left-6 right-6 z-40 md:py-12 md:left-28 md:right-28 md:top-48 md:max-h-50vh lg:top-36 lg:right-[30%] lg:left-[30%]">
        <div className="mx-6 md:mx-12">
          {firstProduct !== undefined 
            ? (
              <div className="flex flex-col">
                <img src="/audiophile-ecommerce-website/checkout/icon-order-confirmation.svg" alt="" className="h-16 w-16 mb-6 md:mb-8" />
                <h5 className="mb-4 md:text-8 md:mb-6">Thank you<br />for your order</h5>
                <p className="opacity-50 mb-6 md:mb-8">You will receive an email confirmation shortly.</p>
                <div className="md:flex md:mb-11">
                  <div className="bg-off-grey rounded-t-xl md:w-3/5 md:h-35 md:rounded-tr-none md:rounded-bl-xl">
                    <div className="flex justify-between items-center pt-6 mb-3 px-6">
                      <div className="flex gap-4 w-full items-center justify-between">
                        <div className="flex justify-center items-center gap-4">
                          <img src={firstProduct.image.mobile} alt={firstProduct.name} className="w-16 h-16 rounded-lg" />
                          <div>
                            <p className="font-bold text-15px">{firstProduct.shortName}</p>
                            <p className="opacity-50">{formatPrice(firstProduct.price)}</p>
                          </div>
                        </div>
                        <p className="font-bold text-15px opacity-50">x{firstProduct.quantity}</p>
                      </div>
                    </div>
                    <hr className="mx-6" />
                    <p className="text-center opacity-50 font-bold text-xs mt-3 pb-6 md:pb-0">and {cart.products.length - 1} other items(s)</p>
                  </div>
                  <div className="bg-black px-6 mb-6 rounded-b-xl md:w-2/5 md:h-35 md:rounded-bl-none md:rounded-tr-xl md:mb-0 md:flex md:flex-col md:justify-end">
                    <p className="uppercase opacity-50 text-15px font-medium text-white pt-4 mb-2">Grand total</p>
                    <h6 className="font-bold text-white text-25 pb-5 md:pb-10">{formatPrice(cart.grandTotal)}</h6>
                  </div>
                </div>
                <Button text="Back to home" type="button" onClick={navigateToHome} />
              </div>
            )
            : (
              <div className="flex flex-col">
                <p className="text-center mb-4">No product to purchase.</p>
                <Button text="Back to home" type="button" onClick={navigateToHome} />
              </div>
            )
          }
        </div>
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