import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function PrimaryProductCard() {
  return (
    <article className="rounded-lg bg-sm-primary-product bg-cover bg-right py-25">
      <ContentWrapper>
        <div className="space-y-8">
          <h2>ZX7 Speaker</h2>
          {/* TODO set button to go to product page */}
          <Button text="See Product" type="button" variant="transparent" onClick={() => alert("Product button clicked")} />
        </div>
      </ContentWrapper>
    </article>
  )
}

export default PrimaryProductCard