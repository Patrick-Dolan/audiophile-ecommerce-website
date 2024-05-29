import ContentWrapper from "../shared/ContentWrapper"
import Button from "../shared/Button"
import { Link } from "react-router-dom"

function HomepageHero() {
  return (
    <div className="bg-black text-white bg-sm-home-hero bg-bottom bg-cover pt-22.5 md:bg-md-home-hero md:bg-cover md:bg-no-repeat md:min-h-182">
      <ContentWrapper>
        <div className="text-center pt-27 md:pt-30 pb-28 mx-auto">
          <p className="text-14px uppercase leading-19 tracking-10px opacity-50 mb-4 md:mb-6">New product</p>
          <h1 className="mb-6 md:text-14 md:leading-14.5 md:mx-auto">XX99 Mark II<br /> Headphones</h1>
          <p className="opacity-75 mb-7 md:mb-10 md:max-w-87 md:mx-auto">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to="/audiophile-ecommerce-website/product/xx99-mark-two-headphones" className="flex justify-center">
            <Button text="See Product" type="button" />
          </Link>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HomepageHero