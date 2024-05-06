import { Link } from "react-router-dom"
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function SecondaryProductCard() {
  return (
    <article className="space-y-6">
      <img src="/audiophile-ecommerce-website/home/mobile/image-earphones-yx1.jpg" alt="YX1 Earphones" className="rounded-lg w-full"/>
        <div className="min-h-50 bg-off-grey rounded-lg">
        <ContentWrapper>
          <div className="space-y-8 py-10">
            <h2>YX1 Earphones</h2>
            <div>
              <Link to="/audiophile-ecommerce-website/product/yx1-earphones">
                <Button text="See Product" type="button" variant="transparent" />
              </Link>
            </div>
          </div>
        </ContentWrapper>
        </div>
    </article>
  )
}

export default SecondaryProductCard