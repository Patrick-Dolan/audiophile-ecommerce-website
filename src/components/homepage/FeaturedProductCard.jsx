import { Link } from "react-router-dom"
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function FeaturedProductCard() {
  return (
    <article className="bg-primary text-white rounded-lg bg-no-repeat bg-sm-featured-product bg-sm-featured-product-pos bg-sm-featured-product-size md:bg-auto md:bg-md-featured-product-pos">
      <div className="py-14 md:pt-13 md:pb-16">
        <ContentWrapper>
          <img src="/audiophile-ecommerce-website/home/mobile/image-speaker-zx9.png" alt="ZX9 speaker" className="max-w-43 mx-auto md:mb-16" />
          <div className="text-center mt-8">
            <h1 className="mb-6 md:text-14 md:leading-14.5">ZX9<br />Speaker</h1>
            <p className="opacity-75 mb-6 md:mb-10 md:max-w-87 md:mx-auto">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <div>
              <Link to="/audiophile-ecommerce-website/product/zx9-speaker">
                <Button text="See Product" type="button" variant="tertiary" />
              </Link>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </article>
  )
}

export default FeaturedProductCard