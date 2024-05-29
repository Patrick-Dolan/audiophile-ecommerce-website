import HomepageHero from "../homepage/HomepageHero"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"
import FeaturedProductCard from "../homepage/FeaturedProductCard"
import PrimaryProductCard from "../homepage/PrimaryProductCard"
import SecondaryProductCard from "../homepage/SecondaryProductCard"

function HomePage() {
  return (
    <>
      <HomepageHero />
      <div className="md:mt-10">
        <ContentWrapper>
          <div className="mb-22.5">
            <NavLinks />
          </div>
          <div className="space-y-30 mb-30 md:space-y-24">
            <div className="space-y-6 md:space-y-8">
              <FeaturedProductCard />
              <PrimaryProductCard />
              <SecondaryProductCard />
            </div>
            <MarketingCard />
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}

export default HomePage