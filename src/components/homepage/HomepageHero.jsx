import ContentWrapper from "../shared/ContentWrapper"
import Button from "../shared/Button"
import { Link } from "react-router-dom"

function HomepageHero() {
  return (
    <div className="bg-black text-white bg-sm-home-hero bg-bottom bg-cover pt-22.5 md:bg-md-home-hero md:bg-cover md:bg-no-repeat md:min-h-182">
      <ContentWrapper>
        <div className="text-center pt-27 pb-28 max-w-95 mx-auto">
          <p className="text-14px uppercase leading-19 tracking-10px opacity-50 mb-4">New product</p>
          <h1 className="mb-6">XX99 Mark II Headphones</h1>
          <p className="opacity-75 mb-7">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to="/audiophile-ecommerce-website/product/xx99-mark-two-headphones">
            <Button text="See Product" type="button" />
          </Link>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HomepageHero