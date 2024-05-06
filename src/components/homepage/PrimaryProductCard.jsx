import { Link } from "react-router-dom"
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function PrimaryProductCard() {
  return (
    <article className="rounded-lg bg-sm-primary-product bg-cover bg-right py-25">
      <ContentWrapper>
        <div className="space-y-8">
          <h2>ZX7 Speaker</h2>
          <div>
            <Link to="/audiophile-ecommerce-website/product/zx7-speaker">
              <Button text="See Product" type="button" variant="transparent" />
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </article>
  )
}

export default PrimaryProductCard