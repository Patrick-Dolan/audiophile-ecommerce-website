import ContentWrapper from "../shared/ContentWrapper"

function CheckoutForm() {
  return (
    <ContentWrapper>
      <form>
        <div className="mb-8">
          <h2>Checkout</h2>
        </div>
        <div className="my-8">
          <h6>Summary</h6>
        </div>
      </form>
    </ContentWrapper>
  )
}

export default CheckoutForm