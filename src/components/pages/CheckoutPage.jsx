import { useNavigate } from "react-router-dom"
import ContentWrapper from "../shared/ContentWrapper"
import CheckoutForm from "../checkout/CheckoutForm"

function CheckoutPage() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <ContentWrapper>
      <div className="mt-4 mb-6">
        <button onClick={handleGoBack} className="opacity-50 text-15">Go Back</button>
      </div>
      <div className="mb-24">
        <CheckoutForm />
      </div>
    </ContentWrapper>
  )
}

export default CheckoutPage