import { Link } from "react-router-dom"
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function FeaturedProductCard() {
  return (
    <article className="bg-primary text-white rounded-lg bg-no-repeat bg-sm-featured-product bg-sm-featured-product-pos bg-sm-featured-product-size">
      <div className="py-14">
        <ContentWrapper>
          <div className="flex justify-center">
            <img src="/audiophile-ecommerce-website/home/mobile/image-speaker-zx9.png" alt="placeholder" className=" max-w-43" />
          </div>
          <div className="text-center space-y-6 mt-8">
            <h1 className="max-w-40 mx-auto">ZX9 Speaker</h1>
            <p className="opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
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