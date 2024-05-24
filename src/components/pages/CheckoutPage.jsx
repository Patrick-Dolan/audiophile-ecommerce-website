import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContentWrapper from "../shared/ContentWrapper"
import CheckoutForm from "../checkout/CheckoutForm"
import OrderCompleteModal from "../checkout/OrderCompleteModal"

function CheckoutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function handleOrderCompleteModal() {
    setModalOpen(true);
  }

  return (
    <div>
      <ContentWrapper>
        <div className="mt-4 mb-6">
          <button onClick={handleGoBack} className="opacity-50 text-15">Go Back</button>
        </div>
        <div className="mb-24">
          <CheckoutForm openOrderCompleteModal={handleOrderCompleteModal} />
        </div>
      </ContentWrapper>
      <OrderCompleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default CheckoutPage